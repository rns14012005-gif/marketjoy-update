import { FlowButton } from "@/components/ui/flow-button";
import { useState, type CSSProperties } from "react";
import { useInView } from "./useInView";
import {
  ArrowRight, Check, Users, Handshake, ListChecks, Megaphone, CalendarCheck, Headset,
  Rocket, ShieldCheck, Database, Bot, Layers, Settings2, Gift, Newspaper, DollarSign, Target, Radar, TrendingUp, BarChart3, Quote,
  Linkedin, Youtube, Facebook, MapPin, Phone, Mail, Building2,
} from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";
import ParticlesBg from "@/components/ui/particles-bg";
import { HeroStats } from "./HeroStats";
import { CountUp, AutoCount } from "./CountUp";
import { FxIcon } from "./FxIcon";
import { Reveal, slide, zig } from "./Reveal";
import { FaqSection } from "./Faq";
import {
  BOOK_URL, CLIENT_LOGOS, SERVICES, INDUSTRIES, PRODUCTS, FEATURES, STORIES,
  TESTIMONIALS, FAQS, FOOTER, LOGO_WHITE_URL, NAV, FREE_Q4_URL, PILLARS, ONBOARDING, TEAM_ROLES,
  BUNDLE, RECOGNITION, BLOGS,
} from "./data";

const MJ = "";

export function SectionHead({ eyebrow, title, sub, link, linkLabel, dark = false }: { eyebrow: string; title: string; sub?: string; link?: string; linkLabel?: string; dark?: boolean }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className={`mt-3 text-3xl font-extrabold sm:text-4xl ${dark ? "text-navy-foreground" : "text-foreground"}`}>{title}</h2>
        {sub && <p className={`mt-3 ${dark ? "text-navy-foreground/75" : "text-muted-foreground"}`}>{sub}</p>}
      </div>
      {link && (
        <a href={link} className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline">
          {linkLabel} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      )}
    </Reveal>
  );
}

function GeoBackground() {
  return (
    <svg className="drift pointer-events-none absolute -right-20 -top-20 h-[140%] w-[70%] opacity-[0.07]" viewBox="0 0 400 400" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => (
          <polygon key={`${r}-${c}`} points={`${c * 50},${r * 50} ${c * 50 + 50},${r * 50} ${c * 50 + 25},${r * 50 + 43}`} fill="none" stroke="currentColor" strokeWidth="1" />
        )),
      )}
    </svg>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <div className="blob-morph pointer-events-none absolute -left-24 top-1/4 -z-30 h-80 w-80 bg-brand-blue/40 blur-3xl" aria-hidden="true" />
      <div className="blob-morph pointer-events-none absolute bottom-[-4rem] left-1/3 -z-30 h-60 w-60 bg-gold/15 blur-3xl [animation-delay:-4s]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 -z-20 w-full opacity-30 [mask-image:linear-gradient(to_right,transparent,#000_45%)] lg:w-[62%] lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent,#000_38%)]" aria-hidden="true">
        <img src={heroImg} alt="" width={1280} height={960} fetchPriority="high" decoding="async" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-brand-blue/20" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_50%,rgb(15_32_64/0.8),transparent_58%),linear-gradient(to_bottom,rgb(15_32_64/0.35),transparent_25%,transparent_75%,rgb(15_32_64/0.6))]" aria-hidden="true" />
      <ParticlesBg className="-z-[5]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <Reveal eager from="left"><span className="eyebrow">Your B2B revenue growth &amp; lead generation partner</span></Reveal>
          <Reveal eager from="left" delay={80} as="h1" className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl xl:text-[3.4rem]">
            Generate More Qualified B2B Meetings <span className="text-shimmer">Without Building an In-House SDR Team.</span>
          </Reveal>
          <Reveal eager from="left" delay={160} as="p" className="mt-6 max-w-xl text-lg text-navy-foreground/85">
            MarketJoy helps B2B companies reach real decision-makers and book qualified sales meetings using buyer intent data, the InfoJoy GTM engine, and dedicated outbound teams.
          </Reveal>
          <Reveal eager from="left" delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FlowButton href={FREE_Q4_URL} variant="gold" className="py-3.5">Get FREE Lead Generation for Q4</FlowButton>
            <FlowButton href="#services" variant="ghost" className="py-3.5">Explore Our Services</FlowButton>
          </Reveal>
          <Reveal eager from="left" delay={320} as="ul" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-foreground/85">
            {["No Setup Fees", "Dedicated Growth Team", "100% SQL Guarantee"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 rounded-full bg-gold/25 p-0.5 text-gold-bright" />{t}</li>
            ))}
          </Reveal>
        </div>

        <Reveal eager from="right" delay={200} className="relative hidden min-h-[430px] lg:block">
          <HeroStats />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- ABOUT + PILLARS ---------------- */
