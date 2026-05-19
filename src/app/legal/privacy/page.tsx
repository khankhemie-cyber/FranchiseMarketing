import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — Sova',
  description:
    'How Sova collects, uses, and protects your personal information under PIPEDA and Canadian privacy law.',
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

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="May 1, 2025">
      <p style={pStyle}>
        Sova Technologies Inc. (&ldquo;Sova,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates
        sovaos.ca and the Sova platform (collectively, the &ldquo;Services&rdquo;). This Privacy Policy
        explains how we collect, use, disclose, and safeguard personal information in accordance
        with the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA)
        and applicable provincial privacy legislation.
      </p>
      <p style={pStyle}>
        By accessing or using our Services, you acknowledge that you have read, understood, and
        agree to the practices described in this policy. If you do not agree, please discontinue
        use of the Services.
      </p>

      <h2 style={h2Style}>1. What We Collect</h2>
      <p style={pStyle}>
        We collect personal information that is necessary to provide and improve our Services.
        This includes:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Account information:</strong> Name, business email address, job title, company
          name, and phone number provided during registration or onboarding.
        </li>
        <li style={liStyle}>
          <strong>Billing information:</strong> Payment card details (processed and tokenized
          by our PCI-DSS compliant payment processor; we do not store raw card numbers), billing
          address, and transaction history.
        </li>
        <li style={liStyle}>
          <strong>Platform usage data:</strong> Feature interactions, campaign data, report
          configurations, and other information you input while using the platform.
        </li>
        <li style={liStyle}>
          <strong>Technical data:</strong> IP address, browser type, device identifiers,
          operating system, referring URLs, and session data collected automatically via
          cookies and server logs.
        </li>
        <li style={liStyle}>
          <strong>Communications:</strong> Content of support requests, feedback submissions,
          and correspondence with our team.
        </li>
      </ul>
      <p style={pStyle}>
        We do not knowingly collect personal information from individuals under the age of 18.
        Our Services are intended solely for business use by authorized representatives of
        franchise organizations.
      </p>

      <h2 style={h2Style}>2. How We Use Your Information</h2>
      <p style={pStyle}>
        We use the personal information we collect for the following purposes, with your
        knowledge and consent where required by law:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          Provisioning, maintaining, and improving the Sova platform and its features.
        </li>
        <li style={liStyle}>
          Processing payments and managing subscription accounts.
        </li>
        <li style={liStyle}>
          Sending transactional communications, including account confirmations, billing
          receipts, and service notifications. These are necessary for the performance of
          our contract and cannot be opted out of while your account is active.
        </li>
        <li style={liStyle}>
          Sending marketing and promotional communications, where you have provided express
          or implied consent in accordance with the <em>Canada Anti-Spam Legislation</em> (CASL).
          You may withdraw consent at any time.
        </li>
        <li style={liStyle}>
          Conducting product analytics and research to understand usage patterns and
          improve the user experience.
        </li>
        <li style={liStyle}>
          Responding to support requests, inquiries, and feedback.
        </li>
        <li style={liStyle}>
          Complying with legal obligations, enforcing our Terms of Service, and protecting
          the rights and safety of Sova and its users.
        </li>
      </ul>
      <p style={pStyle}>
        We do not sell your personal information to third parties. We do not use your data
        for behavioural advertising purposes beyond the scope described in this policy.
      </p>

      <h2 style={h2Style}>3. Disclosure to Third Parties</h2>
      <p style={pStyle}>
        We may share personal information with the following categories of third parties,
        solely as necessary to operate our Services:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Service providers:</strong> Cloud hosting, payment processing, email
          delivery, analytics, and customer support tools that process data on our behalf
          under confidentiality agreements and data processing agreements.
        </li>
        <li style={liStyle}>
          <strong>Professional advisors:</strong> Legal counsel, auditors, and accountants,
          subject to professional confidentiality obligations.
        </li>
        <li style={liStyle}>
          <strong>Law enforcement or regulators:</strong> Where we are required to do so by
          applicable law, court order, or governmental authority.
        </li>
        <li style={liStyle}>
          <strong>Business transfers:</strong> In the event of a merger, acquisition, or sale
          of assets, your information may be transferred as part of that transaction. We will
          notify you before your data is subject to a different privacy policy.
        </li>
      </ul>
      <p style={pStyle}>
        Some of our service providers may be located outside Canada, including in the United
        States. Where personal information is transferred internationally, we take steps to
        ensure it receives comparable protection, including through contractual safeguards.
      </p>

      <h2 style={h2Style}>4. Data Storage & Security</h2>
      <p style={pStyle}>
        Sova stores the primary instance of your data on servers located in Canada. We use
        commercially reasonable administrative, technical, and physical safeguards to protect
        personal information against unauthorized access, disclosure, alteration, and
        destruction, including:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>TLS encryption for all data in transit.</li>
        <li style={liStyle}>Encryption at rest for stored data and backups.</li>
        <li style={liStyle}>Role-based access controls limiting employee access to personal data.</li>
        <li style={liStyle}>Regular security assessments and vulnerability reviews.</li>
      </ul>
      <p style={pStyle}>
        No method of transmission or storage is completely secure. While we strive to protect
        your information, we cannot guarantee absolute security and encourage you to use
        strong, unique passwords and enable multi-factor authentication on your account.
      </p>
      <p style={pStyle}>
        We retain personal information for as long as necessary to fulfill the purposes for
        which it was collected, to provide the Services, and to comply with legal obligations.
        Upon account termination, we will delete or anonymize personal information within
        90 days, unless a longer retention period is required by law.
      </p>

      <h2 style={h2Style}>5. Your Privacy Rights</h2>
      <p style={pStyle}>
        Under PIPEDA, you have the right to:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Access:</strong> Request a copy of the personal information we hold about you.
        </li>
        <li style={liStyle}>
          <strong>Correction:</strong> Request correction of inaccurate or incomplete
          personal information.
        </li>
        <li style={liStyle}>
          <strong>Withdrawal of consent:</strong> Withdraw consent to certain uses of your
          personal information, subject to legal and contractual restrictions.
        </li>
        <li style={liStyle}>
          <strong>Complaint:</strong> Lodge a complaint with the Office of the Privacy
          Commissioner of Canada if you believe your rights under PIPEDA have been violated.
        </li>
      </ul>
      <p style={pStyle}>
        To exercise any of these rights, please submit a written request to our Privacy Officer
        at the contact details below. We will respond within 30 days. In some cases, we may
        need to verify your identity before processing your request.
      </p>

      <h2 style={h2Style}>6. Changes to This Policy</h2>
      <p style={pStyle}>
        We may update this Privacy Policy from time to time. Material changes will be communicated
        via email or a prominent notice within the platform at least 14 days before taking effect.
        Continued use of the Services following notice of changes constitutes acceptance of
        the updated policy.
      </p>

      <h2 style={h2Style}>7. Contact Our Privacy Officer</h2>
      <p style={pStyle}>
        For questions, access requests, or concerns about this policy or our privacy practices,
        please contact:
      </p>
      <p style={pStyle}>
        <strong>Privacy Officer, Sova Technologies Inc.</strong>
        <br />
        Email:{' '}
        <a href="mailto:privacy@sovaos.ca" style={{ color: '#1A6478' }}>
          privacy@sovaos.ca
        </a>
        <br />
        Mail: Privacy Officer, Sova Technologies Inc., Toronto, Ontario, Canada
      </p>
      <p style={pStyle}>
        You also have the right to contact the Office of the Privacy Commissioner of Canada at{' '}
        <a href="https://www.priv.gc.ca" style={{ color: '#1A6478' }}>
          www.priv.gc.ca
        </a>{' '}
        or 1-800-282-1376.
      </p>
    </LegalLayout>
  );
}
