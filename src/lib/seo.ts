const envUrl = (import.meta as { env?: Record<string, string | undefined> }).env?.["VITE_SITE_URL"];

export const SITE_URL = (envUrl ?? "https://marketjoy.com").replace(/\/+$/, "");
export const SITE_NAME = "MarketJoy";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** "/services/x" or "services/x/" -> "https://site/services/x/" ("/" stays the site root). */
export const absUrl = (path: string) => {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
};

type SeoInput = { title: string; description: string; path: string };

export function seo({ title, description, path }: SeoInput) {
  const url = absUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** One <script type="application/ld+json"> entry for TanStack's head(). */
export const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify(data).replace(/</g, "\\u003c"),
});

export const faqSchema = (items: readonly { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (crumbs: readonly { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url }),
  ),
});

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MarketJoy, Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  email: "hello@marketjoy.com",
  telephone: "+1-484-638-6389",
  address: {
    "@type": "PostalAddress",
    streetAddress: "186 N Palafox Street",
    addressLocality: "Pensacola",
    addressRegion: "FL",
    postalCode: "32502",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/marketjoy-inc./",
    "https://www.youtube.com/@MarketJoy",
    "https://www.facebook.com/marketjoy",
  ],
};
