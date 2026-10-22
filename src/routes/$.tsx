import { createFileRoute, notFound } from "@tanstack/react-router";
import { SitePage } from "@/components/pages/Pages";
import { findPage } from "@/components/pages/content";
import { FAQS } from "@/components/home/data";
import { seo, jsonLd, faqSchema, breadcrumbSchema, absUrl, SITE_URL } from "@/lib/seo";

type Params = { _splat?: string; "*"?: string };
const splatOf = (p: Params) => p._splat ?? p["*"] ?? "";

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const page = findPage(splatOf(params as Params));
    if (!page) throw notFound();
    return {
      path: page.path,
      kind: page.kind,
      title: page.title,
      description: page.metaDescription,
      parent: page.parent ?? null,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = /marketjoy/i.test(loaderData.title) ? loaderData.title : `${loaderData.title} | MarketJoy`;
    const { meta, links } = seo({ title, description: loaderData.description, path: loaderData.path });
    const toUrl = (href: string) => (/^https?:/.test(href) ? href : absUrl(href));
    const crumbs = [
      { name: "Home", url: `${SITE_URL}/` },
      ...(loaderData.parent ? [{ name: loaderData.parent.label, url: toUrl(loaderData.parent.href) }] : []),
      { name: loaderData.title, url: absUrl(loaderData.path) },
    ];
    // FAQ schema only where the FAQs are visible: the full FAQ page shows all, service/product pages show the first 4.
    const faqs = loaderData.kind === "faqs" ? FAQS : loaderData.kind === "service" || loaderData.kind === "product" ? FAQS.slice(0, 4) : [];
    return {
      meta,
      links,
      scripts: [jsonLd(breadcrumbSchema(crumbs)), ...(faqs.length ? [jsonLd(faqSchema(faqs))] : [])],
    };
  },
  component: Page,
});

function Page() {
  const { path } = Route.useLoaderData();
  return <SitePage path={path} />;
}
