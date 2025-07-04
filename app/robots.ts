import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/_next/"], // internal and build files
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/private/"], // more lenient for Googlebot
      },
    ],
    sitemap: "https://www.bespokesoftware.in/sitemap.xml",
    host: "https://www.bespokesoftware.in",
  };
}
