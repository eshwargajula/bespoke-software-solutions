import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Bespoke Software Solutions - Healthcare & Startup Technology Experts",
    template: "%s | Bespoke Software Solutions",
  },
  description:
    "Transform healthcare operations and accelerate startup growth with our bespoke software solutions. HIPAA-compliant hospital systems, EHR platforms, and scalable MVP development for innovative startups.",
  keywords: [
    "healthcare software development",
    "hospital management systems",
    "electronic health records",
    "EHR development",
    "startup MVP development",
    "HIPAA compliant software",
    "healthcare technology",
    "startup technology solutions",
    "patient care platforms",
    "medical software development",
    "healthcare IT solutions",
    "startup scaling solutions",
  ],
  authors: [{ name: "Bespoke Software Solutions", url: "https://bespokesoftware.com" }],
  creator: "Bespoke Software Solutions",
  publisher: "Bespoke Software Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bespokesoftware.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bespokesoftware.com",
    title: "Bespoke Software Solutions - Healthcare & Startup Technology Experts",
    description:
      "Transform healthcare operations and accelerate startup growth with our bespoke software solutions. HIPAA-compliant systems and scalable platforms.",
    siteName: "Bespoke Software Solutions",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bespoke Software Solutions - Healthcare & Startup Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Software Solutions - Healthcare & Startup Technology Experts",
    description: "Transform healthcare operations and accelerate startup growth with our bespoke software solutions.",
    creator: "@bespokesoftware",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bespoke Software Solutions",
              url: "https://bespokesoftware.com",
              logo: "https://bespokesoftware.com/images/logo.png",
              description: "Healthcare and startup technology solutions provider",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "hello@bespokesoftware.com",
              },
              sameAs: [
                "https://twitter.com/bespokesoftware",
                "https://linkedin.com/company/bespokesoftware",
                "https://facebook.com/bespokesoftware",
              ],
              foundingDate: "2017",
              numberOfEmployees: "25-50",
              industry: "Software Development",
              serviceArea: {
                "@type": "Place",
                name: "United States",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </body>
    </html>
  )
}
