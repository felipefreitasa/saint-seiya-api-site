import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saint Seiya API",
  description:
    "A powerful API providing detailed information on Saint Seiya characters!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <NavBar />
          <main className="container mx-auto">{children}</main>
        </body>
      </html>

      <Footer />
    </>
  );
}
