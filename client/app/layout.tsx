import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteCopy } from "@/lib/constants/siteCopy";
import { company } from "@/lib/constants/company";
import { siteUrl } from "@/lib/constants/seo";
import "./globals.css";
import "./styles/global.scss";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: company.name,
  authors: [{ name: company.name }],
  publisher: company.name,
  category: "shipping and logistics",
  keywords: [
    "Harshavardhani Shipping & Forwarding",
    "Harsha Logistics",
    "shipping company in Chennai",
    "freight forwarder in India",
    "sea freight services Chennai",
    "air cargo services Chennai",
    "customs clearance Chennai",
    "import export logistics India",
    "warehousing Chennai",
    "logistics company Chennai",
  ],
  title: {
    default: company.name,
    template: "%s | Harshavardhani Shipping & Forwarding",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  icons: {
    icon: "/images/logo_hq.png",
  },
  description: siteCopy.metadata.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl.toString(),
    siteName: company.name,
    title: company.name,
    description: siteCopy.metadata.description,
    images: [
      {
        url: "/images/home-hero-ship.jpg",
        alt: "Harshavardhani Shipping & Forwarding India Pvt Ltd shipping and logistics services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: siteCopy.metadata.description,
    images: ["/images/home-hero-ship.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": new URL("/#business", siteUrl).toString(),
    name: company.name,
    alternateName: ["Harsha Logistics", "Harshavardhani Shipping"],
    url: siteUrl.toString(),
    logo: new URL("/images/logo.png", siteUrl).toString(),
    image: new URL("/images/home-hero-ship.jpg", siteUrl).toString(),
    description: siteCopy.metadata.description,
    telephone: [company.phone, company.phoneAlt],
    email: company.email,
    foundingDate: "2004",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Old No. 107/108, New No 20/22, Armenian Street, 1st Floor",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600001",
      addressCountry: "IN",
    },
  areaServed: ["India", "Worldwide"],
  };

  return (
    <html lang="en-IN" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} site-body`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
       <ToastContainer
          position="top-right"
          autoClose={3000}
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
