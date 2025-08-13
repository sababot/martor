import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import NavbarMobile from "@/components/NavbarMobile"
import Footer from "@/components/Footer"
import FooterMobile from "@/components/FooterMobile"
import Newsletter from "@/components/Newsletter"
import Separator from "@/components/Separator"

import { CartProvider } from '@/context/CartContext'
import AppLoader from '@/components/AppLoader'

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
      <body style={{ fontFamily: 'ubuntu' }} className="font-ubuntu">
        <CartProvider className="font-ubuntu" style={{ fontFamily: 'ubuntu' }}>
          <AppLoader>
            <Navbar/>
            <NavbarMobile/>
            {children}
            <Separator/>
            <Newsletter/>
            <Separator/>
            <Footer/>
            <FooterMobile/>
          </AppLoader>
        </CartProvider>
      </body>
    </html>
  );
}
