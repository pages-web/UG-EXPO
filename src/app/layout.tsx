import type { Metadata } from "next";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Info from "./components/Info";
import Products from "./components/Product";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Header />
          {children}
          <Info />
          <Products />
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
