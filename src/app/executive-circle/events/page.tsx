"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const SIX_DIMENSIONS = [
  { n: "01", title: "Data Infrastructure" },
  { n: "02", title: "Marketing Systems" },
  { n: "03", title: "Operational Consistency" },
  { n: "04", title: "Unit Visibility" },
  { n: "05", title: "Customer Experience Systems" },
  { n: "06", title: "AI Readiness" },
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
    "font-sans-ui text-[14px] w-full px-4 py-2.5 rounded-sm border border-[rgba(28,43,74,0.15)] text-[#1C2B4A] focus:outline-none focus:border-[#C8921A] bg-[#FDFBF8] transition-colors";

  return (
    <div className="min-h-screen bg-[#EDE9E3]" style={{ fontFamily: "'Constantia', Georgia, serif" }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Toronto skyline photograph */}
        <img
          src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80"
          alt="Toronto skyline at night"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay — sky to near-black at bottom */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(10,16,28,0.78) 55%, rgba(10,16,28,0.97) 100%)" }}
        />

        {/* Breadcrumb */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 w-full pt-36">
          <Link href="/executive-circle" className="inline-flex items-center gap-1.5 font-sans-ui text-[12px] text-white/40 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> Executive Circle
          </Link>
        </div>

        {/* Content pinned to bottom */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 w-full pb-20 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase">
                Executive Circle · Roundtable 01
              </span>
              <span className="w-1 h-1 rounded-full bg-white/25" />
              <span className="font-sans-ui text-[11px] text-white/40">Invite Only · $150</span>
            </div>
            <h1 className="font-display text-[clamp(52px,8vw,100px)] text-white leading-[0.88] mb-6">
              THE SYSTEMS<br />READINESS<br />AUDIT.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-6 mb-10"
          >
            <span className="font-sans-ui text-[15px] text-white/70">July 25, 2026</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="font-sans-ui text-[15px] text-white/70">Toronto, Ontario</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="font-sans-ui text-[15px] text-white/70">Half-day session</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="#request"
              className="inline-flex items-center gap-2 font-sans-ui text-[14px] font-semibold bg-[#C8921A] text-white px-7 py-3.5 rounded-sm hover:bg-[#B07D14] transition-colors"
            >
              Request Invitation <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── The session ──────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#EDE9E3]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_380px] gap-20 items-start">

            <div>
              <p className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-6">
                About the Day
              </p>
              <h2 className="font-display text-[clamp(36px,4vw,56px)] text-[#1C2B4A] leading-[0.92] mb-8">
                THE ROOM YOU<br />WANT TO BE IN.
              </h2>
              <div className="w-10 h-0.5 bg-[#C8921A] mb-10" />
              <div className="space-y-6 text-[17px] leading-relaxed text-[#4A5568]">
                <p>
                  Is your franchise operationally ready to scale &mdash; and what&rsquo;s standing in the way? A half-day with the executives who are building Canada&rsquo;s largest franchise systems, and an honest look at where the gaps are.
                </p>
                <p>
                  Every participant works through the same six-dimension readiness framework and leaves with a scored assessment of their organization. Where you are strong. Where delay is costing you.
                </p>
              </div>
            </div>

            {/* Event photo */}
            <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80"
                alt="Toronto skyline"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,43,74,0.6) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-[22px] text-white leading-tight">July 25, 2026</p>
                <p className="font-sans-ui text-[13px] text-white/60 mt-1">Toronto · Invite Only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Six dimensions ───────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#1C2B4A] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200586a9e6a?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-4">
            What You&rsquo;ll Work Through
          </p>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] text-white leading-[0.92] mb-4">
            SIX DIMENSIONS.<br />ONE CLEAR PICTURE.
          </h2>
          <p className="font-sans-ui text-[14px] text-white/45 mb-14 max-w-lg">
            Each dimension is scored. Every gap has a cost. The session translates readiness into clarity &mdash; and urgency into a plan.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
            {SIX_DIMENSIONS.map((d) => (
              <div key={d.n} className="bg-[#1C2B4A] p-8 hover:bg-white/[0.04] transition-colors">
                <div className="font-display text-[42px] text-[#C8921A]/20 leading-none mb-3">{d.n}</div>
                <div className="font-display text-[22px] text-white leading-tight">{d.title.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The deliverable ──────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-4">
                What You&rsquo;ll Leave With
              </p>
              <h2 className="font-display text-[clamp(36px,4vw,52px)] text-[#1C2B4A] leading-[0.92] mb-6">
                YOUR READINESS<br />REPORT.
              </h2>
              <div className="w-10 h-0.5 bg-[#C8921A] mb-8" />
              <p className="text-[17px] leading-relaxed text-[#4A5568] mb-8">
                Every attendee receives the Franchise Scale Readiness Report &mdash; a scored assessment of your organization across the six dimensions, the estimated cost of each gap, and a prioritized path forward.
              </p>
            </div>

            <div
              className="rounded-xl p-8 border-2 border-[#C8921A]/20 bg-white relative overflow-hidden"
              style={{ borderTop: "3px solid #C8921A" }}
            >
              <p className="font-sans-ui text-[10px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
                Sova Output
              </p>
              <h3 className="font-display text-[28px] text-[#1C2B4A] leading-tight mb-6">
                THE FRANCHISE SCALE READINESS REPORT
              </h3>
              <div className="space-y-3">
                {[
                  "Scored assessment across six dimensions",
                  "Cost-of-delay analysis per gap",
                  "Prioritized action framework",
                  "Peer benchmarking data",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#C8921A] mt-2 shrink-0" />
                    <span className="font-sans-ui text-[13px] text-[#4A5568]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Speakers ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(28,43,74,0.88)" }}
        />
        <div className="relative z-10 py-24 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-4">
              Guest Speakers
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] text-white leading-[0.92] mb-6">
              LEADING PRACTITIONERS.<br />DIRECT CONVERSATION.
            </h2>
            <p className="text-[18px] text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              The July roundtable will feature guest speakers from the senior leadership of Canada&rsquo;s most recognized franchise systems. The agenda is built around their experience &mdash; not a stage.
            </p>
            <div className="inline-flex items-center gap-2.5 font-sans-ui text-[12px] text-[#C8921A] border border-[#C8921A]/30 px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8921A] animate-pulse" />
              Speaker lineup announced June 2026
            </div>
          </div>
        </div>
      </section>

      {/* ── Who attends ──────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-10 bg-[#EDE9E3]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { role: "CEO / Founder", note: "Building the next phase of their network" },
              { role: "COO / VP Operations", note: "Responsible for system-wide consistency" },
              { role: "CMO / VP Marketing", note: "Accountable for brand and performance" },
              { role: "VP Franchise Development", note: "Growing the network intelligently" },
              { role: "Director of Operations", note: "Executing across every location" },
              { role: "Director of Marketing", note: "Delivering campaigns at scale" },
            ].map((p) => (
              <div key={p.role} className="bg-[#FDFBF8] rounded-xl p-6 border border-[rgba(28,43,74,0.07)]">
                <div className="w-2 h-2 rounded-full bg-[#C8921A] mb-4" />
                <p className="font-sans-ui text-[14px] font-semibold text-[#1C2B4A] mb-1">{p.role}</p>
                <p className="font-sans-ui text-[12px] text-[#718096] leading-snug">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="font-sans-ui text-[12px] text-[#718096] text-center mt-6">
            Canadian franchise brands · 10+ locations · Invite-only attendance
          </p>
        </div>
      </section>

      {/* ── Request form ─────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-10 bg-[#1C2B4A]" id="request">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-4">
            Request Invitation
          </p>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] text-white leading-[0.92] mb-3">
            APPLY TO ATTEND.
          </h2>
          <p className="font-sans-ui text-[14px] text-white/50 mb-4">
            Attendance is by invitation only. Requests are reviewed by the Sova team. Confirmed guests receive an invoice for the $150 attendance fee.
          </p>
          <div className="inline-flex items-center gap-2 font-sans-ui text-[13px] font-semibold text-[#C8921A] bg-[#C8921A]/10 border border-[#C8921A]/25 px-4 py-2 rounded-full mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8921A]" />
            No cost to submit your application
          </div>

          <div className="bg-[#FDFBF8] rounded-xl p-8" style={{ borderTop: "3px solid #C8921A" }}>
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
                    <option>1&ndash;10</option>
                    <option>11&ndash;50</option>
                    <option>51&ndash;200</option>
                    <option>200+</option>
                  </select>
                </div>

                <div>
                  <label className="font-sans-ui text-[11px] font-semibold tracking-[0.1em] uppercase text-[#718096] block mb-1.5">
                    How did you hear about this event?
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
                  Submit Application <ArrowRight size={15} />
                </button>
                <p className="font-sans-ui text-[11px] text-[#718096] text-center">
                  No cost to apply · $150 per attendee if confirmed · Toronto · July 25, 2026
                </p>
              </form>
            ) : (
              <div className="text-center py-10">
                <CheckCircle size={36} className="text-[#2EA5A0] mx-auto mb-4" />
                <h3 className="font-display text-[28px] text-[#1C2B4A] mb-3">Application Received</h3>
                <p className="font-sans-ui text-[14px] text-[#4A5568] max-w-sm mx-auto leading-relaxed">
                  Thank you. We&apos;ll review your application and be in touch within 5 business days.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
