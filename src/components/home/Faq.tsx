import { useState, type CSSProperties } from "react";
import { ArrowRight, Plus, Search, X } from "lucide-react";
import { FlowButton } from "@/components/ui/flow-button";
import { Reveal } from "./Reveal";
import { BOOK_URL, FAQS, FAQ_CATEGORIES } from "./data";

type Cat = "All" | (typeof FAQ_CATEGORIES)[number];

export function FaqSection({ heading = false, allLink }: { heading?: boolean; allLink?: string }) {
  const [cat, setCat] = useState<Cat>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(FAQS[0]?.q ?? null);

  const needle = query.trim().toLowerCase();
  const list = FAQS.filter((f) => (cat === "All" || f.cat === cat) && (!needle || `${f.q} ${f.a}`.toLowerCase().includes(needle)));
  const count = (c: Cat) => (c === "All" ? FAQS.length : FAQS.filter((f) => f.cat === c).length);

  const pick = (c: Cat) => {
    setCat(c);
    setOpen(FAQS.find((f) => c === "All" || f.cat === c)?.q ?? null);
  };

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
          {heading ? (
            <>
              <span className="eyebrow">Frequently asked questions</span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Answers to Common Questions</h2>
              <p className="mt-3 max-w-md text-muted-foreground">Pick a topic or search. Everything you need to know before booking a meeting.</p>
            </>
          ) : (
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Browse by topic</p>
          )}

          <label className="relative mt-6 block">
            <span className="sr-only">Search questions</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search questions…"
              className="w-full rounded-xl border bg-card py-3 pl-10 pr-10 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:border-gold focus:shadow-[0_0_0_3px_rgb(245_190_1/0.25)]" />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-2.5 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground">
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </label>

          <div role="tablist" aria-label="FAQ topics" className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 lg:flex-col lg:flex-nowrap lg:gap-1.5 lg:overflow-visible">
            {(["All", ...FAQ_CATEGORIES] as Cat[]).map((c) => {
              const on = cat === c;
              return (
                <button key={c} role="tab" aria-selected={on} onClick={() => pick(c)}
                  className={`flex shrink-0 items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-left text-sm font-semibold transition-all duration-300 ${on ? "border-transparent bg-navy text-navy-foreground shadow-card lg:translate-x-1.5" : "bg-card text-foreground/80 hover:border-gold/60 hover:text-foreground"}`}>
                  <span className="flex items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 rounded-full transition-all ${on ? "scale-150 bg-gold" : "bg-muted-foreground/40"}`} />
                    {c}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${on ? "bg-white/15" : "bg-accent text-brand-blue"}`}>{count(c)}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-7 hidden rounded-2xl bg-navy p-6 text-navy-foreground shadow-lift lg:block">
            <p className="font-display text-lg font-bold">Still have questions?</p>
            <p className="mt-1.5 text-sm text-navy-foreground/75">Talk to our team and get a plan for your pipeline.</p>
            <FlowButton href={BOOK_URL} variant="gold" className="mt-4 w-full py-3 text-sm">Book a Meeting</FlowButton>
          </div>
          {allLink && (
            <a href={allLink} className="group mt-5 hidden items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline lg:inline-flex">
              View all FAQs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </Reveal>

        <Reveal from="right">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground" aria-live="polite">
            {cat === "All" ? "All questions" : cat} · {list.length} {list.length === 1 ? "question" : "questions"}
          </p>
          <div className="space-y-3">
            {list.map((f, n) => {
              const isOpen = open === f.q;
              return (
                <div key={`${cat}-${f.q}`} style={{ "--i": n } as CSSProperties}
                  className={`faq-item rounded-2xl border bg-card transition-all duration-300 ${isOpen ? "border-gold/70 shadow-card" : "hover:border-gold/40"}`}>
                  <h3>
                    <button className="flex w-full items-center gap-4 px-5 py-4 text-left" aria-expanded={isOpen} aria-controls={`faq-${n}`} onClick={() => setOpen(isOpen ? null : f.q)}>
                      <span className="w-6 shrink-0 font-display text-sm font-extrabold tabular-nums text-gold">{String(n + 1).padStart(2, "0")}</span>
                      <span className="flex-1 text-[15px] font-semibold leading-snug text-foreground">{f.q}</span>
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? "rotate-45 bg-gold text-navy-deep" : "bg-accent text-brand-blue"}`}>
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div id={`faq-${n}`} role="region" className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:pl-[3.75rem]">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {list.length === 0 && (
              <div className="rounded-2xl border border-dashed p-8 text-center">
                <p className="font-semibold">No questions match “{query}”.</p>
                <button onClick={() => { setQuery(""); pick("All"); }} className="mt-3 text-sm font-semibold text-brand-blue hover:underline">Reset filters</button>
              </div>
            )}
          </div>

          <div className="mt-6 rounded-2xl bg-navy p-5 text-navy-foreground lg:hidden">
            <p className="font-display font-bold">Still have questions?</p>
            <FlowButton href={BOOK_URL} variant="gold" className="mt-3 w-full py-3 text-sm">Book a Meeting</FlowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
