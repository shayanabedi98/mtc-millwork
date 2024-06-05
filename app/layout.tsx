import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/universal/Navbar";
import Footer from "@/components/universal/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTC Millwork Inc.",
  description:
    "Transform your space with MTC Millwork Inc.'s premium custom cabinets and millwork solutions. Elevate your interiors with bespoke designs crafted to perfection. Schedule a consultation today!",
  keywords:
    "custom cabinets, millwork solutions, woodworking, carpentry, interior design, home renovation, kitchen remodeling, bespoke designs, craftsmanship, consultation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-secondary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
