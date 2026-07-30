import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yogesh E — Software Engineer & Full Stack Developer",
  description:
    "Software Engineer specializing in Full Stack Development, AI-powered platforms, and scalable backend systems. Building products from idea to deployment.",
  keywords: [
    "Yogesh E",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Backend Developer",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Yogesh E" }],
  creator: "Yogesh E",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yogesh E — Software Engineer",
    description:
      "Full Stack Developer & AI Platform Builder. Building scalable web apps and AI-powered systems.",
    siteName: "Yogesh E Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh E — Software Engineer",
    description:
      "Full Stack Developer & AI Platform Builder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b] text-[#fafafa]`}
      >
        {children}
      </body>
    </html>
  );
}
