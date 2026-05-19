"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Users, Megaphone, DollarSign, MapPin, Star,
  ShoppingBag, BarChart3, Sparkles
} from "lucide-react";

const MODULES = [
  {
    n: "01", t: "Franchise CRM", icon: Users, accent: "#C89520",
    d: "System of record for the entire network. Franchisee profiles, territories, and location performance — franchise-native, not adapted from a generic CRM.",
    features: ["Franchisee profile management", "Territory mapping & analytics", "Performance benchmarking", "Onboarding workflows"],
  },
  {
    n: "02", t: "Campaign Engine", icon: Megaphone, accent: "#2A9D8F",
    d: "Brand-controlled local marketing with approval workflows built for the franchisor-franchisee model. Push campaigns to 10 or 500 locations at once.",
    features: ["Central campaign library", "Franchisee activation portal", "Approval workflows", "Brand compliance controls"],
  },
  {
    n: "03", t: "Paid Media", icon: DollarSign, accent: "#1B6070",
    d: "Multi-channel digital advertising centrally governed, locally executed. Google, Meta — full visibility across every location's spend and performance.",
    features: ["Cross-channel ad management", "Location-level budgets", "Real-time spend dashboard", "Automated optimization"],
  },
  {
    n: "04", t: "Geofencing", icon: MapPin, accent: "#D4592A",
    d: "Device-level location targeting with competitor conquesting and event targeting built in natively. Drive foot traffic to specific locations.",
    features: ["Competitor conquesting", "Event-based targeting", "Foot traffic attribution", "Custom audience zones"],
  },
  {
    n: "05", t: "Influencer Marketplace", icon: Star, accent: "#C89520",
    d: "Curated creator discovery with franchise-specific vetting, brand-safe controls, and local market filtering for every region of Canada.",
    features: ["Creator vetting & discovery", "Brand safety controls", "Local market filtering", "Campaign performance tracking"],
  },
  {
    n: "06", t: "Vendor Marketplace", icon: ShoppingBag, accent: "#2A9D8F",
    d: "The only franchise platform with native vendor ordering. Brand-approved materials ordered directly by franchisees, tracked in-platform.",
    features: ["Brand-approved vendor catalog", "Franchisee direct ordering", "Order tracking & fulfillment", "Spend analytics"],
  },
  {
    n: "07", t: "Reporting & Analytics", icon: BarChart3, accent: "#1B6070",
    d: "Location scorecards, network dashboards, and cross-network benchmarking. Know how every location performs against the whole network.",
    features: ["Location scorecards", "Network dashboards", "Cross-location benchmarking", "Automated monthly digests"],
  },
  {
    n: "08", t: "AI Layer", icon: Sparkles, accent: "#D4592A",
    d: "Intelligence embedded across every module — campaign recommendations, health scores, churn prediction, and automated monthly digests.",
    features: ["Campaign recommendations", "Health score engine", "Churn prediction", "Automated digests & alerts"],
  },
];

export function Modules() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const m = MODULES[active];
  const Icon = m.icon;

  return (
    <section id="modules" ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1120]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,149,32,0.06) 0%, transparent 50%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="gold" className="mb-5">The Platform</Badge>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white leading-[0.9] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            EIGHT MODULES. <span className="gradient-text-gold">ONE SYSTEM.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
            Every module ships complete on Day 1. The competitive advantage isn&apos;t one feature — it&apos;s the combination.
          </p>
        </motion.div>

        {/* Module explorer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden border border-white/[0.07]"
          style={{ background: "#0A0F1E" }}
        >
          {/* Tab list */}
          <div className="border-r border-white/[0.06] bg-[#080C18]/60">
            {MODULES.map((mod, i) => {
              const ModIcon = mod.icon;
              return (
                <button
                  key={mod.n}
                  onClick={() => setActive(i)}
                  className="w-full flex items-center gap-3 px-5 py-4 text-left transition-all duration-150 border-b border-white/[0.04] group relative"
                  style={{
                    background: active === i ? `${mod.accent}0D` : "transparent",
                    borderLeft: active === i ? `3px solid ${mod.accent}` : "3px solid transparent",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      background: active === i ? `${mod.accent}20` : "rgba(255,255,255,0.04)",
                      color: active === i ? mod.accent : "#6B7280",
                    }}
                  >
                    <ModIcon size={14} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest mb-0.5"
                      style={{ color: active === i ? mod.accent : "#4B5563" }}>
                      {mod.n}
                    </div>
                    <div className="text-xs font-semibold"
                      style={{ color: active === i ? "#F9FAFB" : "#6B7280" }}>
                      {mod.t}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="p-10 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${m.accent}15`, border: `1px solid ${m.accent}30` }}
                >
                  <Icon size={24} style={{ color: m.accent }} />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest mb-1" style={{ color: m.accent }}>
                    MODULE {m.n}
                  </div>
                  <h3
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {m.t.toUpperCase()}
                  </h3>
                </div>
              </div>

              <div className="h-0.5 w-12 mb-6" style={{ background: m.accent }} />

              <p className="text-[#9CA3AF] text-base leading-relaxed mb-8">{m.d}</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {m.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm text-[#9CA3AF]"
                    style={{ borderColor: `${m.accent}18`, background: `${m.accent}06` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: m.accent }} />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-[#C89520]/20"
            style={{ background: "rgba(200,149,32,0.06)" }}
          >
            <div
              className="text-5xl font-bold text-[#C89520]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              8
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white tracking-wider uppercase">Integrated Modules</div>
              <div className="text-xs text-[#6B7280]">All ship complete on Day 1. No staged rollout.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
