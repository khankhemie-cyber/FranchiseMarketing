import type { Metadata } from 'next';
import { ReportForm } from './ReportForm';
import {
  BarChart2,
  Users,
  Smartphone,
  TrendingUp,
  Utensils,
  ShoppingBag,
  Home,
  Dumbbell,
  Briefcase,
} from 'lucide-react';

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
    icon: BarChart2,
    pillar: 'Marketing Sophistication',
    weight: '25%',
    description: 'Campaign planning, co-op governance, multi-channel deployment, and franchisee compliance rates.',
  },
  {
    icon: Users,
    pillar: 'Franchisee Support Quality',
    weight: '25%',
    description: 'Annual franchisee survey: satisfaction with materials, guidance, response times, and perceived ROI.',
  },
  {
    icon: Smartphone,
    pillar: 'Digital Presence & Innovation',
    weight: '25%',
    description: 'Local SEO, paid search share-of-voice, app adoption, social consistency, and tech stack modernity.',
  },
  {
    icon: TrendingUp,
    pillar: 'Network Growth Trajectory',
    weight: '25%',
    description: 'Net new locations (trailing 24 months), renewal rates, ramp time, and development pipeline.',
  },
];

const CATEGORY_LEADERS = [
  { icon: Utensils,   category: 'QSR',                   brand: 'Tim Hortons',            score: 98.4 },
  { icon: ShoppingBag, category: 'Retail',               brand: 'M&M Food Market',        score: 84.3 },
  { icon: Home,       category: 'Home Services',          brand: 'ServiceMaster Clean',    score: 87.2 },
  { icon: Dumbbell,   category: 'Fitness',                brand: 'Anytime Fitness Canada', score: 85.9 },
  { icon: Briefcase,  category: 'Professional Services',  brand: 'RE/MAX Canada',          score: 83.0 },
];

export default function RankingsPage() {
  return (
    <div
      style={{ fontFamily: "'Constantia', Georgia, serif" }}
      className="min-h-screen bg-[#EDE9E3]"
    >
      <section className="relative overflow-hidden bg-[#EDE9E3] pt-40 pb-24 px-6 lg:px-10">
        <img src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1920&q=80" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(237,233,227,0.92)" }} />
        <div className="relative max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-6">
            Canada Franchise Rankings
          </p>
          <h1 className="font-display text-[64px] sm:text-[80px] lg:text-[96px] text-[#1C2B4A] leading-[0.9] mb-8">
            THE DEFINITIVE<br />RANKING FOR<br />CANADIAN<br />FRANCHISE BRANDS.
          </h1>
          <div className="w-12 h-0.5 bg-[#C8921A] mb-8" />
          <div className="flex flex-wrap gap-6">
            {[
              { stat: '1,300+', label: 'Brands ranked' },
              { stat: '4',      label: 'Weighted pillars' },
              { stat: 'Annual', label: 'Updated each spring' },
            ].map(({ stat, label }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-display text-[32px] text-[#C8921A]">{stat}</span>
                <span className="font-sans-ui text-[13px] text-[#718096]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 px-6 lg:px-10 bg-[#1C2B4A]">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
        <div className="relative max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Methodology
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-white leading-[0.94] mb-14">
            HOW BRANDS<br />ARE SCORED.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {METHODOLOGY.map(({ icon: Icon, pillar, weight, description }) => (
              <div
                key={pillar}
                className="rounded-xl p-8 border border-white/[0.07] flex flex-col gap-5"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(200,146,26,0.15)' }}
                  >
                    <Icon size={20} color="#C8921A" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-[20px] text-white leading-tight flex-1">
                    {pillar.toUpperCase()}
                  </h3>
                  <span
                    className="font-sans-ui text-[13px] font-bold shrink-0 px-3 py-1 rounded-full"
                    style={{ background: 'rgba(200,146,26,0.18)', color: '#C8921A' }}
                  >
                    {weight}
                  </span>
                </div>
                <p className="font-sans-ui text-[13px] leading-relaxed text-white/55">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            2025 Rankings
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-12">
            TOP 10 BRANDS.
          </h2>

          <div className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[48px_1fr_72px] sm:grid-cols-[48px_1fr_72px_72px] md:grid-cols-[48px_1fr_160px_72px_72px] gap-3 px-6 py-3 bg-[#EDE9E3] border-b border-[rgba(28,43,74,0.08)]">
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase">Rank</span>
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase">Brand</span>
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase hidden md:block">Category</span>
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase text-right">Score</span>
              <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-[#718096] uppercase text-right hidden sm:block">YoY</span>
            </div>

            {TOP_10.map((row, i) => {
              const isPositive = row.yoy.startsWith('+');
              const yoyColor = isPositive ? 'text-[#1A6478]' : 'text-[#D84F18]';
              const isEven = i % 2 === 0;
              return (
                <div
                  key={row.rank}
                  className={`grid grid-cols-[48px_1fr_72px] sm:grid-cols-[48px_1fr_72px_72px] md:grid-cols-[48px_1fr_160px_72px_72px] gap-3 px-6 py-4 items-center transition-colors hover:bg-[rgba(28,43,74,0.03)] ${
                    i < TOP_10.length - 1 ? 'border-b border-[rgba(28,43,74,0.05)]' : ''
                  } ${isEven ? '' : 'bg-[rgba(28,43,74,0.015)]'}`}
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

      <section className="py-24 px-6 lg:px-10 bg-[#EDE9E3]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Category Leaders
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-10">
            NO. 1 BY CATEGORY.
          </h2>

          <div className="flex flex-wrap gap-4">
            {CATEGORY_LEADERS.map(({ icon: Icon, category, brand, score }) => (
              <div
                key={category}
                className="flex items-center gap-3 bg-[#FDFBF8] border border-[rgba(28,43,74,0.1)] rounded-full px-5 py-3 hover:border-[#C8921A] transition-colors"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(200,146,26,0.12)' }}
                >
                  <Icon size={14} color="#C8921A" strokeWidth={2} />
                </div>
                <div>
                  <span className="font-sans-ui text-[10px] font-semibold tracking-[0.12em] text-[#718096] uppercase block leading-tight">
                    {category}
                  </span>
                  <span className="font-sans-ui text-[13px] font-semibold text-[#1C2B4A] leading-tight">
                    {brand}
                  </span>
                </div>
                <span
                  className="font-sans-ui text-[11px] font-bold ml-1 px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(28,43,74,0.07)', color: '#1C2B4A' }}
                >
                  {score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Full Report
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-4">
            GET THE COMPLETE<br />2025 RANKINGS.
          </h2>
          <p className="font-sans-ui text-[14px] text-[#718096] mb-2">
            1,300+ brands · Category breakdowns · Provincial comparisons · 3-year trends
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-10">
            Enter your work email to receive the full report.
          </p>
          <ReportForm />
        </div>
      </section>
    </div>
  );
}
