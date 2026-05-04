/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
// When deploying to GitHub Pages at https://<user>.github.io/<repo>,
// the site lives under /<repo>. Override with NEXT_PUBLIC_BASE_PATH.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/wrap_station" : "");

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
