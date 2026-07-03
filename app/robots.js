const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://devpetersonbrito.netlify.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
