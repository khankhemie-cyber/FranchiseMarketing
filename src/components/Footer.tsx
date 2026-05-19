export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#080C18] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-7 h-7">
                  <defs>
                    <linearGradient id="footOwlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C89520" />
                      <stop offset="100%" stopColor="#E0AB30" />
                    </linearGradient>
                  </defs>
                  <path d="M5 16 C10 8, 17 14, 14 20 C11 14, 7 13, 5 16Z" fill="url(#footOwlGrad)" />
                  <path d="M35 16 C30 8, 23 14, 26 20 C29 14, 33 13, 35 16Z" fill="url(#footOwlGrad)" />
                  <circle cx="14" cy="22" r="5.5" fill="none" stroke="url(#footOwlGrad)" strokeWidth="1.8" />
                  <circle cx="26" cy="22" r="5.5" fill="none" stroke="url(#footOwlGrad)" strokeWidth="1.8" />
                  <path d="M14 28 L20 32 L26 28" fill="none" stroke="url(#footOwlGrad)" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <span
                className="text-lg font-bold tracking-[0.15em] text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                SOVA
              </span>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
              The operating system for Canadian franchise growth. One platform. Eight modules. Built for Canadian brands.
            </p>
            <div className="text-xs text-[#4B5563] font-medium tracking-wider uppercase">
              Toronto, Ontario · Canada
            </div>
          </div>

          {/* Links */}
          {[
            {
              heading: "Platform",
              links: ["Campaign Engine", "Paid Media", "Geofencing", "Influencer Marketplace", "Vendor Marketplace", "Analytics", "AI Layer"],
            },
            {
              heading: "Company",
              links: ["About", "Pilot Program", "Case Studies", "CFA Partnership", "Careers"],
            },
            {
              heading: "Resources",
              links: ["Canadian Franchise Report", "GTM Playbook", "Pricing Guide", "Documentation", "Contact"],
            },
          ].map((col) => (
            <div key={col.heading}>
              <div className="text-xs font-bold tracking-widest text-[#C89520] uppercase mb-4">{col.heading}</div>
              <div className="space-y-2.5">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm text-[#6B7280] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#4B5563]">
            © 2025 Sova. All rights reserved. · Confidential — Internal Use Only.
          </div>
          <div className="flex items-center gap-6 text-xs text-[#4B5563]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
