import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | AI Automation and Digital Skills for African Talent`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  robots: site.indexing
    ? { index: true, follow: true }
    : { index: false, follow: false },
  ...(site.indexing && {
    openGraph: {
      siteName: site.name,
      type: "website",
    },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
