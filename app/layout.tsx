import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://mohamed-ali.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mohamed Ali Gaoudi — Full-Stack Engineer",
  description:
    "Full-stack engineer who ships production AI, end to end. B.Sc. Information Engineering @ TU Munich. React, FastAPI, Node, PostgreSQL, Docker & LLM automation.",
  keywords: [
    "Mohamed Ali Gaoudi",
    "Full-Stack Engineer",
    "React",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "TU Munich",
    "Heilbronn",
  ],
  authors: [{ name: "Mohamed Ali Gaoudi" }],
  openGraph: {
    title: "Mohamed Ali Gaoudi — Full-Stack Engineer",
    description:
      "Full-stack engineer who ships production AI, end to end. Two SaaS platforms from architecture to deployment.",
    url: SITE_URL,
    siteName: "mohamed_ali.dev",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali Gaoudi — Full-Stack Engineer",
    description:
      "Full-stack engineer who ships production AI, end to end.",
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml," +
          encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="oklch(0.74 0.16 32)"/><text x="16" y="22" font-family="monospace" font-size="18" font-weight="600" text-anchor="middle" fill="oklch(0.25 0.06 32)">M</text></svg>`
          ),
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
