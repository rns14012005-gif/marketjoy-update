import { FlowButton } from "@/components/ui/flow-button";
import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { FxIcon } from "./FxIcon";
import { CountUp } from "./CountUp";
import { FREE_Q4_URL } from "./data";

const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

function Slider({ label, value, min, max, step, onChange, fmt }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void; fmt: (n: number) => string }) {
  return (
    <label className="block">
      <span className="flex justify-between text-sm font-semibold"><span>{label}</span><span className="text-gold-bright">{fmt(value)}</span></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} className="mt-2 w-full accent-[var(--gold)]" />
    </label>
  );
}

/** Interactive ROI calculator: pipeline & revenue from meetings, deal size, close rate. */
export function RoiCalculator() {
  const [meetings, setMeetings] = useState(20);
  const [deal, setDeal] = useState(25000);
  const [close, setClose] = useState(20);
  const pipeline = meetings * deal, revenue = pipeline * close / 100;
  return (
    <section id="roi" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal from="zoom" className="grid gap-8 overflow-hidden rounded-3xl bg-hero p-6 text-navy-foreground shadow-lift sm:p-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">ROI calculator</span>
            <h2 className="mt-3 flex items-center gap-3 text-3xl font-extrabold"><FxIcon icon={Calculator} className="h-8 w-8 text-gold" />What are more meetings worth?</h2>
            <div className="mt-6 space-y-5">
              <Slider label="Qualified meetings / month" value={meetings} min={5} max={80} step={1} onChange={setMeetings} fmt={(n) => String(n)} />
              <Slider label="Average deal size" value={deal} min={2000} max={150000} step={1000} onChange={setDeal} fmt={usd} />
              <Slider label="Close rate" value={close} min={5} max={60} step={1} onChange={setClose} fmt={(n) => n + "%"} />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 rounded-2xl bg-white/[0.07] p-6 backdrop-blur">
            <div><p className="text-sm text-navy-foreground/75">Pipeline created / month</p><p className="font-display text-4xl font-extrabold text-gold">{usd(pipeline)}</p></div>
            <div><p className="flex items-center gap-1.5 text-sm text-navy-foreground/75"><FxIcon icon={TrendingUp} className="h-4 w-4" />Expected closed revenue / month</p><p className="font-display text-4xl font-extrabold text-gold">{usd(revenue)}</p></div>
            <FlowButton href={FREE_Q4_URL} variant="gold" className="mt-2 py-3.5">Get your Q4 plan</FlowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
