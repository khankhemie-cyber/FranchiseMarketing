import type { Metadata } from 'next';
import { BookingCTA } from './BookingCTA';

export const metadata: Metadata = { title: 'Pricing' };

const TIERS = [
  {
    name: 'Starter',
    tagline: 'For brands with up to 25 locations.',
    price: '$799',
    period: '/mo CAD',
    note: null,
    popular: false,
    cta: 'Get Started',
    ctaHref: '/demo',
    features: [
      'Campaign Engine',
      'Network Analytics (basic)',
      'Vendor Marketplace access',
      'Up to 25 locations',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    tagline: 'For brands with 26–100 locations.',
    price: '$2,200',
    period: '/mo CAD',
    note: null,
    popular: true,
    cta: 'Book a Demo',
    ctaHref: '/demo',
    features: [
      'Everything in Starter',
      'Paid Media module',
      'Geofencing',
      'Content Studio',
      'AI Insights (standard)',
      'Phone & email support',
      'Dedicated onboarding',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For networks with 100+ locations.',
    price: 'Custom',
    period: ' pricing',
    note: 'Contact us for a tailored quote.',
    popular: false,
    cta: 'Contact Sales',
    ctaHref: '/demo',
    features: [
      'All modules',
      'Custom AI models',
      'API access',
      'Dedicated franchise success manager',
      'SLA guarantees',
      'Custom contract terms',
    ],
  },
];

const FAQS = [
  {
    q: "What's included in setup?",
    a: "All plans include a structured onboarding process covering platform configuration, location data import, and brand asset setup. Growth plans include a dedicated onboarding manager for the first 60 days. Enterprise onboarding is scoped as part of the contract.",
  },
  {
    q: "Can franchisees have their own logins?",
    a: "Yes. Each location can have its own franchisee-facing login with permissions set by the brand. Franchisees can access local reporting, submit creative requests, and run approved local campaigns — within boundaries the brand controls.",
  },
  {
    q: "Is there a minimum contract term?",
    a: "Starter plans are available month-to-month. Growth plans require a 12-month commitment. Enterprise terms are negotiated per contract and typically run 24 months with defined renewal options.",
  },
  {
    q: "Do you offer trials?",
    a: "We do not offer self-serve free trials. Instead, we offer a structured 30-day pilot for qualified Growth and Enterprise prospects, with full platform access and support. Book a demo to determine eligibility.",
  },
  {
    q: "How are locations counted?",
    a: "A location is any distinct operating unit within your franchise network — a physical store, a service territory, or a licensed outlet. Corporate-owned and franchisee-owned locations are counted equally. Temporary or seasonal locations are counted if they are active for more than 90 consecutive days.",
  },
  {
    q: "Can pricing scale mid-year if we open new locations?",
    a: "Yes. If your network grows past a plan's location threshold during a contract term, your plan will be upgraded at the next billing cycle. Prorated credits are applied when applicable. You will not be charged retroactively.",
  },
];

export default function PricingPage() {
  return (
    <div
      style={{ fontFamily: "'Constantia', Georgia, serif" }}
      className="min-h-screen bg-[#EDE9E3]"
    >
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#1C2B4A] pt-40 pb-24 px-6 lg:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] text-[#C8921A] uppercase mb-6">
            Pricing
          </p>
          <h1 className="font-display text-[60px] sm:text-[76px] lg:text-[92px] text-white leading-[0.9] mb-8">
            TRANSPARENT PRICING.<br />SCALABLE BY NETWORK.
          </h1>
          <div className="w-12 h-0.5 bg-[#C8921A] mx-auto mb-8" />
          <p className="text-[18px] sm:text-[20px] text-white/60 leading-relaxed max-w-2xl mx-auto">
            Three plans built around network size. No hidden fees. All prices in CAD. HST not included.
          </p>
        </div>
      </section>

      {/* ── Pricing tiers ────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-[#FDFBF8] rounded-xl flex flex-col ${
                  tier.popular
                    ? 'border-2 border-[#C8921A] shadow-[0_8px_40px_rgba(200,146,26,0.15)]'
                    : 'border border-[rgba(28,43,74,0.1)]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-px left-6 right-6 h-0.5 bg-[#C8921A]" />
                )}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-white bg-[#C8921A] px-3 py-1 rounded-full uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Header */}
                  <div className="mb-6">
                    <p className="font-display text-[32px] text-[#1C2B4A] mb-1">{tier.name.toUpperCase()}</p>
                    <p className="font-sans-ui text-[13px] text-[#718096]">{tier.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b border-[rgba(28,43,74,0.08)]">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-[52px] text-[#1C2B4A] leading-none">{tier.price}</span>
                      <span className="font-sans-ui text-[14px] text-[#718096]">{tier.period}</span>
                    </div>
                    {tier.note && (
                      <p className="font-sans-ui text-[12px] text-[#718096] mt-2">{tier.note}</p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: 'rgba(200,146,26,0.12)' }}
                        >
                          <span className="block w-1.5 h-1.5 rounded-full bg-[#C8921A]" />
                        </span>
                        <span className="font-sans-ui text-[14px] text-[#4A5568]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={tier.ctaHref}
                    className={`font-sans-ui text-sm font-semibold tracking-wide text-center px-6 py-3 rounded-sm transition-all active:scale-[0.98] block ${
                      tier.popular
                        ? 'bg-[#C8921A] text-white hover:bg-[#B07D14]'
                        : 'bg-[#1C2B4A] text-white hover:bg-[#263d6b]'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans-ui text-[12px] text-[#718096] text-center mt-6">
            All prices in Canadian dollars (CAD). HST not included.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#EDE9E3]">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Frequently Asked
          </p>
          <h2 className="font-display text-[42px] sm:text-[52px] text-[#1C2B4A] leading-[0.94] mb-12">
            COMMON<br />QUESTIONS.
          </h2>

          <div className="space-y-0 divide-y divide-[rgba(28,43,74,0.08)]">
            {FAQS.map((faq) => (
              <div key={faq.q} className="py-7">
                <h3 className="font-sans-ui text-[15px] font-semibold text-[#1C2B4A] mb-3">{faq.q}</h3>
                <p className="text-[15px] leading-relaxed text-[#4A5568]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-10 bg-[#1C2B4A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-[42px] sm:text-[52px] text-white leading-[0.94] mb-6">
            NOT SURE WHICH<br />PLAN FITS?
          </h2>
          <p className="text-[17px] text-white/60 leading-relaxed mb-10">
            Book a 15-minute call with a Sova team member. We&rsquo;ll ask about your network, walk through the platform, and recommend a starting point — no commitment required.
          </p>
          <BookingCTA />
        </div>
      </section>
    </div>
  );
}
