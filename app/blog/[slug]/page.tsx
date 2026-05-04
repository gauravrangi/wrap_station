import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.description,
      publishedTime: p.date,
      url: `${site.url}/blog/${p.slug}`,
      tags: [...p.tags],
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
    },
    keywords: [...p.tags, "San Diego", "Wrap Station"],
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/favicon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${p.slug}` },
    keywords: p.tags.join(", "),
  };

  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <article className="container-x py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-chrome">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2 text-ink-600">/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2 text-ink-600">/</span>
          <span className="text-white">{p.category}</span>
        </nav>
        <header className="mt-8 max-w-3xl">
          <p className="eyebrow">{p.category} • {p.readMinutes} min read</p>
          <h1 className="heading mt-4">{p.title}</h1>
          <p className="mt-6 text-lg text-chrome">{p.description}</p>
          <p className="mt-6 text-xs text-chrome">
            Published{" "}
            <time dateTime={p.date}>
              {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
            {" • "}by the Wrap Station team
          </p>
        </header>

        <div className="mt-12 max-w-3xl">
          {p.body.map((block, i) => {
            const [tag, text] = block;
            if (tag === "h2")
              return (
                <h2 key={i} className="mt-12 font-display text-2xl font-semibold text-white">
                  {text}
                </h2>
              );
            return (
              <p key={i} className="mt-4 text-base leading-relaxed text-chrome">
                {text}
              </p>
            );
          })}
        </div>

        <aside className="mt-16 rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-900 to-accent/10 p-8 sm:p-10">
          <p className="eyebrow">Talk to a real installer</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
            Have questions about your specific car?
          </h2>
          <p className="mt-3 max-w-xl text-chrome">
            Send us your year, make and model and we'll come back with options
            tailored to your build, your budget and your timeline.
          </p>
          <Link href="/contact" className="btn-primary mt-6">Get a free quote</Link>
        </aside>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-xl font-semibold text-white">Keep reading</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="card hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-widest text-accent">{r.category}</p>
                  <p className="mt-2 font-display text-lg font-semibold text-white">{r.title}</p>
                  <p className="mt-2 text-sm text-chrome">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: site.url },
              { name: "Blog", url: `${site.url}/blog` },
              { name: p.title, url: `${site.url}/blog/${p.slug}` },
            ])
          ),
        }}
      />
    </>
  );
}
