import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.bespokesoftware.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Bespoke Software Solutions - Custom Software Development",
  description:
    "Professional custom software development services. We build web applications, mobile apps, and enterprise solutions tailored to your business needs.",
  keywords: "software development, web development, mobile apps, custom software, enterprise solutions",
  authors: [{ name: "Bespoke Software Solutions" }],
  creator: "Bespoke Software Solutions",
  publisher: "Bespoke Software Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Bespoke Software Solutions - Custom Software Development",
    description:
      "Professional custom software development services. We build web applications, mobile apps, and enterprise solutions tailored to your business needs.",
    siteName: "Bespoke Software Solutions",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Bespoke Software Solutions - Custom Software Development",
      },
    ],
  },
  // Removed Twitter metadata
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={baseUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bespoke Software Solutions",
              url: baseUrl,
              logo: `${baseUrl}/images/logo.png`,
              description:
                "We build custom web, mobile, and enterprise applications tailored to your needs.",
              sameAs: [
                "https://www.linkedin.com/company/bespokesoftwaresolutions/ ",
                "https://www.instagram.com/bespoke.softwaresolutions/"
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
