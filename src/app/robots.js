export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://faizanullah-dev.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
