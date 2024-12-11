import type { Metadata } from "next";
import Header from "@/modules/header";
import Footer from "@/modules/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "DNSGift",
  description: "Gerenating DNS gifts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
