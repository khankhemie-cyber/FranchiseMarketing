"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Award, BarChart2 } from "lucide-react";

const SAMPLE_BRANDS = [
  { rank: 1, name: "Tim Hortons", category: "QSR", score: 98 },
  { rank: 2, name: "Boston Pizza", category: "Casual Dining", score: 94 },
  { rank: 3, name: "The UPS Store", category: "Business Services", score: 91 },
  { rank: 4, name: "Subway Canada", category: "QSR", score: 89 },
  { rank: 5, name: "ServiceMaster", category: "Home Services", score: 86 },
];

export function RankingsTeaser() {
  return (
    <section className="py-24 bg-[#1C2B4A] relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07]"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — preview table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.04)" }}>
              {/* Table header */}
              <div className="grid grid-cols-[40px_1fr_auto_auto] gap-4 px-5 py-3 border-b border-white/[0.08]">
                <div className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase">#</div>
                <div className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase">Brand</div>
                <div className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase">Category</div>
                <div className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase">Score</div>
              </div>

              {SAMPLE_BRANDS.map((brand, i) => (
                <motion.div
                  key={brand.rank}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="grid grid-cols-[40px_1fr_auto_auto] gap-4 px-5 py-4 border-b border-white/[0.05] items-center"
                >
                  <div className="font-display text-[22px] text-[#C8921A]">{brand.rank}</div>
                  <div className="font-sans-ui text-[14px] font-medium text-white">{brand.name}</div>
                  <div className="font-sans-ui text-[11px] text-white/40 hidden sm:block">{brand.category}</div>
                  <div className="font-sans-ui text-[13px] font-semibold text-[#C8921A]">{brand.score}</div>
                </motion.div>
              ))}

              <div className="px-5 py-4 text-center">
                <Link
                  href="/rankings"
                  className="font-sans-ui text-[12px] font-semibold text-[#C8921A] hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  View Full Rankings <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
              Canada Franchise Rankings
            </div>
            <h2 className="font-display text-[52px] sm:text-[60px] text-white leading-[0.92] mb-6">
              THE DEFINITIVE<br />RANKINGS FOR<br />CANADIAN BRANDS.
            </h2>
            <div className="w-10 h-0.5 bg-[#C8921A] mb-6" />
            <p className="text-[17px] leading-relaxed text-white/55 mb-8" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
              Sova's annual Canada Franchise Rankings evaluate 1,300+ brands on marketing sophistication, franchisee support quality, digital presence, and growth trajectory — the only ranking built by franchise marketing operators, not analysts.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: BarChart2, label: "Data-driven methodology" },
                { icon: Award, label: "Independent scoring panel" },
                { icon: TrendingUp, label: "Updated annually" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2 p-4 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <Icon size={18} className="text-[#C8921A]" />
                  <span className="font-sans-ui text-[11px] text-white/50">{label}</span>
                </div>
              ))}
            </div>

            <Link href="/rankings">
              <span className="font-sans-ui inline-flex items-center gap-2 text-[13px] font-semibold text-white border border-white/20 px-5 py-2.5 rounded-sm hover:border-[#C8921A] hover:text-[#C8921A] transition-all">
                Explore the Rankings <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
