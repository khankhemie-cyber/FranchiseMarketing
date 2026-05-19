"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Flag, Layers, Lock, Award, Heart } from "lucide-react";

const MOATS = [
  {
    n: "01", icon: Flag, t: "The Only Canadian Platform", accent: "#C89520",
    d: "FranConnect, Rallio, and SOCi are American. None understand Canadian franchise law, the CFA ecosystem, or Canadian market dynamics. We are the only platform built in Canada, for Canada, by operators who have run Canadian franchise networks.",
  },
  {
    n: "02", icon: Layers, t: "The Combination", accent: "#2A9D8F",
    d: "No competitor offers all 8 modules in a single integrated platform. Every competitor requires separate tools for geofencing, influencer management, vendor ordering, and AI. Sova does it all under one login.",
  },
  {
    n: "03", icon: Lock, t: "Embedded Switching Costs", accent: "#D4592A",
    d: "Once Sova is embedded in a brand's campaign reporting, vendor ordering, franchisee communication, and operational workflow — the platform becomes operationally critical. Switching is expensive and unlikely.",
  },
  {
    n: "04", icon: Award, t: "Operator Credibility", accent: "#1B6070",
    d: "The founding team has direct experience operating inside Canadian franchise networks. We know which tools brands use, where the pain is, and which relationships open doors. No funded competitor can buy this quickly.",
  },
  {
    n: "05", icon: Heart, t: "Relationships as Defense", accent: "#C89520",
    d: "Every executive dinner, every roundtable, every co-design session with a pilot brand builds a relationship a competitor cannot replicate. When FranConnect calls one of our reference brands, that brand calls us first.",
    wide: true,
  },
];

export function Moats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D1120]" />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(200,149,32,0.04) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-5">Why We Win</Badge>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white leading-[0.9] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            FIVE MOATS.<br />
            <span className="gradient-text-gold">NONE OF THEM ARE FEATURES.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            Competitive advantages that compound over time. Features can be copied. Relationships, credibility, and embedded workflows cannot.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {MOATS.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.n}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/[0.07] p-7 group hover:border-white/[0.12] transition-all duration-300"
                style={{
                  background: "#0A0F1E",
                  borderLeft: `4px solid ${m.accent}`,
                  gridColumn: m.wide ? "1 / -1" : undefined,
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div
                      className="text-4xl font-bold"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", color: m.accent, lineHeight: 1 }}
                    >
                      {m.n}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${m.accent}15`, color: m.accent }}
                      >
                        <Icon size={15} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{m.t}</h3>
                    </div>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{m.d}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
