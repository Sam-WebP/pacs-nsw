import "@/assets/css/icofont.min.css";
import "./globals.css";

import { Hind, Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "Pacific & Australian Community Services",
  description:
    "PACS NSW empowers youth through mentorship, guidance and support. We create safe spaces for skill-building, personal growth and community connections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${hind.variable}`}>
      <body>{children}</body>
    </html>
  );
}
