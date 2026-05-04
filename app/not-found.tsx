import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="heading mt-3">This page took a wrong turn.</h1>
      <p className="mt-4 max-w-md text-chrome">
        The page you were looking for doesn't exist. Try heading back to the home
        page or browsing our services.
      </p>
      <Link href="/" className="btn-primary mt-8">Back home</Link>
    </section>
  );
}
