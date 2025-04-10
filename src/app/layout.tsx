import { ReactQueryProvider } from "@/api/reactQueryConfig";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/next";
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
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        <ReactQueryProvider>
          <NavBar />
          <main className="container mx-auto pt-[64px] flex-1 px-2 sm:px-2 md:px-8 lg:px-16 xl:px-32">
            {children}
            <Analytics />
          </main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
