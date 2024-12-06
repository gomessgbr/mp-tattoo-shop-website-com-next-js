import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { inter, island_moments, londrina_solid } from "./_lib/fonts";

export const metadata: Metadata = {
  title: "Sandro Luz Tattoo Shop",
  description: "Página de tattoo Sandro Luz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${londrina_solid.variable} ${island_moments.variable} antialiased bg-background  flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-1 container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
