import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // STATIC_EXPORT=1 pnpm build → plain HTML in out/ (used for the hosted preview).
  ...(process.env.STATIC_EXPORT ? { output: "export" as const, images: { unoptimized: true } } : {}),
};

export default nextConfig;
