import { FlowButton } from "@/components/ui/flow-button";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronRight, Mail, MapPin, Phone, Plus, ExternalLink, ShieldCheck, Users, DollarSign, Quote, TrendingUp } from "lucide-react";
import GatewayFlow from "@/components/ui/gateway-flow";
import { Navbar } from "@/components/home/Navbar";
import { Reveal, slide, zig } from "@/components/home/Reveal";
import { FxIcon } from "@/components/home/FxIcon";
import { FaqSection } from "@/components/home/Faq";
import { AutoCount } from "@/components/home/CountUp";
import { FinalCta, Footer, SectionHead } from "@/components/home/Sections";
import { BOOK_URL, BLOGS, FAQS, PILLARS, STORIES, TEAM_ROLES, TESTIMONIALS, LIVE } from "@/components/home/data";
import { ALL_PAGES, INDUSTRY_TOP, PRODUCT_LIST, SERVICE_LIST, type PageDef } from "./content";

const PILLAR_ICONS = { guarantee: ShieldCheck, team: Users, setup: DollarSign } as const;

function PageHero({ page }: { page: PageDef }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 -z-20"><GatewayFlow className="h-full w-full" density={0.6} /></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_25%_50%,rgb(15_32_64/0.8),transparent_65%),radial-gradient(ellipse_at_center,transparent_40%,rgb(15_32_64/0.85)_100%)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-navy-foreground/70">
          <a href="/" className="hover:text-gold">Home</a>
          {page.parent && (<><ChevronRight className="h-3 w-3" /><a href={page.parent.href} className="hover:text-gold">{page.parent.label}</a></>)}
          <ChevronRight className="h-3 w-3" /><span className="text-navy-foreground">{page.title}</span>
        </nav>
        <Reveal from="left"><span className="eyebrow">{page.eyebrow}</span></Reveal>
        <Reveal from="left" delay={80} as="h1" className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] sm:text-5xl">{page.title}</Reveal>
        <Reveal from="left" delay={160} as="p" className="mt-5 max-w-2xl text-lg text-navy-foreground/85">{page.tagline}</Reveal>
        <Reveal from="left" delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <FlowButton href={BOOK_URL} variant="gold" className="py-3.5">Book a Meeting</FlowButton>
          <FlowButton href="/contact-us/" variant="ghost" className="py-3.5">Contact Us</FlowButton>
        </Reveal>
      </div>
    </section>
  );
}

