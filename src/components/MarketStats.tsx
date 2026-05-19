"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const STATS = [
  { display: <><CountUp target={133} prefix="$" suffix="B" /> CAD</>, label: "Franchise contribution to Canadian GDP in 2025. Up 39% from 2019.", accent: "#C89520", numeric: true },
  { display: <><CountUp target={1300} /></>, label: "Active franchise brands operating in Canada.", accent: "#2A9D8F", numeric: true },
  { display: <><CountUp target={76000} suffix="+" /></>, label: "Individual franchise locations coast to coast.", accent: "#1B6070", numeric: true },
  { display: <><CountUp target={4300} prefix="~" /></>, label: "New franchise outlets open every year — one every two hours.", accent: "#D4592A", numeric: true },
  { display: <><CountUp target={2} suffix="M" /></>, label: "Canadians employed in franchise businesses.", accent: "#C89520", numeric: true },
  { display: <><CountUp target={52} suffix="%" /></>, label: "Of potential franchisees are Gen Z or Millennials (CFA 2024).", accent: "#2A9D8F", numeric: true },
];

export function MarketStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D1120]" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,149,32,0.07) 0%, transparent 50%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-5">The Canadian Market</Badge>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white leading-[0.9] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            THE SECOND LARGEST<br />
            FRANCHISE MARKET{" "}
            <span className="gradient-text-gold">IN THE WORLD.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
            One in five dollars spent by Canadians flows through a franchised business. The industry is on an
            accelerating growth curve — driven by younger entrepreneurs and multi-unit ownership as the dominant model.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-5 rounded-2xl border border-white/[0.06] p-5 group hover:border-white/[0.12] transition-all"
              style={{ background: "#0A0F1E", borderLeft: `3px solid ${s.accent}` }}
            >
              <div
                className="text-2xl font-bold flex-shrink-0 min-w-[100px]"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: s.accent, letterSpacing: "0.04em" }}
              >
                {s.display}
              </div>
              <div className="text-sm text-[#9CA3AF] leading-relaxed">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Ontario callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-2xl border border-[#C89520]/20 p-6 text-center"
          style={{ background: "rgba(200,149,32,0.06)" }}
        >
          <p className="text-[#C89520] font-semibold text-lg">
            65% of all Canadian franchise HQs are in Ontario —{" "}
            <span className="text-white font-bold">our primary market entry point.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
