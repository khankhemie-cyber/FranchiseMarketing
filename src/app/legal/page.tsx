import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Hub — Sova',
  description:
    'Sova legal documents including Privacy Policy, Terms of Service, Cookie Policy, Accessibility Statement, Security Practices, Communication Preferences, and Billing Policy.',
};

const legalDocs = [
  {
    href: '/legal/privacy',
    title: 'Privacy Policy',
    description:
      'How we collect, use, and protect your personal information under PIPEDA and Canadian privacy law.',
  },
  {
    href: '/legal/terms',
    title: 'Terms of Service',
    description:
      'The agreement governing your use of the Sova platform, including account terms, payment, and intellectual property.',
  },
  {
    href: '/legal/cookies',
    title: 'Cookie Policy',
    description:
      'What cookies we use, why we use them, and how to manage your preferences in accordance with CASL.',
  },
  {
    href: '/legal/accessibility',
    title: 'Accessibility Statement',
    description:
      'Our commitment to WCAG 2.1 AA conformance and how to report accessibility barriers.',
  },
  {
    href: '/legal/security',
    title: 'Security & Data Practices',
    description:
      'Our approach to data security including Canadian hosting, encryption, access controls, and incident response.',
  },
  {
    href: '/legal/communication',
    title: 'Communication Preferences',
    description:
      'How we communicate with you, types of messages we send, and how to manage or withdraw consent under CASL.',
  },
  {
    href: '/legal/billing',
    title: 'Refund & Billing Policy',
    description:
      'Subscription billing cycles, cancellation terms, and our refund policy in Canadian dollars.',
  },
];

export default function LegalHub() {
  return (
    <div style={{ background: '#EDE9E3', minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '7rem 1.5rem 6rem' }}>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#C8921A',
            marginBottom: '1rem',
          }}
        >
          SOVA
        </div>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '4rem',
            color: '#1C2B4A',
            lineHeight: 0.9,
            letterSpacing: '0.02em',
            marginBottom: '1rem',
          }}
        >
          LEGAL HUB
        </h1>
        <div
          style={{
            width: '48px',
            height: '2px',
            background: '#C8921A',
            marginBottom: '1.5rem',
          }}
        />
        <p
          style={{
            fontFamily: "'Constantia', 'Palatino Linotype', Georgia, serif",
            fontSize: '1.0625rem',
            color: '#1C2B4A',
            lineHeight: 1.7,
            marginBottom: '3.5rem',
            maxWidth: '560px',
          }}
        >
          Sova is committed to transparency, data privacy, and compliance with Canadian law.
          The documents below govern your relationship with our platform. We encourage you
          to read them fully — they are written in plain language wherever possible.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {legalDocs.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  border: '1px solid rgba(28, 43, 74, 0.15)',
                  borderRadius: '4px',
                  padding: '1.5rem 1.75rem',
                  background: 'rgba(255,255,255,0.45)',
                  transition: 'border-color 0.2s',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h2
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.25rem',
                      color: '#1C2B4A',
                      letterSpacing: '0.05em',
                      margin: 0,
                    }}
                  >
                    {doc.title}
                  </h2>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1rem',
                      color: '#C8921A',
                      letterSpacing: '0.05em',
                    }}
                  >
                    →
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Constantia', 'Palatino Linotype', Georgia, serif",
                    fontSize: '0.9375rem',
                    color: '#6B7280',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {doc.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Constantia', 'Palatino Linotype', Georgia, serif",
            fontSize: '0.875rem',
            color: '#6B7280',
            lineHeight: 1.7,
            marginTop: '3rem',
          }}
        >
          Questions about any of these documents? Contact us at{' '}
          <a href="mailto:legal@sovaos.ca" style={{ color: '#1A6478' }}>
            legal@sovaos.ca
          </a>
          .
        </p>
      </div>
    </div>
  );
}
