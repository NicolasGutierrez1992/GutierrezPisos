import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import StructuredData from "@/components/StructuredData";
import { ANALYTICS, SITE } from "@/lib/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600"],
});

const TITLE = "Gutiérrez Pisos | Colocación de pisos flotantes en CABA";
const DESCRIPTION =
  "Presupuesto en el día, garantía por escrito y material que llega a tu casa antes de la obra. Colocación profesional de pisos flotantes, vinílicos y techos en PVC en CABA.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_AR",
    type: "website",
  },
  verification: ANALYTICS.googleSiteVerification
    ? { google: ANALYTICS.googleSiteVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        <StructuredData />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
