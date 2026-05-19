export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#080C18] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/sova-logo.png" alt="Sova" className="h-10 w-auto" />
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
