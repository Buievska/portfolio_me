import "./globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Footer from "@/components/Footer/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-me-ruddy-phi.vercel.app/"),

  title: {
    default: "Anna Buievska | Full-Stack Developer Portfolio",
    template: "%s | Anna Buievska",
  },
  description:
    "Professional portfolio of Anna Buievska, a Full-Stack Developer specializing in Next.js, TypeScript, and modern UI/UX design. Based in Poland.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Anna Buievska",
    "Portfolio",
    "Web Development",
    "Frontend Developer",
  ],
  authors: [{ name: "Anna Buievska" }],
  creator: "Anna Buievska",

  // Open Graph
  openGraph: {
    title: "Anna Buievska | Full-Stack Developer",
    description:
      "Explore high-performance web applications and digital solutions crafted with precision.",
    url: "https://portfolio-me-ruddy-phi.vercel.app/",
    siteName: "Anna Buievska Portfolio",
    images: [
      {
        url: "/portfolio-main.png",
        width: 1200,
        height: 630,
        alt: "Anna Buievska Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Anna Buievska | Full-Stack Developer",
    description:
      "Modern web development solutions built with Next.js and TypeScript.",
    images: ["/portfolio-main.png"],
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={oswald.className}>
        <Header />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
