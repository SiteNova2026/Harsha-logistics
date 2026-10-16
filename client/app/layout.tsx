import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteCopy } from "@/lib/constants/siteCopy";
import "./globals.css";
import "./styles/global.scss";
import{ ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteCopy.metadata.title,
  description: siteCopy.metadata.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} site-body`}>
        <Header />
        {children}
       <ToastContainer
          position="top-right"
          autoClose={4000}
          theme="colored"
          newestOnTop
          closeOnClick
          pauseOnHover
        />
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
