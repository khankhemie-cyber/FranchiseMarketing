import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Communication Preferences — Sova',
  description:
    'How Sova communicates with you, types of messages we send, and how to manage or withdraw consent under CASL.',
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

export default function CommunicationPreferences() {
  return (
    <LegalLayout title="Communication Preferences" effectiveDate="May 1, 2025">
      <p style={pStyle}>
        This page explains how Sova Technologies Inc. (&ldquo;Sova,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
        &ldquo;us&rdquo;) communicates with you, what types of messages we send, and how you can manage
        your preferences or withdraw consent at any time.
      </p>
      <p style={pStyle}>
        Our communication practices are designed to comply with Canada&rsquo;s{' '}
        <em>Anti-Spam Legislation</em> (CASL), which requires that we have either express or
        implied consent before sending commercial electronic messages (CEMs) to an electronic
        address.
      </p>

      <h2 style={h2Style}>1. Types of Communications</h2>
      <p style={pStyle}>
        We send two broad categories of messages:
      </p>

      <p style={pStyle}>
        <strong>Transactional Communications</strong>
      </p>
      <p style={pStyle}>
        These messages are necessary for the performance of our contract with you and are
        required for you to use the platform effectively. They include:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>Account creation and verification emails.</li>
        <li style={liStyle}>Password reset and security alerts.</li>
        <li style={liStyle}>Billing receipts, invoices, and payment failure notifications.</li>
        <li style={liStyle}>Subscription renewal reminders and confirmation of changes.</li>
        <li style={liStyle}>Service status updates, including planned maintenance or outage notifications.</li>
        <li style={liStyle}>Critical product updates that affect your ability to use the platform.</li>
        <li style={liStyle}>Legal notices, including updates to our Terms of Service or Privacy Policy.</li>
      </ul>
      <p style={pStyle}>
        Transactional messages are exempt from CASL&rsquo;s consent requirements under s. 6(6)
        because they facilitate, complete, or confirm a transaction you have already agreed to.
        You cannot opt out of transactional messages while your account is active, as they
        are necessary for platform operation.
      </p>

      <p style={pStyle}>
        <strong>Marketing & Promotional Communications</strong>
      </p>
      <p style={pStyle}>
        These messages are commercial in nature and require your prior consent. They include:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>New feature announcements and product news.</li>
        <li style={liStyle}>Educational content, webinars, and resources about franchise marketing.</li>
        <li style={liStyle}>Case studies, customer stories, and industry insights.</li>
        <li style={liStyle}>Promotional offers, discounts, or invitations to Sova events.</li>
        <li style={liStyle}>Survey and feedback requests unrelated to your immediate support experience.</li>
      </ul>

      <h2 style={h2Style}>2. Basis for Consent Under CASL</h2>
      <p style={pStyle}>
        We rely on the following consent bases for commercial electronic messages:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Express consent:</strong> You have explicitly opted in to receive marketing
          communications from us — for example, by checking a consent checkbox during
          registration or account setup, or by completing a marketing subscription form.
        </li>
        <li style={liStyle}>
          <strong>Implied consent (existing business relationship):</strong> Where you have
          an existing business relationship with Sova (such as an active subscription), CASL
          permits us to send CEMs for up to 2 years from the date of that relationship,
          unless you have withdrawn consent. We honour this limit and will not rely on implied
          consent indefinitely.
        </li>
      </ul>
      <p style={pStyle}>
        We maintain records of the basis and date of consent for each contact in our system.
      </p>

      <h2 style={h2Style}>3. How to Manage Your Preferences</h2>
      <p style={pStyle}>
        You can manage your communication preferences in the following ways:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Platform settings:</strong> Log in to your Sova account, navigate to
          <em> Account Settings &gt; Notifications</em>, and update your preferences for
          marketing, product news, and other optional communication types.
        </li>
        <li style={liStyle}>
          <strong>Unsubscribe link:</strong> Every marketing email we send includes a clearly
          visible unsubscribe link in the footer. Clicking this link will remove you from
          that category of marketing communications within 10 business days, as required
          by CASL.
        </li>
        <li style={liStyle}>
          <strong>Email request:</strong> You may send a plain-language request to{' '}
          <a href="mailto:privacy@sovaos.ca" style={{ color: '#1A6478' }}>
            privacy@sovaos.ca
          </a>{' '}
          asking us to update or remove your consent for specific communication types.
        </li>
      </ul>
      <p style={pStyle}>
        We will process preference changes and unsubscribe requests promptly. Transactional
        messages related to your active account will continue regardless of marketing
        opt-out status.
      </p>

      <h2 style={h2Style}>4. Identification in Messages</h2>
      <p style={pStyle}>
        In compliance with CASL, every commercial electronic message we send will clearly
        identify Sova Technologies Inc. as the sender, include our mailing address, and
        provide a working mechanism to unsubscribe. We do not send commercial messages
        on behalf of third parties without disclosure.
      </p>

      <h2 style={h2Style}>5. Third-Party Communications</h2>
      <p style={pStyle}>
        We do not sell, rent, or otherwise transfer your email address or contact information
        to third parties for their marketing purposes. We do not send marketing messages on
        behalf of our partners or sponsors without your separate, express consent.
      </p>

      <h2 style={h2Style}>6. Withdrawing Consent</h2>
      <p style={pStyle}>
        You may withdraw consent for marketing communications at any time by:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>Using the unsubscribe mechanism in any marketing email.</li>
        <li style={liStyle}>Updating your notification preferences in your platform account settings.</li>
        <li style={liStyle}>
          Contacting us directly at{' '}
          <a href="mailto:privacy@sovaos.ca" style={{ color: '#1A6478' }}>
            privacy@sovaos.ca
          </a>
          .
        </li>
      </ul>
      <p style={pStyle}>
        Withdrawal of consent does not affect the lawfulness of communications sent before
        the withdrawal, and does not affect transactional communications required to maintain
        your account.
      </p>

      <h2 style={h2Style}>7. Frequency & Volume</h2>
      <p style={pStyle}>
        We aim to send marketing communications at a reasonable frequency — typically no more
        than once per week — and to ensure every message provides genuine value. We do not
        send bulk unsolicited messages. We may adjust communication frequency based on your
        engagement level and stated preferences.
      </p>

      <h2 style={h2Style}>8. Contact</h2>
      <p style={pStyle}>
        For questions about your communication preferences or to update your consent status,
        please contact our Privacy Officer:
      </p>
      <p style={pStyle}>
        <strong>Email:</strong>{' '}
        <a href="mailto:privacy@sovaos.ca" style={{ color: '#1A6478' }}>
          privacy@sovaos.ca
        </a>
        <br />
        <strong>Subject line:</strong> Communication Preferences — [Your Name / Account Email]
      </p>
    </LegalLayout>
  );
}
