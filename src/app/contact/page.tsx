import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C2B4A] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(46,165,160,0.08) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
            Contact
          </div>
          <h1 className="font-display text-[72px] sm:text-[96px] lg:text-[120px] text-white leading-[0.85] mb-6">
            LET'S TALK.
          </h1>
          <div className="rule-gold" />
        </div>
      </section>

      {/* Two-column body */}
      <section className="bg-[#EDE9E3] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — contact details */}
            <div>
              <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
                Get in Touch
              </div>
              <div className="rule-gold mb-10" />

              <div className="space-y-8">
                <div>
                  <div className="font-sans-ui text-[11px] font-semibold tracking-[0.15em] text-[#718096] uppercase mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:operations@sovaos.ca"
                    className="text-xl text-[#1A6478] hover:text-[#C8921A] transition-colors"
                    style={{ fontFamily: "'Constantia', Georgia, serif" }}
                  >
                    operations@sovaos.ca
                  </a>
                </div>

                <div>
                  <div className="font-sans-ui text-[11px] font-semibold tracking-[0.15em] text-[#718096] uppercase mb-2">
                    Response Time
                  </div>
                  <p
                    className="text-base text-[#4A5568]"
                    style={{ fontFamily: "'Constantia', Georgia, serif" }}
                  >
                    Monday – Friday, within one business day
                  </p>
                </div>
              </div>

              {/* Response time notice */}
              <div
                className="mt-12 p-6 bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-sm"
                style={{ borderLeft: "3px solid #C8921A" }}
              >
                <p
                  className="text-sm text-[#4A5568]"
                  style={{ fontFamily: "'Constantia', Georgia, serif" }}
                >
                  We typically respond within one business day. For urgent
                  platform support, existing clients should use the in-app
                  support channel.
                </p>
              </div>
            </div>

            {/* Right — interactive form (Client Component) */}
            <div className="bg-[#FDFBF8] border border-[rgba(28,43,74,0.08)] rounded-sm p-8 lg:p-10">
              <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-6">
                Send a Message
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
