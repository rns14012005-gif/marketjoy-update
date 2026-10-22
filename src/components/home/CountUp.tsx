import { useEffect, useRef, useState } from "react";

type Props = { to: number; prefix?: string | undefined; suffix?: string | undefined; decimals?: number | undefined; duration?: number | undefined };

/** Counts from 0 to `to` when scrolled into view, then gives a small "pop" when it lands. */
export function CountUp({ to, prefix = "", suffix = "", decimals = 0, duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return; io.disconnect();
      if (reduce) { setV(to); setDone(true); return; }
      const t0 = performance.now();
      const tick = (n: number) => {
        const p = Math.min((n - t0) / duration, 1);
        const eased = 1 - (1 - p) ** 4; // easeOutQuart
        setV(to * eased);
        if (p < 1) raf = requestAnimationFrame(tick); else { setV(to); setDone(true); }
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  const shown = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-US");
  return <span ref={ref} className={`count tabular-nums ${done ? "count-done" : ""}`}>{prefix}{shown}{suffix}</span>;
}

/** Animates any "headline number" string, e.g. "500+", "310M+", "100%", "15-Day", "$2.4k". */
export function AutoCount({ value, duration }: { value: string; duration?: number | undefined }) {
  const m = /^(\D*?)(\d+(?:\.\d+)?)(.*)$/.exec(value);
  if (!m) return <>{value}</>;
  const prefix = m[1] ?? "", num = m[2] ?? "0", suffix = m[3] ?? "";
  const decimals = num.includes(".") ? (num.split(".")[1] ?? "").length : 0;
  return <CountUp to={parseFloat(num)} prefix={prefix} suffix={suffix} decimals={decimals} duration={duration} />;
}
