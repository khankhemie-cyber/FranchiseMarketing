import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy — Sova',
  description:
    'How Sova uses cookies and similar technologies, and how to manage your preferences.',
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: '1.5rem',
  color: '#1C2B4A',
  letterSpacing: '0.05em',
  marginTop: '2.5rem',
  marginBottom: '0.75rem',
};

const pStyle: React.CSSProperties = {
  marginBottom: '1rem',
  fontSize: '1rem',
};

const ulStyle: React.CSSProperties = {
  marginBottom: '1rem',
  paddingLeft: '1.5rem',
};

const liStyle: React.CSSProperties = {
  marginBottom: '0.5rem',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '1.5rem',
  fontSize: '0.9375rem',
};

const thStyle: React.CSSProperties = {
  fontFamily: "'Bebas Neue', sans-serif",
  letterSpacing: '0.05em',
  fontSize: '0.875rem',
  color: '#1C2B4A',
  textAlign: 'left',
  padding: '0.5rem 0.75rem',
  borderBottom: '2px solid #C8921A',
};

const tdStyle: React.CSSProperties = {
  padding: '0.5rem 0.75rem',
  borderBottom: '1px solid rgba(28, 43, 74, 0.1)',
  verticalAlign: 'top',
};

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" effectiveDate="May 1, 2025">
      <p style={pStyle}>
        This Cookie Policy explains how Sova Technologies Inc. (&ldquo;Sova,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo;
        or &ldquo;us&rdquo;) uses cookies and similar tracking technologies on our website (sovaos.ca) and
        platform. It should be read alongside our Privacy Policy.
      </p>
      <p style={pStyle}>
        Our use of cookies is consistent with the requirements of the <em>Canada Anti-Spam
        Legislation</em> (CASL) and PIPEDA. Where cookies involve the collection of personal
        information, we rely on your consent or legitimate interest as the applicable legal basis.
      </p>

      <h2 style={h2Style}>1. What Are Cookies?</h2>
      <p style={pStyle}>
        Cookies are small text files that a website or application places on your device when
        you visit. They allow the site to remember your actions and preferences over a period
        of time, so you do not have to re-enter information each time you return or navigate
        between pages.
      </p>
      <p style={pStyle}>
        Similar technologies include web beacons (clear GIFs), local storage, and session
        storage. For simplicity, we refer to all of these collectively as &ldquo;cookies&rdquo; throughout
        this policy.
      </p>

      <h2 style={h2Style}>2. Types of Cookies We Use</h2>
      <p style={pStyle}>
        We use the following categories of cookies:
      </p>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Purpose</th>
            <th style={thStyle}>Consent Required?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Essential</strong></td>
            <td style={tdStyle}>
              Required for core platform functionality, including authentication, session
              management, security tokens, and load balancing. The platform cannot function
              properly without these cookies.
            </td>
            <td style={tdStyle}>No — technically necessary</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Preferences</strong></td>
            <td style={tdStyle}>
              Remember your settings and customizations, such as language preference,
              dashboard layout, and notification preferences, so they persist across sessions.
            </td>
            <td style={tdStyle}>Yes</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Analytics</strong></td>
            <td style={tdStyle}>
              Help us understand how users interact with the platform — which features are
              used, where users encounter friction, and how to improve the experience.
              Analytics data is aggregated and does not identify individual users where possible.
            </td>
            <td style={tdStyle}>Yes</td>
          </tr>
        </tbody>
      </table>

      <h2 style={h2Style}>3. Essential Cookies</h2>
      <p style={pStyle}>
        Essential cookies are set automatically when you access the platform and are strictly
        necessary for the Services to operate. They include:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Session cookies:</strong> Temporary cookies that expire when you close your
          browser, used to maintain your authenticated session.
        </li>
        <li style={liStyle}>
          <strong>Security cookies:</strong> Help detect and prevent malicious activity,
          including CSRF protection tokens.
        </li>
        <li style={liStyle}>
          <strong>Load balancing cookies:</strong> Ensure your requests are consistently
          directed to the same server during a session.
        </li>
      </ul>
      <p style={pStyle}>
        Because these cookies are necessary for the platform to function, they cannot be
        disabled without affecting your ability to use the Services.
      </p>

      <h2 style={h2Style}>4. Preference Cookies</h2>
      <p style={pStyle}>
        Preference cookies allow the platform to remember choices you have made, such as your
        dashboard configuration, selected franchise locations, report filters, and notification
        settings. These cookies make the platform more convenient and personalized to your
        workflow.
      </p>
      <p style={pStyle}>
        You may clear preference cookies at any time through your browser settings, though
        this will reset your stored preferences to defaults.
      </p>

      <h2 style={h2Style}>5. Analytics Cookies</h2>
      <p style={pStyle}>
        We use analytics tools to measure and understand how the platform and marketing site
        are used. Analytics cookies help us:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>Identify which features are most and least used.</li>
        <li style={liStyle}>Understand user navigation paths and identify drop-off points.</li>
        <li style={liStyle}>Measure the effectiveness of onboarding flows and new feature releases.</li>
        <li style={liStyle}>Detect performance issues and errors.</li>
      </ul>
      <p style={pStyle}>
        Where possible, analytics data is aggregated or pseudonymized. We do not use analytics
        cookies to build individual advertising profiles or sell data to third-party marketers.
      </p>
      <p style={pStyle}>
        Third-party analytics providers we may use include services such as Segment, Mixpanel,
        or similar tools. These providers are bound by data processing agreements and are
        prohibited from using your information for their own purposes.
      </p>

      <h2 style={h2Style}>6. No Third-Party Advertising Cookies</h2>
      <p style={pStyle}>
        Sova does not currently place third-party advertising or behavioural targeting cookies
        on the platform. We do not work with advertising networks to track your browsing
        activity across other websites for the purpose of serving you targeted advertisements.
      </p>
      <p style={pStyle}>
        If this changes in the future, we will update this policy and seek your consent as
        required under applicable law before placing any such cookies.
      </p>

      <h2 style={h2Style}>7. How to Manage Cookies</h2>
      <p style={pStyle}>
        You have several options for managing cookies:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Platform consent settings:</strong> When you first visit our marketing site,
          you will be presented with a cookie consent banner where you can accept or decline
          non-essential cookies. You can update your preferences at any time via the
          &ldquo;Cookie Settings&rdquo; link in the site footer.
        </li>
        <li style={liStyle}>
          <strong>Browser settings:</strong> Most browsers allow you to control cookies through
          their settings, including blocking or deleting cookies. Note that disabling cookies
          may affect the functionality of the platform. Refer to your browser&rsquo;s help
          documentation for instructions.
        </li>
        <li style={liStyle}>
          <strong>Opt-out tools:</strong> For analytics providers that offer opt-out mechanisms
          (such as browser plugins), you may use those tools directly.
        </li>
      </ul>

      <h2 style={h2Style}>8. Cookie Retention Periods</h2>
      <p style={pStyle}>
        Session cookies are deleted when you close your browser. Persistent cookies remain on
        your device for a set duration:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>Preference cookies: up to 12 months.</li>
        <li style={liStyle}>Analytics cookies: typically 13 months, consistent with industry standards.</li>
      </ul>
      <p style={pStyle}>
        Exact retention periods may vary by cookie and provider. We review our cookie usage
        periodically and remove cookies that are no longer necessary.
      </p>

      <h2 style={h2Style}>9. Updates to This Policy</h2>
      <p style={pStyle}>
        We may update this Cookie Policy as our technology and legal obligations evolve. Material
        changes will be communicated via the platform or by email. The effective date at the top
        of this document will be updated accordingly.
      </p>

      <h2 style={h2Style}>10. Contact Us</h2>
      <p style={pStyle}>
        If you have questions about our use of cookies, please contact our Privacy Officer at{' '}
        <a href="mailto:privacy@sovaos.ca" style={{ color: '#1A6478' }}>
          privacy@sovaos.ca
        </a>
        .
      </p>
    </LegalLayout>
  );
}
