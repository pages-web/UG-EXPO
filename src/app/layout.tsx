import { type Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import ClientLayout from "@/app/client-layout";

import "./globals.css";
import { Providers } from "@/providers";
import NavigationFyodor from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={(inter.variable, manrope.variable)}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>

      <body className={("font-manrope w-full dark:bg-white")}>             {/* dark:bg-[#202020]" */}
        <Providers>
          <NavigationFyodor/>
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}