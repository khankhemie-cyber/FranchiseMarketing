"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#EDE9E3]">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-subtle opacity-60 pointer-events-none" />

      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(200,146,26,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
                Built for Canadian Franchise Brands
              </div>
              <h1
                className="font-display text-[72px] sm:text-[88px] lg:text-[96px] text-[#1C2B4A] leading-[0.88] mb-8"
              >
                YOUR ENTIRE<br />
                FRANCHISE<br />
                NETWORK.<br />
                <span style={{ color: "#C8921A" }}>ONE PLATFORM.</span>
              </h1>
              <div className="rule-gold mb-8" />
              <p className="text-xl leading-relaxed text-[#4A5568] mb-10 max-w-md" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
                Sova gives franchise leaders complete visibility and control across every location — campaigns, vendors, performance, and intelligence in a single platform.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/demo">
                  <Button variant="dark" size="lg">
                    Book a Demo
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button variant="ghost" size="lg" className="font-sans-ui">
                    Explore the Platform →
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right — dashboard card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <DashboardCard />
          </motion.div>
        </div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-[rgba(28,43,74,0.1)] grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { n: "$133B", l: "Canadian franchise GDP" },
            { n: "76,000+", l: "Franchise locations nationally" },
            { n: "1,300", l: "Active Canadian brands" },
            { n: "8", l: "Integrated platform modules" },
          ].map((s) => (
            <div key={s.n}>
              <div className="font-display text-4xl text-[#C8921A] mb-1">{s.n}</div>
              <div className="font-sans-ui text-[12px] text-[#718096] tracking-wide">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DashboardCard() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-[rgba(28,43,74,0.1)]"
      style={{ background: "#FDFBF8", boxShadow: "0 24px 80px rgba(28,43,74,0.1), 0 4px 16px rgba(28,43,74,0.06)" }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(28,43,74,0.07)] bg-[#F5F1EB]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#D84F18]/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#C8921A]/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#2EA5A0]/40" />
        <span className="font-sans-ui text-[11px] text-[#718096] mx-auto">Sova — Network Dashboard</span>
      </div>

      <div className="p-5 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Active Campaigns", v: "247", delta: "+18%", c: "#C8921A" },
            { label: "Network Revenue", v: "$8.4M", delta: "+24%", c: "#1A6478" },
            { label: "Locations Live", v: "143", delta: "All green", c: "#2EA5A0" },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-lg p-3.5 border border-[rgba(28,43,74,0.07)]"
              style={{ borderTop: `2px solid ${k.c}` }}
            >
              <div className="font-sans-ui text-[10px] text-[#718096] mb-1.5">{k.label}</div>
              <div className="font-display text-2xl text-[#1C2B4A]">{k.v}</div>
              <div className="font-sans-ui text-[10px] font-medium mt-1" style={{ color: k.c }}>{k.delta}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-lg border border-[rgba(28,43,74,0.07)] p-4">
          <div className="font-sans-ui text-[11px] font-semibold text-[#1C2B4A] mb-3">Location Performance Index</div>
          <div className="flex items-end gap-1.5 h-16">
            {[55, 72, 68, 84, 76, 91, 83, 69, 88, 95, 78, 97].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: `${h}%`, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.4, ease: "easeOut" }}
                style={{ background: h > 82 ? "#C8921A" : h > 70 ? "#1A6478" : "rgba(28,43,74,0.15)" }}
              />
            ))}
          </div>
        </div>

        {/* Module pills */}
        <div className="flex flex-wrap gap-1.5">
          {["Campaigns", "Paid Media", "Geofencing", "Vendors", "Analytics", "AI Layer"].map((m) => (
            <span
              key={m}
              className="font-sans-ui text-[10px] font-medium px-2.5 py-1 rounded border text-[#4A5568] border-[rgba(28,43,74,0.1)] bg-[#F5F1EB]"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
