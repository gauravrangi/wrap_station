/** @type {import('next').NextConfig} */
// On Vercel, leave basePath empty so the site lives at the root.
// GitHub Pages CI sets NEXT_PUBLIC_BASE_PATH (from actions/configure-pages)
// so the same build works under /<repo> on github.io.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
