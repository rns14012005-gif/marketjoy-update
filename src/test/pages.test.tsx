import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { ALL_PAGES, findPage } from "@/components/pages/content";

describe("site pages", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  it("every registered page resolves to a route", () => {
    for (const p of ALL_PAGES) {
      expect(router.matchRoutes(p.path).at(-1)?.routeId, p.path).not.toBe(rootRouteId);
      expect(router.matchRoutes(p.path + "/").at(-1)?.routeId, p.path + "/").not.toBe(rootRouteId);
    }
  });
  it("finds pages by splat with or without slashes", () => {
    expect(findPage("products/infojoy/")?.title).toBe("InfoJoy");
    expect(findPage("industry-news")?.kind).toBe("external");
    expect(findPage("nope")).toBeNull();
  });
  it("has no duplicate paths and registers 55+ pages", () => {
    expect(new Set(ALL_PAGES.map((p) => p.path)).size).toBe(ALL_PAGES.length);
    expect(ALL_PAGES.length).toBeGreaterThan(55);
  });
});

import { NAV, FOOTER, SERVICES, PRODUCTS, INDUSTRIES } from "@/components/home/data";
describe("internal links", () => {
  it("every internal nav/footer/card link has a page", () => {
    const hrefs = [
      ...NAV.flatMap((g) => g.items.map((i) => i.href)),
      ...Object.values(FOOTER).flat().filter((x): x is { label: string; href: string } => typeof x === "object" && "href" in x).map((x) => x.href),
      ...SERVICES.map((s) => s.href), ...PRODUCTS.map((p) => p.href), ...INDUSTRIES.map((i) => i.href),
      "/about/", "/products/", "/case-studies/", "/client-reviews/", "/faqs/", "/blog/", "/contact-us/",
    ].filter((h) => h.startsWith("/"));
    const missing = hrefs.filter((h) => !findPage(h));
    expect(missing).toEqual([]);
  });
});
