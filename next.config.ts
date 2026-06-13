import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel: default output. GCP Cloud Run (Docker): standalone via Dockerfile build.
  ...(process.env.VERCEL ? {} : { output: "standalone" }),
};

export default nextConfig;
