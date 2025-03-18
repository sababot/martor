import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import NavbarMobile from "@/components/NavbarMobile"
import Footer from "@/components/Footer"
import FooterMobile from "@/components/FooterMobile"
import Newsletter from "@/components/Newsletter"
import Separator from "@/components/Separator"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martor",
  description: "coldest clothing brand on the planet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <NavbarMobile/>
        {children}
        <Separator/>
        <Newsletter/>
        <Separator/>
        <Footer/>
        <FooterMobile/>
      </body>
    </html>
  );
}
