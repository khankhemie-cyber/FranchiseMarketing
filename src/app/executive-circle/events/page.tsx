"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  Lock,
  BarChart3,
  Brain,
  Shield,
  Layers,
  Eye,
  Cpu,
} from "lucide-react";

const DIMENSIONS = [
  { icon: Layers, label: "Data Infrastructure", color: "#C8921A" },
  { icon: BarChart3, label: "Marketing Systems", color: "#1A6478" },
  { icon: Shield, label: "Operational Consistency", color: "#2EA5A0" },
  { icon: Eye, label: "Unit Visibility", color: "#D84F18" },
  { icon: Users, label: "Customer Experience Systems", color: "#C8921A" },
  { icon: Cpu, label: "AI Readiness", color: "#1A6478" },
];

export default function EventsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", title: "", brand: "", email: "", locations: "", how: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "font-sans-ui text-[14px] w-full px-4 py-2.5 rounded-sm border border-[rgba(28,43,74,0.15)] text-[#1C2B4A] focus:outline-none focus:border-[#C8921A] bg-[#FDFBF8]";

  return (
    <div className="min-h-screen bg-[#EDE9E3]" style={{ fontFamily: "'Constantia', Georgia, serif" }}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-[#1C2B4A] pt-32 pb-24 px-6 lg:px-10 relative overflow-hidden">
        {/* Breadcrumb */}
        <div className="relative max-w-5xl mx-auto mb-8 pt-4">
          <Link href="/executive-circle" className="inline-flex items-center gap-1.5 font-sans-ui text-[12px] text-white/40 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> Executive Circle
          </Link>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(200,146,26,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="inline-flex items-center gap-2 font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8921A] animate-pulse" />
                Executive Circle · Roundtable 01
              </span>
              <span className="inline-flex items-center gap-1.5 font-sans-ui text-[11px] text-white/40">
                <Lock size={10} /> Invite Only
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-display text-[clamp(44px,7vw,88px)] text-white leading-[0.88] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            THE SYSTEMS<br />READINESS AUDIT.
          </motion.h1>

          <motion.div
            className="w-12 h-0.5 bg-[#C8921A] mb-8"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          <motion.p
            className="text-[19px] sm:text-[21px] text-white/60 leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            Is your franchise operationally ready to scale — and what&rsquo;s standing in the way?
          </motion.p>

          {/* Event details strip */}
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {[
              { icon: Calendar, label: "July 25, 2026" },
              { icon: MapPin, label: "Toronto, Ontario" },
              { icon: Users, label: "Invite-Only · Limited Seats" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 font-sans-ui text-[13px] text-white/55">
                <Icon size={14} className="text-[#C8921A]" />
                {label}
              </div>
            ))}
            <div className="flex items-center gap-2 font-sans-ui text-[13px] font-semibold text-[#C8921A]">
              $150 per attendee
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Session overview ─────────────────────────────── */}
      <section className="py-20 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
                About the Session
              </p>
              <h2 className="font-display text-[clamp(32px,4vw,52px)] text-[#1C2B4A] leading-[0.92] mb-6">
                A STRUCTURED<br />READINESS ASSESSMENT.
              </h2>
              <div className="w-10 h-0.5 bg-[#C8921A] mb-8" />
              <div className="space-y-5 text-[16px] leading-relaxed text-[#4A5568]">
                <p>
                  A structured readiness assessment across six dimensions: data infrastructure, marketing systems, operational consistency, unit visibility, customer experience systems, and AI readiness.
                </p>
                <p>
                  Every participant gets a score. Every gap has a cost. The session creates urgency — and the Summit becomes the obvious next step.
                </p>
              </div>

              <div
                className="mt-10 p-6 rounded-xl border border-[#C8921A]/20 bg-white"
                style={{ borderLeft: "3px solid #C8921A" }}
              >
                <p className="font-sans-ui text-[11px] font-semibold tracking-[0.15em] text-[#C8921A] uppercase mb-3">
                  Sova Output
                </p>
                <p className="font-sans-ui text-[13px] text-[#1C2B4A] font-semibold mb-1">
                  The Franchise Scale Readiness Report
                </p>
                <p className="font-sans-ui text-[13px] leading-relaxed text-[#718096]">
                  The primary Summit teaser document — pitched to trade media ahead of the event. Every attendee receives a personalised readiness score and gap analysis.
                </p>
              </div>
            </div>

            <div>
              <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
                Session Format
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Six-dimension readiness assessment",
                  "Gap scoring across your network",
                  "Cost of delay modelling",
                  "Summit preview and next steps",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="font-display text-[20px] text-[#C8921A]/30 leading-none mt-0.5 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans-ui text-[14px] text-[#4A5568] leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>

              <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
                Six Assessment Dimensions
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {DIMENSIONS.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 bg-white rounded-lg px-3.5 py-3 border border-[rgba(28,43,74,0.07)]"
                  >
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: `${color}14` }}
                    >
                      <Icon size={14} style={{ color }} />
                    </div>
                    <span className="font-sans-ui text-[11px] font-medium text-[#1C2B4A] leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Speakers teaser ──────────────────────────────── */}
      <section className="py-20 px-6 lg:px-10 bg-[#1C2B4A]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Guest Speakers
          </p>
          <h2 className="font-display text-[clamp(32px,4vw,56px)] text-white leading-[0.92] mb-6">
            LEADING VOICES<br />IN CANADIAN FRANCHISING.
          </h2>
          <p className="text-[17px] text-white/55 max-w-xl mx-auto mb-10">
            The July roundtable will feature guest speakers drawn from the senior leadership of Canada&rsquo;s most respected franchise systems. Speaker announcements coming soon.
          </p>
          <div className="inline-flex items-center gap-2 font-sans-ui text-[12px] text-[#C8921A] border border-[#C8921A]/30 px-5 py-2.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8921A] animate-pulse" />
            Speaker lineup announced June 2026
          </div>
        </div>
      </section>

      {/* ── Request to attend form ───────────────────────── */}
      <section className="py-20 px-6 lg:px-10 bg-[#EDE9E3]" id="request">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Request to Attend
          </p>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] text-[#1C2B4A] leading-[0.92] mb-3">
            SUBMIT YOUR<br />REQUEST.
          </h2>
          <p className="font-sans-ui text-[14px] text-[#718096] mb-10">
            This is an invite-only event. Requests are reviewed by the Sova team. Confirmed attendees will receive an invoice for the $150 attendance fee.
          </p>

          <div className="bg-[#FDFBF8] rounded-xl p-8 border border-[rgba(28,43,74,0.08)]" style={{ borderTop: "3px solid #C8921A" }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: "name", label: "Full Name", type: "text" },
                  { key: "title", label: "Job Title", type: "text" },
                  { key: "brand", label: "Franchise Brand / Company", type: "text" },
                  { key: "email", label: "Work Email", type: "email" },
                ].map(({ key, label, type }) => (
                  <div key={key}>
                    <label className="font-sans-ui text-[11px] font-semibold tracking-[0.1em] uppercase text-[#718096] block mb-1.5">
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                ))}

                <div>
                  <label className="font-sans-ui text-[11px] font-semibold tracking-[0.1em] uppercase text-[#718096] block mb-1.5">
                    Number of Locations
                  </label>
                  <select
                    required
                    value={form.locations}
                    onChange={(e) => setForm({ ...form, locations: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Select range</option>
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>200+</option>
                  </select>
                </div>

                <div>
                  <label className="font-sans-ui text-[11px] font-semibold tracking-[0.1em] uppercase text-[#718096] block mb-1.5">
                    How did you hear about this event? (optional)
                  </label>
                  <input
                    type="text"
                    value={form.how}
                    onChange={(e) => setForm({ ...form, how: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="font-sans-ui text-[14px] font-semibold w-full bg-[#1C2B4A] text-white px-6 py-3.5 rounded-sm hover:bg-[#263d6b] transition-colors flex items-center justify-center gap-2"
                >
                  Submit Request to Attend <ArrowRight size={16} />
                </button>

                <p className="font-sans-ui text-[11px] text-[#718096] text-center">
                  Invite-only · $150 per attendee · Toronto, July 25, 2026
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle size={40} className="text-[#2EA5A0] mx-auto mb-4" />
                <h3 className="font-display text-[28px] text-[#1C2B4A] mb-3">Request Received</h3>
                <p className="font-sans-ui text-[14px] text-[#4A5568] max-w-sm mx-auto">
                  Thank you for your interest. We&apos;ll review your request and be in touch within 5 business days.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
