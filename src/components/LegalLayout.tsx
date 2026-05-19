import Link from 'next/link';

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, effectiveDate, children }: LegalLayoutProps) {
  return (
    <div style={{ background: '#EDE9E3', minHeight: '100vh', paddingTop: '5rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>
        <Link
          href="/legal"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#C8921A',
            textDecoration: 'none',
            display: 'block',
            marginBottom: '2rem',
          }}
        >
          ← LEGAL HUB
        </Link>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#C8921A',
            marginBottom: '1rem',
          }}
        >
          LEGAL
        </div>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '3.5rem',
            color: '#1C2B4A',
            lineHeight: 0.9,
            letterSpacing: '0.02em',
            marginBottom: '1rem',
          }}
        >
          {title}
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
            fontSize: '0.875rem',
            color: '#6B7280',
            marginBottom: '3rem',
          }}
        >
          Effective date: {effectiveDate}
        </p>
        <div
          style={{
            fontFamily: "'Constantia', 'Palatino Linotype', Georgia, serif",
            color: '#1C2B4A',
            lineHeight: 1.8,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
