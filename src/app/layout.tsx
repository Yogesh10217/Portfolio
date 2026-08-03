import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yogesh E — Software Engineer & Full Stack Developer",
  description:
    "Software Engineer specializing in Full Stack Development, AI-powered platforms, and scalable backend systems. Building products from idea to deployment.",
  keywords: [
    "Yogesh E", "Software Engineer", "Full Stack Developer",
    "AI Engineer", "Backend Developer", "React", "Next.js", "Python", "FastAPI", "Portfolio",
  ],
  authors: [{ name: "Yogesh E" }],
  creator: "Yogesh E",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yogesh E — Software Engineer",
    description: "Full Stack Developer & AI Platform Builder. Building scalable web apps and AI-powered systems.",
    siteName: "Yogesh E Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh E — Software Engineer",
    description: "Full Stack Developer & AI Platform Builder.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakartaSans.variable} ${inter.variable} antialiased bg-[#08080f] text-[#f8fafc]`}>
        {children}
      </body>
    </html>
  );
}
