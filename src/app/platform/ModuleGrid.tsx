"use client";

import { useState } from "react";
import {
  Megaphone,
  BarChart3,
  BarChart2,
  MapPin,
  ShoppingBag,
  Brain,
  FileText,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface Module {
  id: string;
  icon: React.ElementType;
  accent: string;
  name: string;
  tagline: string;
  stat?: { value: string; label: string };
  features: string[];
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

const MODULES: Module[] = [
  {
    id: "campaign-engine",
    icon: Megaphone,
    accent: "#C8921A",
    name: "Campaign Engine",
    tagline: "Launch, localise, scale.",
    stat: { value: "1-click", label: "deploy to all locations" },
    features: [
      "Brand-locked templates",
      "CASL opt-in built in",
      "Co-op spend tracking",
      "Automated localisation",
      "One approval layer",
    ],
  },
  {
    id: "paid-media",
    icon: BarChart3,
    accent: "#1A6478",
    name: "Paid Media",
    tagline: "Every dollar. Accountable.",
    stat: { value: "4+", label: "channels unified" },
    features: [
      "Google + Meta + programmatic",
      "Per-location budget controls",
      "Cross-channel attribution",
      "Self-serve franchisee buying",
      "Audit-ready spend reports",
    ],
  },
  {
    id: "geofencing",
    icon: MapPin,
    accent: "#2EA5A0",
    name: "Geofencing",
    tagline: "Own your trade area.",
    stat: { value: "Drive-time", label: "precision targeting" },
    features: [
      "Trade-area fence builder",
      "Competitor conquest zones",
      "Weather-triggered campaigns",
      "Day-part ad scheduling",
      "Offline visit attribution",
    ],
  },
  {
    id: "vendor-marketplace",
    icon: ShoppingBag,
    accent: "#D84F18",
    name: "Vendor Marketplace",
    tagline: "Vetted partners. Network rates.",
    stat: { value: "Pre-vetted", label: "Canadian vendors" },
    features: [
      "Network-negotiated pricing",
      "In-platform procurement",
      "Brand compliance approvals",
      "Project brief to delivery",
      "Vendor performance ratings",
    ],
  },
  {
    id: "network-analytics",
    icon: BarChart2,
    accent: "#1C2B4A",
    name: "Network Analytics",
    tagline: "The view from head office.",
    stat: { value: "Real-time", label: "location index" },
    features: [
      "Franchisee scorecards",
      "Peer benchmarking",
      "Automated exec digests",
      "Role-based dashboards",
      "Anomaly alerts",
    ],
  },
  {
    id: "ai-intelligence",
    icon: Brain,
    accent: "#C8921A",
    name: "AI Intelligence",
    tagline: "Insight that acts.",
    stat: { value: "NL", label: "ask the platform anything" },
    features: [
      "Anomaly detection",
      "Demand forecasting",
      "Budget reallocation recs",
      "AI campaign briefs",
      "Natural-language queries",
    ],
  },
  {
    id: "content-studio",
    icon: FileText,
    accent: "#1A6478",
    name: "Content Studio",
    tagline: "Brand-safe at scale.",
    stat: { value: "DAM", label: "versioned + searchable" },
    features: [
      "Central asset library",
      "Template-locked editing",
      "Approval-gated publishing",
      "Asset expiry management",
      "Usage analytics",
    ],
  },
  {
    id: "field-management",
    icon: Users,
    accent: "#2EA5A0",
    name: "Field Management",
    tagline: "Your field team, connected.",
    stat: { value: "360°", label: "franchisee visibility" },
    features: [
      "Structured visit logs",
      "Territory rollups",
      "Compliance flags",
      "Corrective action tracking",
      "Escalation workflows",
    ],
  },
];

/* ─── Card ───────────────────────────────────────────────────────────────── */

function ModuleCard({
  mod,
  active,
  onClick,
}: {
  mod: Module;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = mod.icon;
  return (
    <button
      onClick={onClick}
      className="text-left w-full rounded-sm transition-all duration-200 group"
      style={{
        background: active ? mod.accent : "#FDFBF8",
        border: `1px solid ${active ? mod.accent : "rgba(28,43,74,0.10)"}`,
        boxShadow: active
          ? `0 8px 32px ${mod.accent}30`
          : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div className="p-5">
        {/* Icon row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
            style={{
              background: active ? "rgba(255,255,255,0.18)" : `${mod.accent}18`,
            }}
          >
            <Icon
              size={20}
              style={{ color: active ? "#fff" : mod.accent }}
            />
          </div>
          <div
            className="font-sans-ui text-[10px] font-semibold tracking-[0.14em] uppercase px-2 py-1 rounded-sm"
            style={{
              background: active ? "rgba(255,255,255,0.15)" : `${mod.accent}12`,
              color: active ? "#fff" : mod.accent,
            }}
          >
            {mod.stat?.value}
          </div>
        </div>

        {/* Name + tagline */}
        <div
          className="font-sans-ui font-semibold text-base mb-0.5 leading-snug"
          style={{ color: active ? "#fff" : "#1C2B4A" }}
        >
          {mod.name}
        </div>
        <div
          className="font-sans-ui text-[13px] leading-snug"
          style={{ color: active ? "rgba(255,255,255,0.75)" : "#6B7280" }}
        >
          {mod.tagline}
        </div>

        {/* Expand hint */}
        <div
          className="mt-3 flex items-center gap-1 font-sans-ui text-[11px] font-medium"
          style={{ color: active ? "rgba(255,255,255,0.65)" : mod.accent }}
        >
          {active ? (
            <>
              <ChevronUp size={13} /> Less
            </>
          ) : (
            <>
              <ChevronDown size={13} /> Details
            </>
          )}
        </div>
      </div>
    </button>
  );
}

/* ─── Detail panel ───────────────────────────────────────────────────────── */

function ModuleDetail({ mod }: { mod: Module }) {
  const Icon = mod.icon;
  return (
    <div
      className="rounded-sm p-8 lg:p-12 animate-in fade-in duration-300"
      style={{
        background: "#FDFBF8",
        border: `1px solid rgba(28,43,74,0.08)`,
        borderTop: `3px solid ${mod.accent}`,
      }}
    >
      <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-start">
        {/* Left: icon + stat */}
        <div className="flex flex-row lg:flex-col items-center lg:items-start gap-6 lg:gap-8">
          <div
            className="w-16 h-16 rounded-sm flex items-center justify-center flex-shrink-0"
            style={{ background: mod.accent }}
          >
            <Icon size={30} color="#fff" />
          </div>
          {mod.stat && (
            <div>
              <div
                className="font-display text-[40px] leading-none"
                style={{ color: mod.accent }}
              >
                {mod.stat.value}
              </div>
              <div
                className="font-sans-ui text-[12px] mt-1"
                style={{ color: "#6B7280" }}
              >
                {mod.stat.label}
              </div>
            </div>
          )}
        </div>

        {/* Right: name + tagline + features */}
        <div>
          <div
            className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-2"
            style={{ color: mod.accent }}
          >
            {mod.name}
          </div>
          <h3
            className="font-display text-[34px] sm:text-[42px] leading-[0.95] mb-6"
            style={{ color: "#1C2B4A" }}
          >
            {mod.tagline.toUpperCase()}
          </h3>

          <div
            className="w-10 h-0.5 mb-6"
            style={{ background: mod.accent }}
          />

          {/* Feature bullets — 2 col grid */}
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {mod.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: mod.accent }}
                />
                <span
                  className="font-sans-ui text-sm"
                  style={{ color: "#1C2B4A" }}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Grid ───────────────────────────────────────────────────────────────── */

export default function ModuleGrid() {
  const [active, setActive] = useState<string | null>(null);

  const toggle = (id: string) => setActive((prev) => (prev === id ? null : id));
  const activeMod = MODULES.find((m) => m.id === active) ?? null;

  return (
    <div>
      {/* 4-col card grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {MODULES.map((mod) => (
          <ModuleCard
            key={mod.id}
            mod={mod}
            active={active === mod.id}
            onClick={() => toggle(mod.id)}
          />
        ))}
      </div>

      {/* Expandable detail panel */}
      {activeMod && (
        <div className="mt-4">
          <ModuleDetail mod={activeMod} />
        </div>
      )}
    </div>
  );
}
