import type { Metadata } from 'next';
import { ReportForm } from './ReportForm';

export const metadata: Metadata = { title: 'Canada Franchise Rankings' };

const TOP_10 = [
  { rank: 1,  brand: 'Tim Hortons',           category: 'QSR',                  score: 98.4, yoy: '+0.6' },
  { rank: 2,  brand: 'Boston Pizza',           category: 'Casual Dining',        score: 94.1, yoy: '+1.2' },
  { rank: 3,  brand: 'The UPS Store',          category: 'Business Services',    score: 91.7, yoy: '+2.1' },
  { rank: 4,  brand: 'Subway Canada',          category: 'QSR',                  score: 89.5, yoy: '-0.8' },
  { rank: 5,  brand: 'ServiceMaster Clean',    category: 'Home Services',        score: 87.2, yoy: '+3.4' },
  { rank: 6,  brand: 'Anytime Fitness Canada', category: 'Fitness',              score: 85.9, yoy: '+4.7' },
  { rank: 7,  brand: 'M&M Food Market',        category: 'Specialty Retail',     score: 84.3, yoy: '+1.9' },
  { rank: 8,  brand: 'RE/MAX Canada',          category: 'Professional Services',score: 83.0, yoy: '+0.4' },
  { rank: 9,  brand: 'Greco Pizza',            category: 'QSR',                  score: 81.6, yoy: '+5.2' },
  { rank: 10, brand: 'Cora Breakfast & Lunch', category: 'Casual Dining',        score: 80.8, yoy: '+2.6' },
];

const METHODOLOGY = [
  {
    pillar: 'Marketing Sophistication',
    weight: '25%',
    description:
      'Evaluates the maturity of brand-level marketing operations: campaign planning cycles, co-op fund governance, multi-channel media deployment, creative production infrastructure, and franchisee marketing compliance rates.',
  },
  {
    pillar: 'Franchisee Support Quality',
    weight: '25%',
    description:
      'Drawn from an annual survey of active Canadian franchisees. Scores reflect satisfaction with marketing materials, local store marketing guidance, response times from the marketing team, and perceived ROI on required contributions.',
  },
  {
    pillar: 'Digital Presence & Innovation',
    weight: '25%',
    description:
      'Assesses each brand\'s digital footprint: local SEO performance by market, paid search share-of-voice, app adoption and rating, social media execution consistency across locations, and technology stack modernity.',
  },
  {
    pillar: 'Network Growth Trajectory',
    weight: '25%',
    description:
      'Measures net new locations opened over the trailing 24 months, franchisee renewal rates, average ramp time to profitability for new locations, and stated pipeline from franchise development disclosures.',
  },
];

const CATEGORY_LEADERS = [
  { category: 'QSR',                   brand: 'Tim Hortons',            score: 98.4 },
  { category: 'Retail',                brand: 'M&M Food Market',        score: 84.3 },
  { category: 'Home Services',         brand: 'ServiceMaster Clean',    score: 87.2 },
  { category: 'Fitness',               brand: 'Anytime Fitness Canada', score: 85.9 },
  { category: 'Professional Services', brand: 'RE/MAX Canada',          score: 83.0 },
];

