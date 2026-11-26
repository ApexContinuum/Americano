import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = (() => {
  const base = new URL(process.env.GITHUB_PAGES === "true" ? "https://apexcontinuum.github.io/Americano/" : "https://americano-traders.abdullahabbasi98.chatgpt.site/");
  const title = "Authentic Products. On-Demand Delivery";
  const description = "Americano Traders supplies authentic janitorial, office, and breakroom products on demand.";
  return {
    metadataBase: base,
    title,
    description,
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
    openGraph: { title, description, type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Americano Traders — Authentic Products. On-Demand Delivery." }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
})();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
