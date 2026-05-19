"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const MILESTONES = [
  {
    period: "MONTH 6", arr: "$103K ARR", a: "#C89520",
    milestone: "3 paying brands (SaaS only)",
    note: "EBITDA positive",
  },
  {
    period: "END OF YEAR 1", arr: "$165K ARR", a: "#2A9D8F",
    milestone: "10 SaaS + 6 Managed Services",
    note: "$50K MRR → salaries activate",
  },
  {
    period: "END OF YEAR 2", arr: "$678K ARR", a: "#D4592A",
    milestone: "~22 brands on platform",
    note: "Approaching full EBITDA breakeven",
  },
];

const METRICS = [
  { v: "~$10K CAD", l: "Customer Acquisition Cost (Yr 2). Relationship-led GTM keeps CAC low.", a: "#C89520" },
  { v: "~2 months", l: "CAC payback period at Year 2 gross margin.", a: "#2A9D8F" },
  { v: "~29×", l: "Estimated LTV:CAC. High switching costs once embedded.", a: "#1B6070" },
  { v: "78–84%", l: "Target gross margin — multi-tenant SaaS industry benchmark.", a: "#D4592A" },
];

export function Financials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at right bottom, rgba(27,48,92,0.2) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="muted" className="mb-5">Financial Targets</Badge>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white leading-[0.9] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            CONSERVATIVE. <span className="gradient-text-gold">ACHIEVABLE.</span> SELF-FUNDED.
          </h2>
          <p className="text-[#9CA3AF]">All figures in Canadian Dollars (CAD). No external investment assumed. Founders draw no salary in Year 1.</p>
        </motion.div>

        {/* Milestone cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {MILESTONES.map((t, i) => (
            <motion.div
              key={t.period}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-white/[0.07] overflow-hidden"
              style={{ background: "#0D1120", borderTop: `4px solid ${t.a}` }}
            >
              <div className="p-7 border-b border-white/[0.05]">
                <div className="text-[10px] font-bold tracking-widest mb-3" style={{ color: t.a }}>{t.period}</div>
                <div
                  className="text-4xl font-bold text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                >
                  {t.arr}
                </div>
              </div>
              <div className="p-7">
                <div className="text-sm font-semibold text-white mb-2">{t.milestone}</div>
                <div className="text-sm text-[#9CA3AF]">{t.note}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metric cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="rounded-2xl border border-white/[0.07] p-6"
              style={{ background: "#0D1120", borderTop: `3px solid ${s.a}` }}
            >
              <div
                className="text-3xl font-bold mb-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: s.a, letterSpacing: "0.04em" }}
              >
                {s.v}
              </div>
              <div className="text-xs text-[#9CA3AF] leading-relaxed">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
