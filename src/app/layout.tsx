import { ReactQueryProvider } from "@/api/reactQueryConfig";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Saint Seiya API – Free & Open REST API for Characters, Techniques, and More",
  description:
    "Explore the universe of Saint Seiya with a free, open-source RESTful API. Access detailed data on characters, techniques, armors, and more for your apps and projects.",
  keywords: [
    "Saint Seiya API",
    "Cavaleiros do Zodíaco API",
    "Saint Seiya characters",
    "Saint Seiya data",
    "anime API",
    "REST API",
    "free anime API",
    "Saint Seiya developer API",
  ],
  openGraph: {
    type: "website",
    url: "https://www.saintseiyaapi.com",
    title: "Saint Seiya API – Free & Open REST API",
    description:
      "Access detailed and structured information about Saint Seiya characters, armors, and more through a modern and free API.",
    images: [
      {
        url: "https://www.saintseiyaapi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saint Seiya API Open Graph Image",
      },
    ],
    siteName: "Saint Seiya API",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saint Seiya API – Free & Open REST API",
    description:
      "Explore the Saint Seiya universe via a powerful public API with detailed data for developers and fans alike.",
    images: ["https://www.saintseiyaapi.com/og-image.jpg"],
  },
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
            <SpeedInsights />
          </main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
