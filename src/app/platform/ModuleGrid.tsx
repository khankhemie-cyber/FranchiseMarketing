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
  Database,
  UserCheck,
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface Module {
  id: string;
  icon: React.ElementType;
  accent: string;
  name: string;
  tagline: string;
  accentWord: string; // 3-word colour accent shown on card
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
    accentWord: "Launch · Scale · Win",
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
    accentWord: "Track · Optimise · Report",
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
    accentWord: "Target · Conquer · Attribute",
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
    accentWord: "Source · Approve · Deliver",
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
    accentWord: "Measure · Benchmark · Act",
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
    accentWord: "Predict · Recommend · Automate",
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
    accentWord: "Create · Approve · Publish",
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
    accentWord: "Visit · Flag · Resolve",
    features: [
      "Structured visit logs",
      "Territory rollups",
      "Compliance flags",
      "Corrective action tracking",
      "Escalation workflows",
    ],
  },
  {
    id: "crm",
    icon: Database,
    accent: "#C8921A",
    name: "CRM",
    tagline: "Every contact. Every deal. One view.",
    accentWord: "Track · Nurture · Close",
    features: [
      "Franchise prospect pipeline",
      "Operator contact management",
      "Automated follow-up sequences",
      "Deal stage tracking",
      "Performance-linked contacts",
    ],
  },
  {
    id: "franchise-development",
    icon: UserCheck,
    accent: "#1A6478",
    name: "Franchise Development",
    tagline: "Sell franchises. Fill territories.",
    accentWord: "Discover · Score · Develop",
    features: [
      "Territory heat maps & availability",
      "Lead scoring & routing",
      "FDD distribution tracking",
      "Multi-unit operator pipeline",
      "Development analytics",
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
      className="text-left w-full rounded-sm transition-all duration-200 focus-visible:outline-none"
      style={{
        background: active ? mod.accent : "#FDFBF8",
        border: `1px solid ${active ? mod.accent : "rgba(28,43,74,0.10)"}`,
        boxShadow: active
          ? `0 8px 32px ${mod.accent}38`
          : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div className="p-5">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
          style={{
            background: active ? "rgba(255,255,255,0.18)" : `${mod.accent}1A`,
          }}
        >
          <Icon size={22} style={{ color: active ? "#fff" : mod.accent }} />
        </div>

        {/* Name */}
        <div
          className="font-sans-ui font-semibold text-sm leading-tight mb-1"
          style={{ color: active ? "#fff" : "#1C2B4A" }}
        >
          {mod.name}
        </div>

        {/* Tagline — single line */}
        <div
          className="font-sans-ui text-[12px] leading-snug mb-3"
          style={{ color: active ? "rgba(255,255,255,0.72)" : "#6B7280" }}
        >
          {mod.tagline}
        </div>

        {/* 3-word accent */}
        <div
          className="font-sans-ui text-[10px] font-semibold tracking-[0.14em] uppercase"
          style={{ color: active ? "rgba(255,255,255,0.55)" : mod.accent }}
        >
          {mod.accentWord}
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
      className="rounded-sm p-8 lg:p-12"
      style={{
        background: "#FDFBF8",
        borderTop: `3px solid ${mod.accent}`,
        border: `1px solid rgba(28,43,74,0.08)`,
        borderTopWidth: "3px",
        borderTopColor: mod.accent,
      }}
    >
      <div className="grid lg:grid-cols-[80px_1fr] gap-8 lg:gap-12 items-start">
        {/* Left: large icon */}
        <div
          className="w-16 h-16 rounded-sm flex items-center justify-center flex-shrink-0"
          style={{ background: mod.accent }}
        >
          <Icon size={30} color="#fff" />
        </div>

        {/* Right */}
        <div>
          {/* Module label */}
          <div
            className="font-sans-ui text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
            style={{ color: mod.accent }}
          >
            {mod.name}
          </div>

          {/* Tagline as display headline */}
          <h3
            className="font-display text-[32px] sm:text-[42px] leading-[0.92] mb-5"
            style={{ color: "#1C2B4A" }}
          >
            {mod.tagline.toUpperCase()}
          </h3>

          {/* Gold rule */}
          <div
            className="w-10 h-0.5 mb-6"
            style={{ background: mod.accent }}
          />

          {/* Features as pills */}
          <div className="flex flex-wrap gap-2">
            {mod.features.map((f) => (
              <span
                key={f}
                className="font-sans-ui text-[12px] font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: `${mod.accent}12`,
                  color: mod.accent,
                  border: `1px solid ${mod.accent}28`,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Grid ───────────────────────────────────────────────────────────────── */

export default function ModuleGrid() {
  const [active, setActive] = useState<string>("campaign-engine");

  const toggle = (id: string) =>
    setActive((prev) => (prev === id ? "campaign-engine" : id));
  const activeMod = MODULES.find((m) => m.id === active) ?? MODULES[0];

  return (
    <div>
      {/* 5-col desktop / 2-col mobile card grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {MODULES.map((mod) => (
          <ModuleCard
            key={mod.id}
            mod={mod}
            active={active === mod.id}
            onClick={() => toggle(mod.id)}
          />
        ))}
      </div>

      {/* Active module detail panel */}
      <div className="mt-4">
        <ModuleDetail mod={activeMod} />
      </div>
    </div>
  );
}