function Intro({ page }: { page: PageDef }) {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal from="left">
          <span className="eyebrow">Overview</span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{page.title}</h2>
          {page.intro.map((t) => <p key={t} className="mt-4 text-muted-foreground">{t}</p>)}
        </Reveal>
        {page.bullets.length > 0 && (
          <Reveal from="right" delay={120} className="rounded-2xl bg-navy p-7 text-navy-foreground shadow-lift">
            <h3 className="text-lg font-bold text-gold-bright">What you get</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {page.bullets.map((b) => <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{b}</li>)}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}

const STEPS = [
  ["Define your ICP", "We map your ideal customer profile and research target accounts."],
  ["Build targeted data", "Hand-curated contacts powered by InfoJoy and buyer intent signals."],
  ["Launch in 15 days", "Custom scripts, domain warming and inbox setup, then outreach goes live."],
  ["Optimize every two weeks", "Live performance reviews and updated tactics to keep improving results."],
];
function Process() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="How it works" title="From Kickoff to Qualified Meetings" sub="A structured process built for speed, transparency and results." />
        <ol className="grid gap-5 md:grid-cols-4">
          {STEPS.map(([t, d], i) => (
            <Reveal as="li" key={t} from={zig(i)} delay={i * 80} className="relative rounded-2xl bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold font-display font-extrabold text-navy-deep">{i + 1}</span>
              <h3 className="mt-4 font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
        {PILLARS.map((p, i) => {
          const Icon = PILLAR_ICONS[p.key];
          return (
            <Reveal key={p.key} from={slide(i)} delay={i * 90} className="flex items-center gap-4 rounded-2xl bg-navy p-6 text-navy-foreground shadow-card">
              <span className="grid h-12 w-12 shrink-0 icon-tile place-items-center rounded-xl bg-gold"><FxIcon icon={Icon} className="h-6 w-6 text-navy-deep" /></span>
              <p className="font-display text-lg font-bold">{p.title}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function CardGrid({ items, cols = "lg:grid-cols-3" }: { items: { label: string; href: string }[]; cols?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${cols}`}>
      {items.map((it, i) => (
        <Reveal key={it.href} delay={(i % 6) * 50}>
          <a href={it.href} className="card-glow flex h-full items-center justify-between gap-3 p-5">
            <span className="font-semibold">{it.label}</span>
            <ArrowRight className="arrow h-4 w-4 shrink-0 text-brand-blue" />
          </a>
        </Reveal>
      ))}
    </div>
  );
}

function FaqMini({ count = 4 }: { count?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHead eyebrow="FAQ" title="Common Questions" link="/faqs/" linkLabel="All FAQs" />
        <div className="space-y-3">
          {FAQS.slice(0, count).map((f, i) => {
            const o = open === i;
            return (
              <div key={f.q} className="rounded-xl border bg-card">
                <button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold" aria-expanded={o} onClick={() => setOpen(o ? null : i)}>
                  {f.q}<Plus className={`h-5 w-5 shrink-0 text-gold transition-transform ${o ? "rotate-45" : ""}`} />
                </button>
                {o && <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- templates ---------- */
function ServiceLike({ page }: { page: PageDef }) {
  const others = (page.kind === "product" ? PRODUCT_LIST : SERVICE_LIST).filter((p) => p.path !== page.path);
  return (
    <>
      <Intro page={page} />
      <Process />
      <Pillars />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead eyebrow="Explore more" title={page.kind === "product" ? "More MarketJoy Products" : "More Services"} />
          <CardGrid items={others.slice(0, 6).map((o) => ({ label: o.title, href: o.path + "/" }))} />
        </div>
      </section>
      <FaqMini />
    </>
  );
}

const HELP = [
  ["ICP-first targeting", "We define the buyers, accounts and signals that matter in your market."],
  ["Hand-curated contacts", "Verified decision-maker data from the InfoJoy GTM engine."],
  ["Multichannel outreach", "Personalized email and calling campaigns run by dedicated SDRs."],
  ["Guaranteed SQLs", "Our 100% SQL Guarantee keeps results accountable."],
];
function IndustryPage({ page }: { page: PageDef }) {
  const siblings = INDUSTRY_TOP.filter((i) => i.href !== page.path && i.href !== page.parent?.href).slice(0, 6);
  return (
    <>
      <Intro page={page} />
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead eyebrow="Who we reach" title="Decision-Makers We Connect You With" />
          <div className="flex flex-wrap gap-3">
            {page.roles.map((r) => <span key={r} className="rounded-full bg-card px-5 py-2.5 text-sm font-semibold shadow-card"><Check className="mr-2 inline h-4 w-4 text-gold" />{r}</span>)}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead eyebrow="How MarketJoy helps" title="A Predictable Pipeline for Your Sales Team" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HELP.map(([t, d], i) => (
              <Reveal key={t} from={slide(i)} delay={i * 80}><div className="card-glow h-full p-6"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      {page.children && page.children.length > 0 && (
        <section className="bg-muted pb-20 pt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead eyebrow="Specializations" title={`${page.title.replace(" Lead Generation", "")} Segments We Serve`} />
            <CardGrid items={page.children} />
          </div>
        </section>
      )}
      <Pillars />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead eyebrow="Other industries" title="Explore More Industries" link="/industries/manufacturing-lead-generation/" linkLabel="View manufacturing" />
          <CardGrid items={siblings} />
        </div>
      </section>
    </>
  );
}

function About({ page }: { page: PageDef }) {
  const values = [["Transparency", "Clear reporting and bi-weekly reviews. You always know what's happening."], ["Empathy", "We work as an extension of your team and listen first."], ["Performance", "A 100% SQL Guarantee keeps us focused on the results you care about."]];
  return (
    <>
      <Intro page={{ ...page, bullets: ["Founded in 2016", "Headquartered in Pensacola, Florida", "InfoJoy GTM engine with 310M+ B2B profiles", "100% SQL Guarantee"] }} />
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead eyebrow="Our values" title="What We Stand For" />
          <div className="grid gap-5 md:grid-cols-3">
            {values.map(([t, d], i) => <Reveal key={t} from={slide(i)} delay={i * 90}><div className="card-glow h-full p-7"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead eyebrow="Your team" title="Every Client Is Paired With a Seasoned Team" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_ROLES.map((r) => <div key={r} className="flex items-center gap-3 rounded-xl border bg-card p-4"><Check className="h-5 w-5 text-gold" /><span className="font-medium">{r}</span></div>)}
          </div>
        </div>
      </section>
      <Pillars />
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nCompany: ${f.get("company")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:hello@marketjoy.com?subject=${encodeURIComponent("Website enquiry from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const input = "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40";
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal as="div" className="rounded-2xl border bg-card p-7 shadow-card">
          <h2 className="text-2xl font-extrabold">Send us a message</h2>
          <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Your name" aria-label="Your name" className={input} />
            <input required type="email" name="email" placeholder="Work email" aria-label="Work email" className={input} />
            <input name="company" placeholder="Company" aria-label="Company" className={`${input} sm:col-span-2`} />
            <textarea required name="message" rows={5} placeholder="How can we help?" aria-label="Message" className={`${input} sm:col-span-2`} />
            <FlowButton type="submit" variant="gold" className="sm:col-span-2">Send message</FlowButton>
            {sent && <p className="text-sm text-muted-foreground sm:col-span-2">Your email app should open with the message ready to send.</p>}
          </form>
        </Reveal>
        <Reveal delay={120} className="space-y-4">
          <div className="rounded-2xl bg-navy p-7 text-navy-foreground shadow-lift">
            <h3 className="text-lg font-bold text-gold-bright">Contact information</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" />186 N Palafox Street, Pensacola, FL 32502, USA</li>
              <li><a href="tel:+14846386389" className="flex gap-3 hover:text-gold"><Phone className="h-4 w-4 shrink-0 text-gold" />+1 (484) 638-6389</a></li>
              <li><a href="mailto:hello@marketjoy.com" className="flex gap-3 hover:text-gold"><Mail className="h-4 w-4 shrink-0 text-gold" />hello@marketjoy.com</a></li>
            </ul>
          </div>
          <FlowButton href={BOOK_URL} variant="gold" className="w-full py-4">Book a Meeting</FlowButton>
        </Reveal>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {BLOGS.map((b, i) => (
            <Reveal key={b.href} from={slide(i)} delay={i * 90}>
              <a href={b.href} target="_blank" rel="noopener noreferrer" className="card-glow flex h-full flex-col p-6">
                <h3 className="flex-1 text-lg font-bold">{b.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">Read article <ExternalLink className="h-4 w-4" /></span>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center"><FlowButton href={`${LIVE}/blog/`} variant="gold" className="py-3.5">See all articles on marketjoy.com <ExternalLink className="h-4 w-4" /></FlowButton></div>
      </div>
    </section>
  );
}

function FaqFull() {
  return <FaqSection />;
}

function Cases() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {STORIES.map((s, i) => (
          <Reveal key={s.client} from={slide(i)} delay={i * 90}>
            <div className="card-glow flex h-full flex-col p-7">
              <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-brand-blue">{s.industry}</span>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">{s.client}</p>
              <h3 className="mt-1 flex-1 text-xl font-bold">{s.title}</h3>
              <div className="mt-6 flex items-center gap-2 border-t pt-4"><FxIcon icon={TrendingUp} className="h-5 w-5 text-success" /><span className="font-display text-4xl font-extrabold"><AutoCount value={s.metric} /></span><span className="text-sm text-muted-foreground">{s.metricLabel}</span></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} from={slide(i)} delay={i * 90} as="figure" className="flex h-full flex-col rounded-2xl bg-card p-7 shadow-card">
            <Quote className="h-8 w-8 fill-gold text-gold" />
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-6 border-t pt-4"><p className="font-bold">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function External({ page }: { page: PageDef }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-lg text-muted-foreground">{page.tagline}</p>
        <FlowButton href={page.external} target="_blank" rel="noopener noreferrer" variant="gold" className="mt-8 py-4">Open on marketjoy.com <ExternalLink className="h-4 w-4" /></FlowButton>
      </div>
    </section>
  );
}

function ProductsIndex() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <CardGrid items={PRODUCT_LIST.map((p) => ({ label: p.title, href: p.path + "/" }))} />
      </div>
    </section>
  );
}

export function SitePage({ path }: { path: string }) {
  const page = ALL_PAGES.find((p) => "/" + p.path.replace(/^\/+|\/+$/g, "") === "/" + path.replace(/^\/+|\/+$/g, ""));
  if (!page) return null;
  const body = {
    service: <ServiceLike page={page} />, product: <ServiceLike page={page} />,
    industry: <IndustryPage page={page} />, about: <About page={page} />, contact: <Contact />,
    blog: <Blog />, faqs: <FaqFull />, cases: <Cases />, reviews: <Reviews />,
    external: <External page={page} />, productsIndex: <ProductsIndex />,
  }[page.kind];
  return (
    <>
      <Navbar />
      <main>
        <PageHero page={page} />
        {body}
        {page.kind !== "contact" && <FinalCta />}
      </main>
      <Footer />
    </>
  );
}
