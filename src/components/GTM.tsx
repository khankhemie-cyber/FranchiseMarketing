"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Mic2, Target, Users2, Rocket } from "lucide-react";

const PHASES = [
  {
    phase: "PHASE 1", period: "Months 1–4", t: "Authority Positioning", icon: Mic2, accent: "#C89520",
    pts: [
      "Content engine for Canadian franchise leaders",
      "Active CFA engagement — events, committees, publications",
      "Founder-led thought leadership targeting franchise VPs and CMOs",
      "Build reputation before the first sales conversation",
    ],
  },
  {
    phase: "PHASE 2", period: "Months 3–9", t: "Account-Based Targeting", icon: Target, accent: "#2A9D8F",
    pts: [
      "Target 300–500 Canadian franchise brands",
      "Priority: emerging systems (10–150 locations)",
      "Entry point: lead with the marketing problem, not the platform",
      "Leverage direct knowledge of which brands use which tools",
    ],
  },
  {
    phase: "PHASE 3", period: "Months 6–18", t: "Executive Community", icon: Users2, accent: "#D4592A",
    pts: [
      "Private dinners: 12–18 franchise leaders per event",
      "Quarterly leadership roundtables: 15–20 people",
      "Intimate growth councils: 5–8 brands on a shared challenge",
      "Goal is trust — the sale follows naturally",
    ],
  },
  {
    phase: "PHASE 4", period: "Months 8–18", t: "Embedded Pilots", icon: Rocket, accent: "#1B6070",
    pts: [
      "2–4 anchor brands at structured pilot terms",
      "Full platform onboarding and data migration",
      "Case study rights in exchange for reduced rate",
      "Once embedded, platform becomes operationally critical",
    ],
  },
];

export function GTM() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D1120]" />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at left center, rgba(42,157,143,0.05) 0%, transparent 50%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="cyan" className="mb-5">Go-To-Market Strategy</Badge>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white leading-[0.9] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            FRANCHISING IS A RELATIONSHIP BUSINESS.<br />
            <span className="gradient-text-gold">OUR GTM REFLECTS THAT.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            We don&apos;t cold-pitch. We build trust with franchise leaders, earn the right to present, and embed deeply enough that switching isn&apos;t an option.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PHASES.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative rounded-2xl overflow-hidden border border-white/[0.07] group hover:border-white/[0.12] transition-all duration-300"
                style={{ background: "#0A0F1E", borderTop: `3px solid ${p.accent}` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${p.accent}15`, color: p.accent }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold tracking-widest" style={{ color: p.accent }}>{p.phase}</div>
                      <div className="text-[10px] text-[#6B7280] mt-0.5">{p.period}</div>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-4">{p.t}</h3>

                  <div className="space-y-2.5">
                    {p.pts.map((pt, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs text-[#9CA3AF] leading-relaxed">
                        <div
                          className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: p.accent }}
                        />
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Market stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid sm:grid-cols-3 gap-5"
        >
          {[
            { v: "~4,300", label: "New franchise outlets open every year — one every two hours", accent: "#C89520" },
            { v: "52%", label: "Of potential franchisees are Gen Z or Millennials (CFA 2024)", accent: "#2A9D8F" },
            { v: "65%", label: "Of Canadian franchise HQs are in Ontario — our primary entry point", accent: "#1B6070" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-6 border border-white/[0.06] flex items-center gap-5"
              style={{ background: "rgba(200,149,32,0.03)" }}
            >
              <div
                className="text-4xl font-bold flex-shrink-0"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: stat.accent }}
              >
                {stat.v}
              </div>
              <div className="text-sm text-[#9CA3AF] leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
