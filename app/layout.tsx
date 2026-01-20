import "./globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Footer from "@/components/Footer/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Anna Buievsla",
  description: "Portfolio Fullstack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={oswald.className}>
        <Header />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
