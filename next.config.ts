import type { NextConfig } from "next";
import path from "path";

const pagesBase = process.env.GITHUB_PAGES === "true" ? "/lj-plumbing" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  outputFileTracingRoot: path.join(__dirname),
  ...(pagesBase ? { basePath: pagesBase, assetPrefix: pagesBase } : {}),
};

export default nextConfig;
