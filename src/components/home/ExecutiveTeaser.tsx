"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ExecutiveTeaser() {
  return (
    <section className="py-24 bg-[#EDE9E3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
              Executive Circle
            </div>
            <h2 className="font-display text-[52px] sm:text-[60px] text-[#1C2B4A] leading-[0.92] mb-6">
              THE CIRCLE<br />THAT MOVES<br />FRANCHISING.
            </h2>
            <div className="rule-gold mb-6" />
            <p className="text-[17px] leading-relaxed text-[#4A5568] mb-4" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
              An invitation-only community for Canadian franchise executives — CMOs, VPs of Marketing, and Franchise Development leaders who shape how their brands grow.
            </p>
            <p className="text-[17px] leading-relaxed text-[#4A5568] mb-8" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
              Peer roundtables, exclusive research, and direct access to the operators building Canada's most successful franchise systems.
            </p>
            <Link
              href="/executive-circle"
              className="inline-flex items-center gap-2 font-sans-ui text-[13px] font-semibold tracking-wide text-[#C8921A] hover:text-[#B07D14] transition-colors"
            >
              Learn about the Executive Circle
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Right — card grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { n: "Peer", l: "Roundtables", detail: "Quarterly sessions with franchise CMOs across Canada" },
              { n: "Original", l: "Research", detail: "Annual State of Canadian Franchise Marketing report" },
              { n: "Curated", l: "Network", detail: "Direct relationships with operators at 200+ brands" },
              { n: "Private", l: "Briefings", detail: "Early access to platform features and market intelligence" },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-[rgba(28,43,74,0.08)]"
              >
                <div className="font-display text-[13px] text-[#C8921A] mb-0.5">{c.n}</div>
                <div className="font-display text-[22px] text-[#1C2B4A] mb-2">{c.l}</div>
                <p className="font-sans-ui text-[11px] text-[#718096] leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
