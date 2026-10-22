import { describe, expect, it } from "vitest";
import { FAQS } from "@/components/home/data";
import { absUrl, breadcrumbSchema, faqSchema, jsonLd, seo, SITE_URL } from "@/lib/seo";

describe("seo helpers", () => {
  it("builds absolute canonical urls with a trailing slash", () => {
    expect(absUrl("/")).toBe(`${SITE_URL}/`);
    expect(absUrl("/b2b-lead-generation-services")).toBe(`${SITE_URL}/b2b-lead-generation-services/`);
    expect(absUrl("faqs/")).toBe(`${SITE_URL}/faqs/`);
  });

  it("returns title, description, og:url and a canonical link", () => {
    const { meta, links } = seo({ title: "T | MarketJoy", description: "D", path: "/faqs" });
    expect(meta).toContainEqual({ title: "T | MarketJoy" });
    expect(meta).toContainEqual({ property: "og:url", content: `${SITE_URL}/faqs/` });
    expect(links).toEqual([{ rel: "canonical", href: `${SITE_URL}/faqs/` }]);
  });

  it("creates FAQPage schema that covers every FAQ and is valid JSON", () => {
    const entry = jsonLd(faqSchema(FAQS));
    const parsed = JSON.parse(entry.children);
    expect(parsed["@type"]).toBe("FAQPage");
    expect(parsed.mainEntity).toHaveLength(FAQS.length);
    expect(parsed.mainEntity[0].acceptedAnswer.text).toBe(FAQS[0]?.a);
  });

  it("escapes < so a script tag can never be closed early", () => {
    expect(jsonLd({ a: "</script>" }).children).not.toContain("<");
  });

  it("numbers breadcrumb positions from 1", () => {
    const b = breadcrumbSchema([{ name: "Home", url: "x" }, { name: "Page", url: "y" }]);
    expect(b.itemListElement.map((i) => i.position)).toEqual([1, 2]);
  });
});