const PILLAR_ICONS = { guarantee: ShieldCheck, team: Users, setup: DollarSign } as const;

export function About() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
        <Reveal from="left">
          <span className="eyebrow">Why MarketJoy</span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">More than a B2B lead generation company. Committed partners in your sales and profitability.</h2>
          <p className="mt-5 text-muted-foreground">Our data-driven approach identifies sales-qualified leads and buyers interested in your product or service, crafts tailored outreach campaigns and delivers early-stage opportunities that drive growth. We guarantee <a className="font-semibold text-brand-blue hover:underline" href="https://marketjoy.com/12-ways-to-generate-sales-qualified-leads-sqls-faster/">sales-qualified leads</a> (SQL), ensuring you see measurable ROI.</p>
          <p className="mt-4 text-muted-foreground">Rooted in transparency, empathy, and performance, our structured outbound approach helps you accelerate your sales pipeline in just 15 days. From strategy to execution, our focus is simple: generate predictable, sales-qualified leads so you can close more deals faster.</p>
          <FlowButton href={BOOK_URL} variant="gold" className="mt-8 py-3.5">Book a Meeting</FlowButton>
        </Reveal>
        <div>
          <Reveal from="right">
            <h3 className="text-xl font-bold">Trusted B2B Lead Generation Company in the USA</h3>
            <p className="mt-2 text-sm text-muted-foreground">Predictability and performance are key to scaling your revenue. We built a process that guarantees transparency, speed, and quality.</p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = PILLAR_ICONS[p.key];
              return (
                <Reveal key={p.key} from={slide(i)} delay={i * 90} className="group rounded-2xl bg-navy p-6 text-navy-foreground shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-12 w-12 icon-tile place-items-center rounded-xl bg-gold transition-transform group-hover:rotate-6"><FxIcon icon={Icon} className="h-6 w-6 text-navy-deep" /></span>
                  <p className="mt-4 font-display text-lg font-bold">{p.title}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOGOS + METRICS ---------------- */
export function Trust() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  const metrics = [
    { icon: Building2, value: "500+", label: "Companies trust MarketJoy" },
    { icon: Rocket, value: "15-Day", label: "Average launch time" },
    { icon: ShieldCheck, value: "100%", label: "Sales-qualified lead guarantee" },
    { icon: Database, value: "310M+", label: "B2B profiles in InfoJoy" },
  ];
  return (
    <section className="border-b bg-muted">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <p className="eyebrow">Trusted by industry leaders</p>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee flex w-max items-center gap-14">
            {logos.map((l, i) => (
              <img key={i} src={l.src} alt={`${l.name} logo`} loading="lazy" className="h-10 w-auto max-w-[140px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} from={zig(i)} delay={i * 80} className="group flex items-center gap-4 rounded-xl bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
            <span className="grid h-12 w-12 shrink-0 icon-tile place-items-center rounded-xl bg-gold/15 transition-transform group-hover:scale-110"><FxIcon icon={m.icon} className="h-6 w-6 text-navy" /></span>
            <div className="min-w-0">
              <p className="font-display text-2xl font-extrabold"><AutoCount value={m.value} /></p>
              <p className="text-sm text-muted-foreground">{m.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICE_ICONS = { lead: Users, sales: Handshake, list: ListChecks, digital: Megaphone, appt: CalendarCheck, sdr: Headset } as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Our services" title="End-to-End B2B Lead Generation Services" sub="From strategy to execution, we deliver predictable, sales-qualified leads so you can close more deals faster." link={NAV[1]?.items[0]?.href ?? "/"} linkLabel="View all services" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.key];
            return (
              <Reveal key={s.key} from={slide(i)} delay={i * 70}>
                <a href={s.href} className="card-glow flex h-full flex-col p-6">
                  <span className="icon-anim grid h-12 w-12 icon-tile place-items-center rounded-xl bg-accent"><FxIcon icon={Icon} className="h-6 w-6 text-brand-blue" /></span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                  <span className="mt-5 grid h-9 w-9 place-items-center rounded-full border"><ArrowRight className="arrow h-4 w-4" /></span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ONBOARDING ---------------- */
const TEAM_TAGS = ["PGA", "PGS", "CSM", "SDR", "CW", "OPS"] as const;

export function Onboarding() {
  const [ref, on] = useInView<HTMLDivElement>(0.2);
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Seamless onboarding" title="Your Campaign, Live in as Little as 15 Days" sub="Our fast-track onboarding is engineered for results from day 1. Whether you're new to outbound or scaling an internal team, we handle the heavy lifting." />
        <div ref={ref} data-on={on} className="ob">
          <div className="ob-track mb-10" aria-hidden="true">
            <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span>Kickoff</span>
              <span className="ob-golive inline-flex items-center gap-1.5 text-brand-blue"><Rocket className="h-3.5 w-3.5" />Go live · 15 days</span>
            </div>
            <div className="relative h-2 rounded-full bg-secondary">
              <div className="ob-fill absolute inset-y-0 left-0 rounded-full">
                <span className="ob-rocket absolute right-0 top-1/2 grid h-8 w-8 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-gold text-navy-deep shadow-gold"><Rocket className="h-4 w-4 -rotate-45" /></span>
              </div>
              {ONBOARDING.map((_, i) => (
                <span key={i} className="ob-node absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-card" style={{ left: `${(i / (ONBOARDING.length - 1)) * 100}%`, "--n": i / (ONBOARDING.length - 1) } as CSSProperties} />
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold"><FxIcon icon={Gift} className="h-5 w-5 text-gold" />What's included in free onboarding</h3>
              <ol className="grid gap-3 sm:grid-cols-2">
                {ONBOARDING.map((o, i) => (
                  <li key={o} className="ob-step group relative flex items-start gap-3 overflow-hidden rounded-xl bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift" style={{ "--i": i } as CSSProperties}>
                    <span className="ob-bar absolute inset-y-0 left-0 w-1 bg-gold" aria-hidden="true" />
                    <span className="ob-num relative grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-navy-foreground transition-transform duration-500 group-hover:rotate-[360deg]">
                      <span className="ob-num-n">{i + 1}</span>
                      <Check className="ob-num-c absolute h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium">{o}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="ob-team relative overflow-hidden rounded-2xl bg-navy p-7 text-navy-foreground shadow-lift">
              <span className="ob-sheen pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
              <div className="relative flex -space-x-2" aria-hidden="true">
                {TEAM_TAGS.map((t, i) => (
                  <span key={t} className="ob-avatar grid h-10 w-10 place-items-center rounded-full border-2 border-navy bg-gold text-[10px] font-extrabold text-navy-deep" style={{ "--i": i } as CSSProperties}>{t}</span>
                ))}
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-gold-bright">Every client is paired with a seasoned team</h3>
              <ul className="relative mt-4 space-y-2.5 text-sm">
                {TEAM_ROLES.map((r, i) => (
                  <li key={r} className="ob-role flex items-center gap-2 transition-transform duration-300 hover:translate-x-1.5" style={{ "--i": i } as CSSProperties}>
                    <Check className="ob-check h-4 w-4 shrink-0 text-gold" />{r}
                  </li>
                ))}
              </ul>
              <p className="ob-note relative mt-5 text-xs text-navy-foreground/70">End-to-end campaign support from a team that knows your industry and goals. After go-live we manage, analyze and improve your campaign every two weeks with live performance reviews.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BUNDLE ---------------- */
const BUNDLE_ICONS = { traffic: BarChart3, ai: Bot, intent: Target, unified: Layers, managed: Settings2 } as const;

export function Bundle() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Add-on" title="The Traffic Revealer + AI Integration Bundle" sub="Boost your lead capture and conversion rates with an intelligent add-on that turns your website into a conversion machine." link={`${MJ}/products/web-traffic-revealer/`} linkLabel="Learn more" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {BUNDLE.map((b, i) => {
            const Icon = BUNDLE_ICONS[b.key];
            return (
              <Reveal key={b.key} from={slide(i)} delay={i * 70}>
                <div className="card-glow flex h-full flex-col p-6">
                  <span className="icon-anim grid h-12 w-12 icon-tile place-items-center rounded-xl bg-accent"><FxIcon icon={Icon} className="h-6 w-6 text-brand-blue" /></span>
                  <h3 className="mt-4 text-base font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
const IND_SPANS = ["lg:col-span-2", "", "", "lg:col-span-2", "lg:col-span-2", ""] as const;

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#e7e7e9_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top,#000,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/40 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead dark eyebrow="Industries we serve" title="B2B Lead Generation for Every Industry" sub="From high-growth startups to mid-market tech firms and enterprise solution providers, we help businesses across sectors scale their pipeline." link="/industries/manufacturing-lead-generation/" linkLabel="View all industries" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} from={slide(i)} delay={i * 70} className={IND_SPANS[i] ?? ""}>
              <a href={ind.href} className="group relative block h-64 overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:ring-gold/70 hover:shadow-lift lg:h-72">
                <img src={ind.img} alt={ind.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/60 to-navy/10 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-brand-blue/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-brand-blue/40" />
                <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 font-display text-xs font-bold tracking-widest text-white backdrop-blur">{String(i + 1).padStart(2, "0")}</span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="mb-3 block h-0.5 w-8 rounded bg-gold transition-all duration-500 group-hover:w-20" />
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{ind.title}</h3>
                      <p className="mt-1 translate-y-2 text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">Explore lead generation for {ind.title.toLowerCase()}</p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-navy-deep transition-all duration-500 group-hover:-rotate-45 group-hover:bg-gold-bright"><ArrowRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- PRODUCTS ---------------- */
function ProductVisual({ k }: { k: string }) {
  if (k === "infojoy")
    return (
      <div className="space-y-2">
        {["Company", "Industry", "Decision-maker", "Location"].map((f, i) => (
          <div key={f} className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-xs">
            <span className="text-muted-foreground">{f}</span>
            <span className="h-2 rounded-full bg-brand-blue/30" style={{ width: `${40 + i * 12}%` }} />
          </div>
        ))}
      </div>
    );
  if (k === "intent")
    return (
      <div className="space-y-2">
        {[["Actively researching", 90], ["Comparing solutions", 70], ["Content engagement", 55]].map(([l, w]) => (
          <div key={l as string} className="rounded-md bg-muted px-3 py-2 text-xs">
            <div className="flex justify-between"><span>{l}</span><Radar className="h-3.5 w-3.5 text-gold" /></div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary"><div className="bar-grow h-full rounded-full bg-gold" style={{ width: `${w}%`, transformOrigin: "left" }} /></div>
          </div>
        ))}
      </div>
    );
  return (
    <div className="space-y-2">
      {["Outbound campaign", "Organic search", "Direct visit"].map((s, i) => (
        <div key={s} className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-xs">
          <span>{s}</span>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${i === 0 ? "bg-gold/25 text-navy" : "bg-accent text-brand-blue"}`}>{i === 0 ? "Attributed" : "Tracked"}</span>
        </div>
      ))}
    </div>
  );
}
const PRODUCT_ICONS = { infojoy: Database, intent: Target, traffic: BarChart3 } as const;

export function Products() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Our products" title="Powerful Tools to Supercharge Your Outreach" sub="Our proprietary tools help you identify, engage and convert the right prospects faster." link={`${MJ}/products/`} linkLabel="View all products" />
        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p, i) => {
            const Icon = PRODUCT_ICONS[p.key];
            return (
              <Reveal key={p.key} from={slide(i)} delay={i * 90}>
                <a href={p.href} className="card-glow flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="icon-anim grid h-11 w-11 icon-tile place-items-center rounded-xl bg-gold/15"><FxIcon icon={Icon} className="h-5 w-5 text-navy" /></span>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">Learn more <ArrowRight className="arrow h-4 w-4" /></span>
                  <div className="mt-6 rounded-xl border p-3"><ProductVisual k={p.key} /></div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES (navy) ---------------- */
const FEATURE_ICONS = { team: Users, launch: Rocket, review: BarChart3, guarantee: ShieldCheck } as const;

export function Features() {
  return (
    <section className="bg-hero relative overflow-hidden py-20 text-navy-foreground">
      <GeoBackground />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <Reveal>
          <span className="eyebrow">What sets us apart</span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">A Smarter, More Predictable Way to Build Your Sales Pipeline</h2>
          <p className="mt-4 text-navy-foreground/75">We're not a cookie-cutter lead vendor. We're a performance-first lead generation company that brings structure, speed, and scale to your outbound sales strategy.</p>
          <FlowButton href={BOOK_URL} variant="gold" className="mt-8 py-3.5">Book a Meeting</FlowButton>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f, i) => {
            const Icon = FEATURE_ICONS[f.key];
            return (
              <Reveal key={f.key} from={slide(i)} delay={i * 90} className="group rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-gold/60 hover:bg-navy-foreground/10">
                <FxIcon icon={Icon} className="h-8 w-8 text-gold transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{f.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORIES ---------------- */
export function Stories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Success stories" title="Real Results for Real Businesses" sub="Not just logos — actual outcomes from manufacturers, software companies and financial firms." link={`${MJ}/case-studies/`} linkLabel="View all case studies" />
        <div className="grid gap-6 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.client} from={slide(i)} delay={i * 90}>
              <a href={s.href} className="card-glow flex h-full flex-col p-6">
                <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-brand-blue">{s.industry}</span>
                <p className="mt-4 text-sm font-semibold text-muted-foreground">{s.client}</p>
                <h3 className="mt-1 flex-1 text-lg font-bold">{s.title}</h3>
                <div className="mt-6 flex items-end justify-between border-t pt-4">
                  <div className="flex items-center gap-2">
                    <FxIcon icon={TrendingUp} className="h-5 w-5 text-success" />
                    <span className="font-display text-3xl font-extrabold"><AutoCount value={s.metric} /></span>
                    <span className="text-sm text-muted-foreground">{s.metricLabel}</span>
                  </div>
                  <ArrowRight className="arrow h-5 w-5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
export function Testimonials() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="What our clients say" title="Trusted by Growing Businesses" link={`${MJ}/client-reviews/`} linkLabel="View all reviews" />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} from={slide(i)} delay={i * 90} as="figure" className="flex h-full flex-col rounded-2xl bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <Quote className="h-8 w-8 fill-gold text-gold" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/85">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-navy-foreground">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
                <div className="min-w-0">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RECOGNITION + BLOG ---------------- */
export function Recognition() {
  return (
    <section className="border-y bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">We're the top-rated B2B lead generation company in the USA</p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {RECOGNITION.map((r) => (
            <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" className="grid h-20 icon-tile place-items-center rounded-xl bg-muted p-4 transition hover:-translate-y-1 hover:shadow-card">
              <img src={r.src} alt={r.name} loading="lazy" className="max-h-12 w-auto object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Latest blog" title="Insights for B2B Sales Teams" link={`${MJ}/blog/`} linkLabel="Read more articles" />
        <div className="grid gap-6 md:grid-cols-3">
          {BLOGS.map((b, i) => (
            <Reveal key={b.href} from={slide(i)} delay={i * 90}>
              <a href={b.href} className="card-glow flex h-full flex-col p-6">
                <span className="grid h-11 w-11 icon-tile place-items-center rounded-xl bg-gold/20"><Newspaper className="h-5 w-5 text-navy" /></span>
                <h3 className="mt-4 flex-1 text-lg font-bold">{b.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">Read article <ArrowRight className="arrow h-4 w-4" /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq() {
  return <FaqSection heading allLink={`${MJ}/faqs/`} />;
}

/* ---------------- CTA + FOOTER ---------------- */
export function FinalCta() {
  return (
    <section className="bg-hero relative overflow-hidden text-navy-foreground">
      <GeoBackground />
      <Reveal className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to build a healthier sales pipeline?</h2>
          <p className="mt-2 text-navy-foreground/75">Let's discuss your goals and create a custom lead generation plan for your business.</p>
        </div>
        <FlowButton href={BOOK_URL} variant="gold" className="shrink-0 py-3.5">Book a Meeting</FlowButton>
      </Reveal>
    </section>
  );
}

function FootCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-gold">{title}</h4>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i.label}><a href={i.href} className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground">{i.label}</a></li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const SocialIcons = { LinkedIn: Linkedin, YouTube: Youtube, Facebook: Facebook } as const;
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr_1fr_1.3fr]">
        <div>
          <a href="/" aria-label="MarketJoy home" className="inline-block"><img src={LOGO_WHITE_URL} alt="MarketJoy Inc" className="logo-anim h-11 w-auto" width={196} height={44} loading="lazy" /></a>
          <p className="mt-5 text-sm leading-relaxed text-navy-foreground/70">MarketJoy, Inc. is your go-to partner for accelerating sales growth. Specializing in tailored B2B lead generation, we align with your unique needs to enhance your customer acquisition pipeline.</p>
          <div className="mt-5 flex gap-3">
            {FOOTER.social.map((s) => {
              const Icon = SocialIcons[s.label as keyof typeof SocialIcons];
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-full bg-navy-foreground/10 transition hover:-translate-y-0.5 hover:bg-gold hover:text-navy-deep">
                  <FxIcon icon={Icon} className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
        <FootCol title="Products" items={FOOTER.products} />
        <FootCol title="Services" items={FOOTER.services} />
        <FootCol title="Industries" items={FOOTER.industries.slice(0, 10)} />
        <FootCol title="Resources" items={FOOTER.resources} />
        <div>
          <h4 className="text-sm font-bold text-gold">Contact Information</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex gap-2"><FxIcon icon={MapPin} className="mt-0.5 h-4 w-4 shrink-0 text-gold" />186 N Palafox Street, Pensacola, FL 32502, USA</li>
            <li><a href="tel:+14846386389" className="flex gap-2 hover:text-navy-foreground"><FxIcon icon={Phone} className="h-4 w-4 shrink-0 text-gold" />+1 (484) 638-6389</a></li>
            <li><a href="mailto:hello@marketjoy.com" className="flex gap-2 hover:text-navy-foreground"><FxIcon icon={Mail} className="h-4 w-4 shrink-0 text-gold" />hello@marketjoy.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-navy-foreground/60 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} MarketJoy, Inc. All rights reserved.</p>
          <a href={FOOTER.privacy} className="hover:text-navy-foreground">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
