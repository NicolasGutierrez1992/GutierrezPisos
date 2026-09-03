import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Gutiérrez Pisos | Colocación de pisos flotantes en CABA",
  description:
    "Presupuesto en el día, garantía por escrito y material que llega a tu casa antes de la obra. Colocación profesional de pisos flotantes y vinílicos en CABA.",
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
      </body>
    </html>
  );
}