export default function RankingsPage() {
  return (
    <div
      style={{ fontFamily: "'Constantia', Georgia, serif" }}
      className="min-h-screen bg-[#EDE9E3]"
    >
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#EDE9E3] pt-40 pb-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-6">
            Canada Franchise Rankings
          </p>
          <h1 className="font-display text-[64px] sm:text-[80px] lg:text-[96px] text-[#1C2B4A] leading-[0.9] mb-8">
            THE DEFINITIVE<br />RANKING FOR<br />CANADIAN<br />FRANCHISE BRANDS.
          </h1>
          <div className="w-12 h-0.5 bg-[#C8921A] mb-8" />
          <p className="text-[18px] sm:text-[20px] text-[#4A5568] leading-relaxed max-w-2xl">
            Sova evaluates Canadian franchise brands on four equally weighted pillars — marketing sophistication, franchisee support, digital presence, and growth trajectory. Updated annually each spring.
          </p>
        </div>
      </section>

      {/* ── Methodology ──────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#1C2B4A]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Methodology
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-white leading-[0.94] mb-4">
            HOW BRANDS<br />ARE SCORED.
          </h2>
          <p className="text-[16px] text-white/55 mb-12 max-w-2xl leading-relaxed">
            Each brand receives a composite score out of 100, drawn from four equally weighted pillars. No pillar can be waived; brands without sufficient data in a category receive a provisional score pending outreach.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {METHODOLOGY.map((m) => (
              <div
                key={m.pillar}
                className="rounded-xl p-8 border border-white/[0.07]"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex items-start justify-between mb-5 gap-4">
                  <h3 className="font-display text-[22px] text-white leading-tight">{m.pillar.toUpperCase()}</h3>
                  <span className="font-sans-ui text-[13px] font-semibold text-[#C8921A] shrink-0">{m.weight}</span>
                </div>
                <p className="text-[14px] leading-relaxed text-white/55">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top 10 table ─────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            2025 Rankings
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-12">
            TOP 10 BRANDS.
          </h2>

          <div className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[48px_1fr_160px_80px_80px] gap-4 px-6 py-3 border-b border-[rgba(28,43,74,0.08)]">
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase">Rank</span>
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase">Brand</span>
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase hidden md:block">Category</span>
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase text-right">Score</span>
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase text-right hidden sm:block">YoY</span>
            </div>

            {TOP_10.map((row, i) => {
              const isPositive = row.yoy.startsWith('+');
              const yoyColor = isPositive ? 'text-[#1A6478]' : 'text-[#D84F18]';
              return (
                <div
                  key={row.rank}
                  className={`grid grid-cols-[48px_1fr_160px_80px_80px] gap-4 px-6 py-4 items-center ${i < TOP_10.length - 1 ? 'border-b border-[rgba(28,43,74,0.05)]' : ''}`}
                >
                  <span className="font-display text-[24px] text-[#C8921A]">{row.rank}</span>
                  <span className="font-sans-ui text-[14px] font-medium text-[#1C2B4A]">{row.brand}</span>
                  <span className="font-sans-ui text-[12px] text-[#718096] hidden md:block">{row.category}</span>
                  <span className="font-sans-ui text-[13px] font-semibold text-[#1C2B4A] text-right">{row.score}</span>
                  <span className={`font-sans-ui text-[12px] font-semibold text-right hidden sm:block ${yoyColor}`}>{row.yoy}</span>
                </div>
              );
            })}
          </div>

          <p className="font-sans-ui text-[11px] text-[#718096] mt-4">
            Rankings are compiled annually from public data, franchisee surveys, and platform intelligence. Brands may request a methodology review.
          </p>
        </div>
      </section>

      {/* ── Category leaders ─────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#EDE9E3]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Category Leaders
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-12">
            NO. 1 BY<br />CATEGORY.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORY_LEADERS.map((leader) => (
              <div
                key={leader.category}
                className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-xl p-7"
              >
                <p className="font-sans-ui text-[10px] font-semibold tracking-[0.18em] text-[#C8921A] uppercase mb-3">
                  {leader.category}
                </p>
                <p className="font-display text-[26px] text-[#1C2B4A] leading-tight mb-2">
                  {leader.brand.toUpperCase()}
                </p>
                <p className="font-sans-ui text-[12px] text-[#718096]">
                  Score: <span className="font-semibold text-[#1C2B4A]">{leader.score}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Report CTA ───────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Full Report
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-4">
            GET THE COMPLETE<br />2025 RANKINGS.
          </h2>
          <p className="text-[16px] text-[#4A5568] leading-relaxed mb-10">
            The full report covers all 1,300+ ranked brands, category breakdowns, provincial comparisons, and trend analysis from the prior three years. Enter your work email to receive a copy.
          </p>
          <ReportForm />
        </div>
      </section>
    </div>
  );
}
