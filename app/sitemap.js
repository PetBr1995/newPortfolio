const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://devpetersonbrito.netlify.app";

export default function sitemap() {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
