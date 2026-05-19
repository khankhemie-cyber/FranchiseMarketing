"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BENEFITS = [
  "Locked-in founder pricing for 24 months",
  "Priority access to new modules as they launch",
  "Direct line to the product team",
  "Co-design sessions for features relevant to your network",
  "First cohort of Canada Franchise Rankings participants",
  "Executive Circle founding membership",
];

export default function EarlyAccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", title: "", brand: "", email: "", locations: "", notes: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#1C2B4A] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 60% 40%, rgba(200,146,26,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-5">
              Early Access
            </div>
            <h1 className="font-display text-[64px] sm:text-[80px] text-white leading-[0.88] mb-6">
              BE FIRST.<br />BUILD WITH US.
            </h1>
            <p className="text-xl leading-relaxed text-white/55" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
              Sova is opening a limited early access cohort for Canadian franchise brands who want to shape the platform and lock in founder-level pricing before general availability.
            </p>
          </div>
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-20 bg-[#EDE9E3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — benefits */}
            <div>
              <h2 className="font-display text-[40px] text-[#1C2B4A] mb-6">
                WHAT EARLY ACCESS INCLUDES.
              </h2>
              <div className="rule-gold mb-8" />
              <div className="space-y-4">
                {BENEFITS.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={16} className="text-[#C8921A] mt-0.5 flex-shrink-0" />
                    <span className="font-sans-ui text-[14px] text-[#4A5568]">{b}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-xl border border-[#C8921A]/20 bg-[#C8921A]/05">
                <div className="font-display text-[20px] text-[#C8921A] mb-2">Limited Cohort</div>
                <p className="font-sans-ui text-[13px] text-[#4A5568]">
                  We are accepting a maximum of 25 brands into the founding cohort. Priority is given to brands with 10+ locations who are actively looking to consolidate their marketing operations.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <div className="bg-white rounded-xl p-8 border border-[rgba(28,43,74,0.08)]">
                {!submitted ? (
                  <>
                    <h3 className="font-display text-[28px] text-[#1C2B4A] mb-6">REQUEST EARLY ACCESS</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {[
                        { key: "name", label: "Full Name", type: "text", required: true },
                        { key: "title", label: "Job Title", type: "text", required: true },
                        { key: "brand", label: "Franchise Brand / Company", type: "text", required: true },
                        { key: "email", label: "Work Email", type: "email", required: true },
                      ].map(({ key, label, type, required }) => (
                        <div key={key}>
                          <label className="font-sans-ui text-[11px] font-semibold tracking-[0.1em] uppercase text-[#718096] block mb-1.5">
                            {label}
                          </label>
                          <input
                            type={type}
                            required={required}
                            value={form[key as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            className="font-sans-ui text-[14px] w-full px-4 py-2.5 rounded-sm border border-[rgba(28,43,74,0.15)] text-[#1C2B4A] focus:outline-none focus:border-[#C8921A] bg-[#FDFBF8]"
                          />
                        </div>
                      ))}
                      <div>
                        <label className="font-sans-ui text-[11px] font-semibold tracking-[0.1em] uppercase text-[#718096] block mb-1.5">
                          Number of Locations
                        </label>
                        <select
                          value={form.locations}
                          onChange={(e) => setForm({ ...form, locations: e.target.value })}
                          className="font-sans-ui text-[14px] w-full px-4 py-2.5 rounded-sm border border-[rgba(28,43,74,0.15)] text-[#1C2B4A] focus:outline-none focus:border-[#C8921A] bg-[#FDFBF8]"
                          required
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
                          What are you trying to solve? (optional)
                        </label>
                        <textarea
                          rows={3}
                          value={form.notes}
                          onChange={(e) => setForm({ ...form, notes: e.target.value })}
                          className="font-sans-ui text-[14px] w-full px-4 py-2.5 rounded-sm border border-[rgba(28,43,74,0.15)] text-[#1C2B4A] focus:outline-none focus:border-[#C8921A] bg-[#FDFBF8] resize-none"
                        />
                      </div>
                      <Button type="submit" variant="dark" size="lg" className="w-full justify-center">
                        Request Early Access <ArrowRight size={16} />
                      </Button>
                      <p className="font-sans-ui text-[11px] text-[#718096] text-center">
                        We review applications weekly and respond within 5 business days.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle size={40} className="text-[#2EA5A0] mx-auto mb-4" />
                    <h3 className="font-display text-[28px] text-[#1C2B4A] mb-3">Application Received</h3>
                    <p className="font-sans-ui text-[14px] text-[#4A5568]">
                      Thank you for your interest in early access. We&apos;ll review your application and be in touch within 5 business days.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
