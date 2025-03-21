import { ReactQueryProvider } from "@/api/reactQueryConfig";
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
          <ReactQueryProvider>
            <NavBar />
            <main className="container mx-auto pt-[64px]">{children}</main>
          </ReactQueryProvider>
        </body>
      </html>

      <Footer />
    </>
  );
}
