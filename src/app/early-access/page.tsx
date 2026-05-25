'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const BENEFITS = [
  'Locked-in founder pricing for 24 months',
  'Priority access to new modules as they launch',
  'Direct line to the product team',
  'Co-design sessions for features relevant to your network',
  'First cohort of Canada Franchise Rankings participants',
  'Executive Circle founding membership',
];

export default function EarlyAccessPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = iframeRef.current;
    if (!frame) return;
    let src = frame.src;
    if (!(/[?&]referrername=/.test(src))) {
      let rfr = window.location.href;
      try {
        rfr = window.self !== window.top
          ? window.top!.location.href
          : (/^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr) ? rfr : '');
      } catch (e) {}
      if (rfr) {
        if (rfr.length > 1800) {
          const qi = rfr.indexOf('?');
          if (qi > -1) rfr = rfr.substring(0, qi);
          if (rfr.length > 1800) rfr = rfr.substring(0, 1800);
        }
        src += (src.indexOf('?') > 0 ? '&' : '?') + 'referrername=' + encodeURIComponent(rfr);
      }
    }
    if (frame.src !== src) frame.src = src;
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#1C2B4A] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 60% 40%, rgba(200,146,26,0.08) 0%, transparent 70%)' }}
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
                <h3 className="font-display text-[28px] text-[#1C2B4A] mb-6">REQUEST EARLY ACCESS</h3>
                <iframe
                  ref={iframeRef}
                  id="ziframe_958060"
                  aria-label="Sova Request a Demo Form"
                  style={{ height: '500px', width: '99%', border: 'none' }}
                  src="https://forms.zohopublic.ca/operationssov1/form/SovaRequestaDemoForm/formperma/EsouIeAMfuRmgDePcQDZe48-jbbE2bIcdmcqDBtMpCY"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
