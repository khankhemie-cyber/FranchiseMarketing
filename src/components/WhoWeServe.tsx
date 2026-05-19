"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, LayoutGrid } from "lucide-react";

const SEGMENTS = [
  {
    icon: Building2,
    seg: "Emerging Brands",
    range: "10 – 50 locations",
    tag: "PRIMARY",
    desc: "Strong concept, expanding network, fragmented operations. Need enterprise infrastructure without the enterprise price tag.",
    accent: "#C89520",
    points: ["Multi-location campaign launch", "Franchisee onboarding workflows", "Brand compliance at scale"],
  },
  {
    icon: TrendingUp,
    seg: "Growing Brands",
    range: "50 – 150 locations",
    tag: "PRIMARY",
    desc: "The core of our market. Established enough to have budget, small enough to move fast. Fragmentation is most painful here.",
    accent: "#2A9D8F",
    points: ["Network benchmarking & analytics", "Cross-location performance", "Paid media governance"],
    featured: true,
  },
  {
    icon: LayoutGrid,
    seg: "Multi-Unit Operators",
    range: "5 – 30+ locations",
    tag: "SECONDARY",
    desc: "Franchisees running multiple locations who need portfolio tools beyond what head office provides.",
    accent: "#1B6070",
    points: ["Portfolio dashboard", "Cross-location ordering", "Location-level reporting"],
  },
];

const VERTICALS = ["QSR & Food Service", "Home Services", "Fitness & Wellness", "Beauty", "Education", "Retail"];
const REGIONS = ["Ontario", "British Columbia", "Alberta", "Quebec"];

export function WhoWeServe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at right top, rgba(27,96,112,0.08) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Badge variant="teal" className="mb-5">Who We Serve</Badge>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white leading-[0.9] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            CANADIAN FRANCHISE BRANDS{" "}
            <span className="text-[#2A9D8F]">IN ACTIVE GROWTH.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl">
            We serve the 1,300 franchise brands actively operating in Canada — starting with the 65% headquartered in Ontario.
          </p>
        </motion.div>

        {/* Segment cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {SEGMENTS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.seg}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] group"
                style={{
                  borderColor: s.featured ? `${s.accent}30` : "rgba(255,255,255,0.07)",
                  background: s.featured ? `${s.accent}08` : "#0D1120",
                }}
              >
                {s.featured && (
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: s.accent }} />
                )}
                <div className="p-7">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.accent}15`, color: s.accent }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full"
                      style={{
                        background: `${s.accent}15`,
                        color: s.accent,
                        border: `1px solid ${s.accent}25`,
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-white mb-1">{s.seg}</h3>
                    <div className="text-xs font-bold tracking-widest" style={{ color: s.accent }}>
                      {s.range}
                    </div>
                  </div>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">{s.desc}</p>

                  <div className="space-y-2">
                    {s.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2.5 text-sm text-[#9CA3AF]">
                        <div className="w-1 h-1 rounded-full" style={{ background: s.accent }} />
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-5"
        >
          <div className="rounded-2xl p-6 border border-white/[0.06]" style={{ background: "#0A0F1E" }}>
            <div className="text-xs font-bold tracking-widest text-[#C89520] uppercase mb-4">Geographic Priority</div>
            <div className="flex items-center gap-3 flex-wrap">
              {REGIONS.map((r, i) => (
                <div key={r} className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">{r}</span>
                  {i < REGIONS.length - 1 && <span className="text-[#C89520]/40">→</span>}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6B7280] mt-3">65% of Canadian franchise HQs are in Ontario — our primary entry point.</p>
          </div>

          <div className="rounded-2xl p-6 border border-white/[0.06]" style={{ background: "#0A0F1E" }}>
            <div className="text-xs font-bold tracking-widest text-[#2A9D8F] uppercase mb-4">Primary Verticals</div>
            <div className="flex flex-wrap gap-2">
              {VERTICALS.map((v) => (
                <span
                  key={v}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg border"
                  style={{ background: "rgba(42,157,143,0.06)", borderColor: "rgba(42,157,143,0.15)", color: "#2A9D8F" }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
