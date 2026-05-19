import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Refund & Billing Policy — Sova',
  description:
    'Sova subscription billing cycles, cancellation terms, and refund policy in Canadian dollars.',
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

export default function BillingPolicy() {
  return (
    <LegalLayout title="Refund & Billing Policy" effectiveDate="May 1, 2025">
      <p style={pStyle}>
        This Refund &amp; Billing Policy governs subscription fees, payment terms, cancellation,
        and refunds for the Sova platform. It forms part of the agreement between you and
        Sova Technologies Inc. (&ldquo;Sova,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) and should be read
        alongside our Terms of Service. All amounts are in Canadian dollars (CAD) unless
        otherwise stated.
      </p>

      <h2 style={h2Style}>1. Subscription Plans</h2>
      <p style={pStyle}>
        Sova offers subscription-based access to the platform on monthly and annual billing
        cycles. The features and usage limits available to you depend on the plan you select
        at the time of purchase. Plan details, including current pricing, are published on
        our pricing page at sovaos.ca/pricing.
      </p>
      <p style={pStyle}>
        By subscribing, you agree to pay the applicable subscription fee for your selected plan
        on a recurring basis. Subscriptions commence on the date of account activation and
        renew automatically at the end of each billing period unless cancelled in advance.
      </p>

      <h2 style={h2Style}>2. Billing Cycles</h2>
      <p style={pStyle}>
        <strong>Monthly subscriptions</strong> are billed every 30 days from your subscription
        start date. The next billing date is displayed in your account settings.
      </p>
      <p style={pStyle}>
        <strong>Annual subscriptions</strong> are billed once per year on your subscription
        anniversary date. Annual plans are offered at a discounted rate compared to the
        equivalent monthly cost. Annual fees are charged in full at the start of each
        annual term.
      </p>
      <p style={pStyle}>
        You will receive an email confirmation of each charge. If your billing date falls on
        a day that does not exist in a given month (e.g., the 31st), the charge will be
        processed on the last day of that month.
      </p>

      <h2 style={h2Style}>3. Payment Methods</h2>
      <p style={pStyle}>
        We accept major credit and debit cards (Visa, Mastercard, American Express) and, where
        available, ACH or EFT payments for annual enterprise plans. Payments are processed by
        our PCI-DSS compliant payment processor. Sova does not store raw payment card numbers.
      </p>
      <p style={pStyle}>
        You are responsible for ensuring your payment information is current and accurate. If a
        payment fails, we will notify you by email and attempt to re-process the charge. After
        three failed attempts over a 7-day period, your account may be suspended until payment
        is received.
      </p>

      <h2 style={h2Style}>4. Taxes</h2>
      <p style={pStyle}>
        All subscription fees are exclusive of applicable taxes. Sova is registered for GST/HST
        purposes in Canada. GST/HST will be applied to subscriptions at the applicable rate
        based on your billing address:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>Ontario (HST): 13%</li>
        <li style={liStyle}>British Columbia, Manitoba, Saskatchewan, Alberta: GST at 5%</li>
        <li style={liStyle}>Nova Scotia, New Brunswick, Prince Edward Island, Newfoundland and Labrador: HST at 15%</li>
        <li style={liStyle}>Quebec: GST at 5% plus QST at 9.975%</li>
      </ul>
      <p style={pStyle}>
        The applicable tax will be displayed at checkout and on your invoice. If you are a
        registered business and have a valid GST/HST number that qualifies for input tax
        credits, you may enter your number in your account billing settings.
      </p>

      <h2 style={h2Style}>5. Plan Changes</h2>
      <p style={pStyle}>
        <strong>Upgrades:</strong> If you upgrade to a higher-tier plan mid-cycle, the
        difference in cost will be prorated and charged immediately for the remainder of
        the current billing period. Your new plan features will be available immediately
        upon upgrade.
      </p>
      <p style={pStyle}>
        <strong>Downgrades:</strong> If you downgrade to a lower-tier plan, the change will
        take effect at the start of your next billing period. No partial refund is issued for
        the unused portion of your current billing period. You will retain access to your
        current plan features until the end of the period.
      </p>

      <h2 style={h2Style}>6. Cancellation</h2>
      <p style={pStyle}>
        You may cancel your Sova subscription at any time by:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          Navigating to <em>Account Settings &gt; Subscription &gt; Cancel Plan</em> within
          the platform.
        </li>
        <li style={liStyle}>
          Contacting our support team at{' '}
          <a href="mailto:support@sovaos.ca" style={{ color: '#1A6478' }}>
            support@sovaos.ca
          </a>
          .
        </li>
      </ul>
      <p style={pStyle}>
        Cancellation takes effect at the end of your current billing period. You will retain
        full access to the platform until that date. After cancellation, your account will
        be deactivated and you will no longer be charged. You may request an export of your
        Customer Data within 30 days of cancellation.
      </p>
      <p style={pStyle}>
        Cancellation of an annual subscription mid-term does not entitle you to a refund for
        the remaining months of the annual term, except as described in Section 7 below.
      </p>

      <h2 style={h2Style}>7. Refund Policy</h2>
      <p style={pStyle}>
        Sova operates a limited refund policy consistent with the nature of software-as-a-service
        subscriptions:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>No refund for partial billing periods:</strong> We do not issue refunds
          for unused days in a monthly or annual billing period following cancellation or
          downgrade.
        </li>
        <li style={liStyle}>
          <strong>New customer satisfaction period:</strong> If you are a new subscriber and
          cancel within 14 days of your initial subscription start date, you may request a
          full refund of your first month&rsquo;s or first year&rsquo;s fee. This applies to your first
          subscription only and is not available for renewals. To request this refund, contact{' '}
          <a href="mailto:support@sovaos.ca" style={{ color: '#1A6478' }}>
            support@sovaos.ca
          </a>{' '}
          within the 14-day window.
        </li>
        <li style={liStyle}>
          <strong>Service disruption:</strong> If a service outage or failure attributable to
          Sova causes the platform to be substantially unavailable for more than 24 consecutive
          hours in a given billing period, you may request a pro-rated credit for the affected
          period. Credits are applied to future invoices and are not issued as cash refunds.
          Requests must be submitted within 30 days of the incident.
        </li>
        <li style={liStyle}>
          <strong>Billing errors:</strong> If you have been charged in error due to a billing
          system mistake, please contact us promptly. We will review and, where confirmed,
          issue a full or partial refund of the erroneous charge within 10 business days.
        </li>
        <li style={liStyle}>
          <strong>Annual plan early termination:</strong> Refunds for annual subscriptions
          cancelled before the term end date are not provided except in cases of verified
          billing error, platform failure meeting the threshold above, or at Sova&rsquo;s sole
          discretion in exceptional circumstances.
        </li>
      </ul>
      <p style={pStyle}>
        Refunds, where approved, will be issued to the original payment method. Processing
        times vary by payment provider but typically take 5–10 business days to appear on
        your statement.
      </p>

      <h2 style={h2Style}>8. Price Changes</h2>
      <p style={pStyle}>
        Sova reserves the right to change subscription pricing. We will provide at least 30
        days&apos; written notice of any price change before it affects your account, delivered
        by email to the address on file. For annual subscribers, price changes will not apply
        until your next annual renewal.
      </p>
      <p style={pStyle}>
        If you do not agree to a price change, you may cancel your subscription before the
        change takes effect to avoid being charged at the new rate.
      </p>

      <h2 style={h2Style}>9. Contact for Billing Inquiries</h2>
      <p style={pStyle}>
        For billing questions, invoice requests, or refund inquiries, please contact:
      </p>
      <p style={pStyle}>
        <strong>Email:</strong>{' '}
        <a href="mailto:billing@sovaos.ca" style={{ color: '#1A6478' }}>
          billing@sovaos.ca
        </a>
        <br />
        <strong>Subject line:</strong> Billing Inquiry — [Your Account Email]
      </p>
      <p style={pStyle}>
        We aim to respond to billing inquiries within 2 business days.
      </p>
    </LegalLayout>
  );
}
