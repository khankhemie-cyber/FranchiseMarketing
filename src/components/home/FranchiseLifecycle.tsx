"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, ClipboardCheck, Rocket, TrendingUp, Building2 } from "lucide-react";

const STAGES = [
  {
    n: "01", icon: Search, color: "#C8921A",
    title: "Discover",
    sub: "Territory research & lead generation",
    bullets: ["Interactive territory maps", "Competitor density analysis", "Prospect scoring & routing"],
  },
  {
    n: "02", icon: ClipboardCheck, color: "#1A6478",
    title: "Qualify",
    sub: "Pipeline management & validation",
    bullets: ["FDD distribution tracking", "Application workflow", "Financial qualification tools"],
  },
  {
    n: "03", icon: Rocket, color: "#2EA5A0",
    title: "Launch",
    sub: "Onboarding, training & grand opening",
    bullets: ["Brand integration checklist", "Marketing activation kit", "Grand opening campaigns"],
  },
  {
    n: "04", icon: TrendingUp, color: "#D84F18",
    title: "Operate",
    sub: "Day-to-day marketing & performance",
    bullets: ["Campaign management", "Performance dashboards", "Field coaching tools"],
  },
  {
    n: "05", icon: Building2, color: "#1C2B4A",
    title: "Scale",
    sub: "Multi-unit growth & network expansion",
    bullets: ["Multi-unit operator CRM", "Territory expansion planner", "Network benchmark reports"],
  },
];

export function FranchiseLifecycle() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#1C2B4A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Franchise Lifecycle
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(40px,5vw,72px)] text-white leading-[0.9]">
              FROM FIRST LEAD<br />TO MULTI-UNIT SCALE.
            </h2>
            <p className="font-sans-ui text-[13px] text-white/40 max-w-xs">
              Sova manages the full franchise journey — not just marketing.
            </p>
          </div>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px"
            style={{ background: "linear-gradient(90deg, rgba(200,146,26,0.1), rgba(200,146,26,0.4), rgba(200,146,26,0.1))" }}>
            <motion.div
              className="h-full origin-left"
              style={{ background: "linear-gradient(90deg, #C8921A, #2EA5A0)" }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="relative group"
                >
                  {/* Stage icon circle */}
                  <div className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center mb-5 mx-auto lg:mx-0 z-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${s.color}20`, border: `1.5px solid ${s.color}50` }}>
                    <Icon size={20} style={{ color: s.color }} />
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "#1C2B4A", border: `1.5px solid ${s.color}` }}>
                      <span className="font-sans-ui text-[8px] font-bold" style={{ color: s.color }}>{s.n}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="rounded-xl p-5 transition-all duration-300 group-hover:translate-y-[-2px]"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid rgba(255,255,255,0.06)`,
                      borderTop: `2px solid ${s.color}`,
                    }}>
                    <div className="font-display text-[22px] text-white mb-1">{s.title.toUpperCase()}</div>
                    <div className="font-sans-ui text-[11px] text-white/40 mb-4 leading-tight">{s.sub}</div>
                    <ul className="space-y-1.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 font-sans-ui text-[11px] text-white/50">
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
