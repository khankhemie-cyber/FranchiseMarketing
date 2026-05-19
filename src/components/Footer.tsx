import Link from "next/link";

const LINKS = {
  Platform: [
    { label: "Overview", href: "/platform" },
    { label: "Campaign Engine", href: "/platform#campaigns" },
    { label: "Network Analytics", href: "/platform#analytics" },
    { label: "Vendor Marketplace", href: "/platform#vendors" },
    { label: "AI Intelligence", href: "/platform#ai" },
  ],
  Solutions: [
    { label: "For Head Office", href: "/solutions#head-office" },
    { label: "For Franchisees", href: "/solutions#franchisees" },
    { label: "For Field Managers", href: "/solutions#field" },
    { label: "By Industry", href: "/solutions#industry" },
  ],
  Company: [
    { label: "About Sova", href: "/about" },
    { label: "Executive Circle", href: "/executive-circle" },
    { label: "Canada Franchise Rankings", href: "/rankings" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Legal Hub", href: "/legal" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Accessibility", href: "/legal/accessibility" },
    { label: "Security", href: "/legal/security" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1C2B4A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <img src="/sova-logo.png" alt="Sova" className="h-10 w-auto" />
            </Link>
            <p className="text-[13px] leading-relaxed text-white/50 mb-6" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
              The platform Canadian franchise brands trust to grow with confidence.
            </p>
            <Link href="/demo">
              <span className="font-sans-ui inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C8921A] border border-[#C8921A]/30 px-4 py-2.5 rounded-sm hover:bg-[#C8921A]/10 transition-colors">
                BOOK A DEMO →
              </span>
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <div className="font-display text-[11px] tracking-[0.2em] text-white/30 mb-5">
                {heading.toUpperCase()}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans-ui text-[13px] text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans-ui text-xs text-white/30">
            © {new Date().getFullYear()} Sova Technologies Inc. All rights reserved. Toronto, Ontario · Canada
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="font-sans-ui text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="font-sans-ui text-xs text-white/30 hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/legal/cookies" className="font-sans-ui text-xs text-white/30 hover:text-white/60 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
