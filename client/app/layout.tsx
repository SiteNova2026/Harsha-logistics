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
  applicationName: company.shortName,
  title: {
    default: siteCopy.metadata.title,
    template: "%s | Harsha Logistics",
  },
    icons: {
    icon: "/images/logo_hq.png",
  
  },
  description: siteCopy.metadata.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Harsha Logistics",
    title: siteCopy.metadata.title,
    description: siteCopy.metadata.description,
    images: [
      {
        url: "/images/home-hero-ship.jpg",
        alt: "Freight ship at port, representing Harsha Logistics services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteCopy.metadata.title,
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
    alternateName: "Harsha Logistics",
    url: siteUrl.toString(),
    logo: new URL("/images/logo.png", siteUrl).toString(),
    image: new URL("/images/home-hero-ship.jpg", siteUrl).toString(),
    description: siteCopy.metadata.description,
    telephone: [company.phone, company.phoneAlt],
    email: company.email,
    foundingDate: "2011",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Old No. 107/108, New No 20/22, Armenian Street, 1st Floor",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600001",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
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
