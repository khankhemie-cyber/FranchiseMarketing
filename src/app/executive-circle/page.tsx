import type { Metadata } from 'next';
import { ApplicationForm } from './ApplicationForm';

export const metadata: Metadata = { title: 'Executive Circle' };

const MEMBER_BENEFITS = [
  {
    title: 'Peer Roundtables',
    body:
      'Quarterly sessions with CMOs and marketing VPs from across Canadian franchise categories. Structured discussion on shared challenges — media buying, franchisee compliance, network-wide campaigns, digital transformation. What is said in the room stays in the room.',
  },
  {
    title: 'Annual Research Report',
    body:
      'Members receive the State of Canadian Franchise Marketing before public release, along with the underlying data set. Benchmark your brand\'s marketing maturity, spend efficiency, and digital adoption against the national peer group.',
  },
  {
    title: 'Private Briefings',
    body:
      'Early access to Sova platform features before general availability, plus closed-door briefings with category operators and supply-chain partners. Briefings are off-record and Chatham House rules apply.',
  },
  {
    title: 'Curated Network',
    body:
      'A vetted directory of 200+ franchise marketing and development executives across Canada, organized by brand category and geography. Introductions facilitated through the Sova team when appropriate.',
  },
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
            An invitation-only peer community for the executives who set strategy, control spend, and own the brand across Canada&rsquo;s largest franchise systems. Not a conference. Not a panel. A working group.
          </p>
        </div>
      </section>

      {/* ── What it is ───────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            About the Community
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-10">
            BUILT FOR THE<br />PEOPLE RUNNING<br />FRANCHISE MARKETING.
          </h2>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8 text-[17px] leading-relaxed text-[#4A5568]">
            <p>
              The Executive Circle exists because the problems facing Canadian franchise marketing leaders are distinct. National media buys, franchisee co-op governance, local-vs-brand tension, vendor selection at scale — these are not conversations that fit into a general marketing conference session. The Circle is where those conversations happen properly.
            </p>
            <p>
              Membership centres on four quarterly peer roundtables per year. Each session is hosted in a different Canadian market, with a rotating chair drawn from the membership. Sessions run half a day. Attendance is capped. No sponsors on the agenda, no vendor pitches. The only agenda is the one members set in advance.
            </p>
            <p>
              Members also receive access to Sova&rsquo;s original research program, including the annual State of Canadian Franchise Marketing report and any category-level studies produced during the year. The underlying data — drawn from franchisee surveys, platform intelligence, and public filings — is available to members before findings are published externally.
            </p>
            <p>
              Beyond formal programming, the Circle maintains a curated network of 200+ brand operators across every major franchise category in Canada. Members can request introductions through the Sova team and participate in a private digital directory updated quarterly. The relationship layer is the point.
            </p>
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
            {MEMBER_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-xl p-8"
              >
                <div className="w-8 h-0.5 bg-[#C8921A] mb-5" />
                <h3 className="font-display text-[28px] text-[#1C2B4A] mb-4">{benefit.title.toUpperCase()}</h3>
                <p className="text-[15px] leading-relaxed text-[#4A5568]">{benefit.body}</p>
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
            </div>
            <div>
              <p className="text-[17px] leading-relaxed text-white/65 mb-4">
                Membership is by invitation only. Candidates hold a marketing or franchise development leadership role at a Canadian franchise brand with 10 or more locations.
              </p>
              <p className="text-[17px] leading-relaxed text-white/65">
                Titles typically include CMO, VP of Marketing, Director of Marketing, VP of Franchise Development, or equivalent. Candidates at brands headquartered outside Canada are considered if Canadian operations represent a significant portion of the network.
              </p>
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
          <p className="text-[16px] text-[#4A5568] mb-10 leading-relaxed">
            Complete the form below and a member of the Sova team will review your submission. All fields are required.
          </p>
          <ApplicationForm />
        </div>
      </section>
    </div>
  );
}
