import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true"
    ? {
        output: "export" as const,
        basePath: "/Americano",
        assetPrefix: "/Americano/",
        trailingSlash: true,
        images: { unoptimized: true },
        typescript: { tsconfigPath: "./tsconfig.pages.json" },
      }
    : {}),
};

export default nextConfig;
