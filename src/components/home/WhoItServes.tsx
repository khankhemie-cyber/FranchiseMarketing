"use client";
import { motion } from "framer-motion";
import { Building2, UserCheck, Map } from "lucide-react";

const ROLES = [
  {
    icon: Building2,
    color: "#C8921A",
    title: "Head Office",
    tagline: "Control without micromanagement.",
    body: "Set brand standards, approve campaigns, manage co-op budgets, and get a real-time view across every location — without drowning in escalations or spreadsheet chaos.",
    outcomes: [
      "Brand compliance across all locations",
      "Network-wide campaign governance",
      "Executive performance dashboards",
      "Centralised vendor procurement",
    ],
  },
  {
    icon: UserCheck,
    color: "#1A6478",
    title: "Franchisees",
    tagline: "Local flexibility. Brand confidence.",
    body: "Access approved assets, launch local campaigns within brand guardrails, and get the buying power of the network — without needing a marketing team of your own.",
    outcomes: [
      "Approved creative templates",
      "Local campaign self-serve tools",
      "Network vendor pricing",
      "Transparent co-op spend reporting",
    ],
  },
  {
    icon: Map,
    color: "#2EA5A0",
    title: "Field Managers",
    tagline: "Your territory. Your numbers.",
    body: "Visit checklists, performance rollups, and action-item tracking in one structured workflow. Close the loop between field observations and head office decisions.",
    outcomes: [
      "Territory performance dashboards",
      "Structured visit workflows",
      "Escalation management",
      "Regional cohort benchmarking",
    ],
  },
];

export function WhoItServes() {
  return (
    <section className="py-24 bg-[#F5F1EB]">
      {/* Full-width photo strip */}
      <div className="relative h-64 overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Franchise restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(245,241,235,0) 0%, rgba(245,241,235,0) 40%, rgba(245,241,235,1) 100%)" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Built for Every Layer
          </div>
          <h2 className="font-display text-[52px] sm:text-[60px] text-[#1C2B4A] leading-[0.92] mb-4">
            ONE PLATFORM.<br />EVERY STAKEHOLDER.
          </h2>
          <p className="text-lg text-[#4A5568] max-w-xl mx-auto" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
            Sova aligns head office, franchisees, and field teams — so everyone sees the same numbers and works from the same playbook.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ROLES.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border border-[rgba(28,43,74,0.08)]"
                style={{ borderTop: `3px solid ${role.color}` }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-6"
                  style={{ background: `${role.color}15` }}
                >
                  <Icon size={20} style={{ color: role.color }} />
                </div>

                <div className="font-sans-ui text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: role.color }}>
                  {role.title}
                </div>
                <h3 className="font-display text-[28px] text-[#1C2B4A] leading-none mb-3">
                  {role.tagline}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4A5568] mb-6" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
                  {role.body}
                </p>

                <ul className="space-y-2.5">
                  {role.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 font-sans-ui text-[13px] text-[#4A5568]">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: role.color }} />
                      {o}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
