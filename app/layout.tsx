import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://outvue.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Outvue — Scale Personalized Video Outreach with AI",
    template: "%s | Outvue",
  },
  description:
    "Outvue turns one video recording into thousands of personalized outbound videos. Built for sales teams, recruiters, and agencies who want replies, not opens.",
  keywords: [
    "AI video outreach",
    "personalized video sales",
    "video prospecting",
    "sales automation",
    "recruiting video outreach",
  ],
  openGraph: {
    title: "Outvue — Scale Personalized Video Outreach with AI",
    description:
      "Generate thousands of personalized videos from a single recording. Built for sales, recruiting, and agency teams.",
    url: siteUrl,
    siteName: "Outvue",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Outvue" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outvue — Scale Personalized Video Outreach with AI",
    description: "Generate thousands of personalized videos from a single recording.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jbmono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
