import type { Metadata } from 'next';
import { ApplicationForm } from './ApplicationForm';
import {
  MessageSquare,
  BookOpen,
  Zap,
  Network,
  Users,
  FileText,
  Lightbulb,
} from 'lucide-react';

export const metadata: Metadata = { title: 'Executive Circle' };

const WHAT_IT_IS = [
  {
    icon: MessageSquare,
    headline: 'Real conversations',
    caption: 'Co-op governance, compliance, and vendor tension — the topics conference panels won\'t touch.',
  },
  {
    icon: Users,
    headline: 'Peer-led agenda',
    caption: 'Sessions are capped, vendor-free, and shaped entirely by members — not sponsors.',
  },
  {
    icon: Lightbulb,
    headline: 'Practical outcomes',
    caption: 'Half-day sessions across Canadian markets, four times a year, with structured follow-through.',
  },
];

const MEMBER_BENEFITS = [
  {
    icon: Users,
    stat: '4× per year',
    title: 'Peer Roundtables',
    body: 'Quarterly half-day sessions with CMOs and marketing VPs across Canadian franchise categories — no vendor pitches, Chatham House rules.',
  },
  {
    icon: BookOpen,
    stat: 'Before public release',
    title: 'Annual Research Report',
    body: 'Members receive the State of Canadian Franchise Marketing early, with the full underlying data set for benchmarking.',
  },
  {
    icon: Zap,
    stat: 'Early access',
    title: 'Private Briefings',
    body: 'First look at new Sova features and closed-door briefings with category operators — off-record, no slides.',
  },
  {
    icon: Network,
    stat: '200+ members',
    title: 'Curated Network',
    body: 'A vetted directory of franchise marketing and development executives across Canada, organized by brand and geography.',
  },
];

const QUALIFYING_ROLES = [
  "CEO / Founder",
  "COO / VP Operations",
  "CMO / VP Marketing",
  "VP Franchise Development",
  "Director of Marketing",
  "Director of Operations",
];

export default function ExecutiveCirclePage() {
  return (
    <div
      style={{ fontFamily: "'Constantia', Georgia, serif" }}
      className="min-h-screen bg-[#EDE9E3]"
    >
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#1C2B4A] pt-40 pb-28 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-6">
            Executive Circle
          </p>
          <h1 className="font-display text-[64px] sm:text-[80px] lg:text-[96px] text-white leading-[0.9] mb-8">
            WHERE CANADIAN<br />FRANCHISE LEADERS<br />THINK OUT LOUD.
          </h1>
          <div className="w-12 h-0.5 bg-[#C8921A] mb-8" />
          <p className="text-[18px] sm:text-[20px] text-white/60 leading-relaxed max-w-2xl">
            An invitation-only peer community for the executives who set strategy,
            control spend, and own the brand across Canada&rsquo;s largest franchise systems.
            Not a conference. Not a panel. A working group.
          </p>
        </div>
      </section>

      {/* ── What it is ───────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            About the Community
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-12">
            WHERE FRANCHISE<br />OPERATORS SOLVE<br />REAL PROBLEMS.
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {WHAT_IT_IS.map(({ icon: Icon, headline, caption }) => (
              <div
                key={headline}
                className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-xl p-7"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: 'rgba(200,146,26,0.1)' }}
                >
                  <Icon size={20} color="#C8921A" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-[20px] text-[#1C2B4A] leading-tight mb-2">
                  {headline.toUpperCase()}
                </h3>
                <p className="font-sans-ui text-[13px] leading-relaxed text-[#718096]">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What members get ─────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#EDE9E3]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Member Benefits
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-12">
            WHAT MEMBERSHIP<br />INCLUDES.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {MEMBER_BENEFITS.map(({ icon: Icon, stat, title, body }) => (
              <div
                key={title}
                className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-xl p-8"
              >
                <div className="flex items-start justify-between mb-5 gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(200,146,26,0.1)' }}
                  >
                    <Icon size={20} color="#C8921A" strokeWidth={1.75} />
                  </div>
                  <span
                    className="font-sans-ui text-[11px] font-bold px-3 py-1 rounded-full shrink-0"
                    style={{ background: 'rgba(28,43,74,0.07)', color: '#1C2B4A' }}
                  >
                    {stat}
                  </span>
                </div>
                <h3 className="font-display text-[26px] text-[#1C2B4A] mb-3">
                  {title.toUpperCase()}
                </h3>
                <p
                  className="text-[14px] leading-relaxed text-[#4A5568]"
                  style={{ fontFamily: "'Constantia', Georgia, serif" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who qualifies ────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-10 bg-[#1C2B4A]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
                Eligibility
              </p>
              <h2 className="font-display text-[42px] sm:text-[52px] text-white leading-[0.94] mb-6">
                WHO QUALIFIES.
              </h2>
              <div className="w-10 h-0.5 bg-[#C8921A] mb-6" />
              <p className="font-sans-ui text-[14px] text-white/55">
                Invitation only · Canadian franchise brands · 10+ locations
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {QUALIFYING_ROLES.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-2 font-sans-ui text-[13px] text-white/60"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C8921A] flex-shrink-0" />
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Application form ─────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Apply
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-4">
            REQUEST AN<br />APPLICATION.
          </h2>
          <p className="text-[15px] text-[#4A5568] mb-10">
            Submit below and the Sova team will review your application. All fields required.
          </p>
          <ApplicationForm />
        </div>
      </section>
    </div>
  );
}
