import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  message?: string;
  // honeypot — bots fill this; humans don't
  website?: string;
};

function escape(s: string) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website && body.website.trim() !== "") {
    // honeypot triggered — pretend success
    return NextResponse.json({ ok: true });
  }

  const required: (keyof Payload)[] = ["name", "email", "phone", "vehicle", "service"];
  for (const field of required) {
    if (!body[field] || String(body[field]).trim() === "") {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL || site.email;
  const from = process.env.QUOTE_FROM_EMAIL || "Wrap Station <quotes@wrapstationsocal.com>";

  if (!apiKey) {
    console.error("[quote] RESEND_API_KEY not set");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `New quote: ${body.service} — ${body.vehicle}`;
  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;color:#0c0d10">
      <h2 style="margin:0 0 16px">New quote request</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:6px 0;color:#666">Name</td><td><strong>${escape(body.name)}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#666">Email</td><td><a href="mailto:${escape(body.email)}">${escape(body.email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#666">Phone</td><td><a href="tel:${escape(body.phone)}">${escape(body.phone)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#666">Vehicle</td><td>${escape(body.vehicle)}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Service</td><td>${escape(body.service)}</td></tr>
      </table>
      ${body.message ? `<hr style="border:none;border-top:1px solid #eee;margin:20px 0"/><p style="white-space:pre-wrap">${escape(body.message)}</p>` : ""}
    </div>
  `;

  const text = [
    `New quote request`,
    ``,
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Phone: ${body.phone}`,
    `Vehicle: ${body.vehicle}`,
    `Service: ${body.service}`,
    body.message ? `\n${body.message}` : "",
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: body.email,
      subject,
      html,
      text,
    });
    if (error) {
      console.error("[quote] Resend error", error);
      return NextResponse.json({ error: "Could not send" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[quote] exception", e);
    return NextResponse.json({ error: "Could not send" }, { status: 502 });
  }
}
