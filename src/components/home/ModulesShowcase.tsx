"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Megaphone, BarChart3, MapPin, ShoppingBag,
  Brain, FileText, Users, Globe,
} from "lucide-react";

const MODULES = [
  {
    id: "campaigns",
    icon: Megaphone,
    color: "#C8921A",
    badge: "Campaign Engine",
    headline: "Launch. Localise. Scale.",
    body: "Head office sets brand guardrails. Franchisees customise within them. Every campaign — from coast-to-coast brand pushes to hyper-local flyers — flows through a single approval layer with built-in CASL compliance.",
    features: ["Multi-location campaign builder", "Brand compliance controls", "CASL opt-in management", "Automated creative adaptation", "Franchisee co-op spend tracking"],
  },
  {
    id: "paid-media",
    icon: BarChart3,
    color: "#1A6478",
    badge: "Paid Media",
    headline: "Every dollar. Every location. Accountable.",
    body: "Consolidate Google, Meta, programmatic, and OOH buys across your entire network. Automated budget pacing prevents overspend at the franchisee level while head office retains full visibility.",
    features: ["Unified media buying dashboard", "Per-location budget controls", "Google & Meta API integration", "Automated pacing & alerts", "Cross-channel attribution"],
  },
  {
    id: "geofencing",
    icon: MapPin,
    color: "#2EA5A0",
    badge: "Geofencing",
    headline: "Own your trade area.",
    body: "Deploy precision geofences around every location — and your competitors'. Trigger time-sensitive offers when prospects enter your zones and suppress ads outside your delivery radius.",
    features: ["Trade-area geofence builder", "Competitor conquest targeting", "Weather-triggered campaigns", "Drive-time audience segments", "Foot-traffic attribution"],
  },
  {
    id: "vendors",
    icon: ShoppingBag,
    color: "#D84F18",
    badge: "Vendor Marketplace",
    headline: "Vetted partners. Negotiated rates.",
    body: "Access a curated marketplace of Canadian marketing vendors — print shops, signage suppliers, digital agencies, photographers — all pre-vetted and with network-wide pricing that independent franchisees can't access alone.",
    features: ["Curated Canadian vendor network", "Network pricing agreements", "In-platform procurement", "Project tracking & approvals", "Vendor performance ratings"],
  },
  {
    id: "analytics",
    icon: BarChart3,
    color: "#1C2B4A",
    badge: "Network Analytics",
    headline: "The view from head office.",
    body: "A real-time intelligence layer across every location. Compare performance, surface outliers, and deliver franchisee scorecards — all from a single screen. No more spreadsheet consolidations.",
    features: ["Location performance index", "Franchisee scorecards", "Cohort & peer benchmarking", "Executive digest reports", "Custom KPI dashboards"],
  },
  {
    id: "ai",
    icon: Brain,
    color: "#C8921A",
    badge: "AI Intelligence",
    headline: "Insight that acts.",
    body: "Sova's AI layer surfaces anomalies, predicts seasonal demand curves, recommends budget reallocation, and drafts campaign briefs — so your team spends time on strategy, not synthesis.",
    features: ["Anomaly detection & alerts", "Demand forecasting", "Budget reallocation engine", "AI campaign brief generator", "Natural language reporting"],
  },
  {
    id: "content",
    icon: FileText,
    color: "#1A6478",
    badge: "Content Studio",
    headline: "Brand-safe content at scale.",
    body: "A centralised content library that gives franchisees access to approved assets, templated collateral, and a localisation workflow — eliminating rogue brand expressions across your network.",
    features: ["Centralised asset library", "Localisation workflow", "Template-locked creative", "Digital asset management", "Version control & approvals"],
  },
  {
    id: "field",
    icon: Users,
    color: "#2EA5A0",
    badge: "Field Management",
    headline: "Your field team, connected.",
    body: "Give regional managers a structured view of their territories — visit logs, action items, compliance flags, and performance rollups. Close the loop between the field and head office.",
    features: ["Territory dashboards", "Field visit checklists", "Action item tracking", "Compliance flag workflows", "Regional performance rollup"],
  },
];

export function ModulesShowcase() {
  const [active, setActive] = useState(MODULES[0].id);
  const current = MODULES.find((m) => m.id === active)!;
  const Icon = current.icon;

  return (
    <section className="py-24 bg-[#1C2B4A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Platform Modules
          </div>
          <h2 className="font-display text-[56px] sm:text-[64px] text-white leading-[0.92] mb-6">
            EIGHT MODULES.<br />ONE NETWORK.
          </h2>
          <p className="text-[17px] leading-relaxed text-white/55" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
            Each module solves a distinct franchise marketing challenge. Together they give you a complete operating picture.
          </p>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-6">
          {/* Module nav */}
          <div className="flex flex-col gap-1">
            {MODULES.map((m) => {
              const MIcon = m.icon;
              const isActive = m.id === active;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className="flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all duration-150"
                  style={{
                    background: isActive ? "rgba(200,146,26,0.12)" : "transparent",
                    borderLeft: isActive ? `2px solid ${m.color}` : "2px solid transparent",
                  }}
                >
                  <MIcon
                    size={16}
                    style={{ color: isActive ? m.color : "rgba(255,255,255,0.35)" }}
                  />
                  <span
                    className="font-sans-ui text-[13px] font-medium"
                    style={{ color: isActive ? "white" : "rgba(255,255,255,0.45)" }}
                  >
                    {m.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl p-8 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: `${current.color}30`,
                borderTop: `2px solid ${current.color}`,
              }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${current.color}20` }}
                >
                  <Icon size={22} style={{ color: current.color }} />
                </div>
                <div>
                  <Badge
                    variant={current.color === "#C8921A" ? "gold" : current.color === "#1A6478" ? "teal" : "neutral"}
                    className="mb-3"
                  >
                    {current.badge}
                  </Badge>
                  <h3 className="font-display text-[36px] text-white leading-none">
                    {current.headline}
                  </h3>
                </div>
              </div>

              <p className="text-[16px] leading-relaxed text-white/60 mb-8" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
                {current.body}
              </p>

              <div className="grid sm:grid-cols-2 gap-2">
                {current.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-[13px] text-white/50 font-sans-ui">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: current.color }} />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
