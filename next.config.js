/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // The dashboard and login routes open data/outvue.db via a runtime file
  // path (node:sqlite), which Next.js's dependency tracer can't detect
  // statically. Without this, Vercel may not include the .db file in the
  // deployed serverless functions, causing "unable to open database file"
  // in production even though it works locally.
  outputFileTracingIncludes: {
    "/**": ["./data/outvue.db"],
  },
};

module.exports = nextConfig;
