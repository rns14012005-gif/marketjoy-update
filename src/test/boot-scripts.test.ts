import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { INTRO_SCRIPT } from "@/lib/boot-scripts";

const run = (type: string, referrer = "", hash = "") => {
  vi.spyOn(performance, "getEntriesByType").mockReturnValue([{ type }] as unknown as PerformanceEntryList);
  Object.defineProperty(document, "referrer", { value: referrer, configurable: true });
  window.location.hash = hash;
  new Function(INTRO_SCRIPT)();
};

describe("intro + reload boot script", () => {
  let scrollTo: ReturnType<typeof vi.fn>;
  beforeEach(() => {
    document.documentElement.className = "";
    sessionStorage.clear();
    sessionStorage.setItem("tsr-scroll-restoration-v1_3", '{"/":{"window":{"scrollY":4200}}}');
    sessionStorage.setItem("mj-other", "keep");
    scrollTo = vi.fn();
    Object.defineProperty(window, "scrollTo", { value: scrollTo, writable: true, configurable: true });
    history.scrollRestoration = "auto";
  });
  afterEach(() => vi.restoreAllMocks());

  it("on reload: starts at the top, clears saved scroll, stops browser restoring, shows the intro", () => {
    run("reload");
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "instant" });
    expect(sessionStorage.getItem("tsr-scroll-restoration-v1_3")).toBeNull();
    expect(sessionStorage.getItem("mj-other")).toBe("keep");
    expect(history.scrollRestoration).toBe("manual");
    expect(document.documentElement.classList.contains("intro")).toBe(true);
  });

  it("on reload with a #hash: keeps the deep link", () => {
    run("reload", "", "#faq");
    expect(scrollTo).not.toHaveBeenCalled();
    expect(sessionStorage.getItem("tsr-scroll-restoration-v1_3")).not.toBeNull();
  });

  it("when moving between pages of the site: no intro and no scroll change", () => {
    run("navigate", window.location.origin + "/about");
    expect(scrollTo).not.toHaveBeenCalled();
    expect(document.documentElement.classList.contains("intro")).toBe(false);
  });

  it("on a fresh visit from elsewhere: shows the intro", () => {
    run("navigate", "https://google.com/");
    expect(document.documentElement.classList.contains("intro")).toBe(true);
  });

  it("back/forward keeps the browser's own scroll restoration", () => {
    run("back_forward", window.location.origin + "/about");
    expect(scrollTo).not.toHaveBeenCalled();
    expect(history.scrollRestoration).toBe("auto");
  });
});
