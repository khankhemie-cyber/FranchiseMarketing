import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — Sova',
  description:
    'The agreement governing your use of the Sova franchise marketing platform, including subscription terms and governing law.',
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

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" effectiveDate="May 1, 2025">
      <p style={pStyle}>
        These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between
        you (the &ldquo;Customer&rdquo; or &ldquo;you&rdquo;) and Sova Technologies Inc. (&ldquo;Sova,&rdquo;
        &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), a corporation incorporated under the laws
        of Ontario, Canada. Please read these Terms carefully before using the Sova platform.
      </p>

      <h2 style={h2Style}>1. Acceptance of Terms</h2>
      <p style={pStyle}>
        By creating an account, accessing the Sova platform, or clicking &ldquo;I agree,&rdquo; you
        confirm that you have read, understood, and agree to be bound by these Terms and our
        Privacy Policy. If you are accepting on behalf of a company or other legal entity, you
        represent and warrant that you have the authority to bind that entity to these Terms.
      </p>
      <p style={pStyle}>
        If you do not agree to these Terms, you must not access or use the Services.
      </p>

      <h2 style={h2Style}>2. Description of Services</h2>
      <p style={pStyle}>
        Sova provides a cloud-based franchise marketing and operations platform offering modules
        including, but not limited to, local marketing automation, reputation management,
        social media management, paid advertising orchestration, analytics, and franchisee
        communications (collectively, the &ldquo;Services&rdquo;). The specific features available to
        you depend on the subscription plan you have purchased.
      </p>
      <p style={pStyle}>
        We reserve the right to modify, suspend, or discontinue any aspect of the Services at
        any time, with reasonable notice where practicable. We will not be liable to you or any
        third party for any such modification, suspension, or discontinuation.
      </p>

      <h2 style={h2Style}>3. Accounts</h2>
      <p style={pStyle}>
        To access the Services, you must register for an account and provide accurate, current,
        and complete information. You are responsible for:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          Maintaining the confidentiality of your account credentials.
        </li>
        <li style={liStyle}>
          All activities that occur under your account, whether authorized by you or not.
        </li>
        <li style={liStyle}>
          Promptly notifying Sova at{' '}
          <a href="mailto:support@sovaos.ca" style={{ color: '#1A6478' }}>
            support@sovaos.ca
          </a>{' '}
          if you suspect unauthorized access to your account.
        </li>
      </ul>
      <p style={pStyle}>
        You may not share your account credentials with third parties or create accounts on
        behalf of others without authorization. Sova reserves the right to suspend or terminate
        accounts that violate these Terms.
      </p>

      <h2 style={h2Style}>4. Payment & Subscriptions</h2>
      <p style={pStyle}>
        Access to the Services is provided on a subscription basis. By subscribing, you agree
        to pay all applicable fees as set out in your selected plan. All fees are in Canadian
        dollars (CAD) unless otherwise specified.
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Billing cycle:</strong> Subscriptions are billed monthly or annually in
          advance, depending on your selected plan. Annual plans may be offered at a discounted
          rate.
        </li>
        <li style={liStyle}>
          <strong>Automatic renewal:</strong> Subscriptions renew automatically at the end of
          each billing period unless cancelled in advance in accordance with Section 9.
        </li>
        <li style={liStyle}>
          <strong>Price changes:</strong> We may change subscription fees with at least 30 days&apos;
          written notice before the change takes effect. Continued use of the Services after the
          effective date constitutes acceptance of the new pricing.
        </li>
        <li style={liStyle}>
          <strong>Taxes:</strong> Fees are exclusive of applicable taxes, including HST/GST.
          You are responsible for all taxes associated with your subscription.
        </li>
        <li style={liStyle}>
          <strong>Failed payments:</strong> If a payment fails, we will attempt to notify you
          and retry the charge. Continued failure to pay may result in suspension or termination
          of your account.
        </li>
      </ul>

      <h2 style={h2Style}>5. Acceptable Use</h2>
      <p style={pStyle}>
        You agree to use the Services only for lawful purposes and in accordance with these Terms.
        You must not:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          Use the Services to transmit spam, unsolicited commercial messages, or communications
          that violate CASL or other applicable anti-spam legislation.
        </li>
        <li style={liStyle}>
          Upload, transmit, or store content that is unlawful, defamatory, harassing, or
          infringes any third-party intellectual property rights.
        </li>
        <li style={liStyle}>
          Attempt to gain unauthorized access to any part of the Services or related systems.
        </li>
        <li style={liStyle}>
          Use automated means to access, scrape, or extract data from the platform without
          Sova&rsquo;s prior written consent.
        </li>
        <li style={liStyle}>
          Resell, sublicense, or otherwise transfer access to the Services to unauthorized
          third parties.
        </li>
        <li style={liStyle}>
          Interfere with or disrupt the integrity or performance of the Services or their
          underlying infrastructure.
        </li>
      </ul>

      <h2 style={h2Style}>6. Intellectual Property</h2>
      <p style={pStyle}>
        The Sova platform, including all software, code, designs, logos, trademarks, and
        documentation, is the exclusive property of Sova Technologies Inc. or its licensors
        and is protected by Canadian and international intellectual property laws. These Terms
        do not grant you any ownership rights in the Services.
      </p>
      <p style={pStyle}>
        You retain ownership of all content, data, and materials you upload to the platform
        (&ldquo;Customer Data&rdquo;). You grant Sova a limited, non-exclusive, royalty-free licence to
        access and process Customer Data solely as necessary to provide and support the Services.
        Sova will not use Customer Data for any purpose beyond the scope of this licence without
        your prior written consent.
      </p>

      <h2 style={h2Style}>7. Confidentiality</h2>
      <p style={pStyle}>
        Each party agrees to keep confidential any non-public information received from the
        other party that is designated as confidential or that reasonably should be understood
        to be confidential given the nature of the information. This obligation does not apply
        to information that is publicly known, independently developed, or required to be
        disclosed by law.
      </p>

      <h2 style={h2Style}>8. Warranties & Disclaimers</h2>
      <p style={pStyle}>
        Sova warrants that it will use commercially reasonable efforts to provide the Services
        in a professional and workmanlike manner. EXCEPT AS EXPRESSLY STATED IN THESE TERMS,
        THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, OR NON-INFRINGEMENT. SOVA DOES NOT WARRANT THAT THE SERVICES WILL BE
        UNINTERRUPTED OR ERROR-FREE.
      </p>

      <h2 style={h2Style}>9. Termination</h2>
      <p style={pStyle}>
        Either party may terminate these Terms upon written notice if the other party materially
        breaches these Terms and fails to cure the breach within 30 days of receiving written
        notice.
      </p>
      <p style={pStyle}>
        You may cancel your subscription at any time through your account settings or by
        contacting support. Cancellation takes effect at the end of the current billing period.
        No refunds are issued for unused portions of a billing period except as set out in
        our Refund &amp; Billing Policy.
      </p>
      <p style={pStyle}>
        Sova may terminate or suspend your account immediately, without prior notice, if you
        materially violate these Terms, including non-payment or breach of the Acceptable Use
        provisions.
      </p>
      <p style={pStyle}>
        Upon termination, you may request an export of your Customer Data within 30 days.
        After 30 days, we may delete your Customer Data in accordance with our Privacy Policy.
      </p>

      <h2 style={h2Style}>10. Limitation of Liability</h2>
      <p style={pStyle}>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SOVA&rsquo;S TOTAL CUMULATIVE LIABILITY
        TO YOU ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, REGARDLESS OF THE
        FORM OF ACTION, WILL NOT EXCEED THE TOTAL FEES PAID BY YOU TO SOVA IN THE TWELVE (12)
        MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
      </p>
      <p style={pStyle}>
        IN NO EVENT WILL SOVA BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL,
        EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, GOODWILL,
        OR BUSINESS OPPORTUNITIES, EVEN IF SOVA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
        DAMAGES.
      </p>
      <p style={pStyle}>
        Some jurisdictions do not allow the exclusion or limitation of certain damages. In such
        jurisdictions, Sova&rsquo;s liability will be limited to the greatest extent permitted by law.
      </p>

      <h2 style={h2Style}>11. Indemnification</h2>
      <p style={pStyle}>
        You agree to indemnify, defend, and hold harmless Sova Technologies Inc. and its
        officers, directors, employees, and agents from and against any claims, liabilities,
        damages, losses, and expenses (including reasonable legal fees) arising out of or
        relating to: (a) your use of the Services in violation of these Terms; (b) your
        Customer Data; or (c) your violation of any applicable law or third-party rights.
      </p>

      <h2 style={h2Style}>12. Governing Law & Dispute Resolution</h2>
      <p style={pStyle}>
        These Terms are governed by and construed in accordance with the laws of the Province
        of Ontario and the federal laws of Canada applicable therein, without regard to
        conflict-of-law principles.
      </p>
      <p style={pStyle}>
        Any dispute arising out of or relating to these Terms or the Services will be subject
        to the exclusive jurisdiction of the courts of Ontario, Canada. You and Sova both
        consent to personal jurisdiction in Ontario for this purpose.
      </p>

      <h2 style={h2Style}>13. General</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Entire agreement:</strong> These Terms, together with our Privacy Policy and
          any applicable order form or statement of work, constitute the entire agreement
          between the parties regarding the Services.
        </li>
        <li style={liStyle}>
          <strong>Severability:</strong> If any provision of these Terms is found to be
          unenforceable, the remaining provisions will remain in full force and effect.
        </li>
        <li style={liStyle}>
          <strong>Waiver:</strong> Failure to enforce any provision of these Terms will not
          constitute a waiver of future enforcement of that provision.
        </li>
        <li style={liStyle}>
          <strong>Assignment:</strong> You may not assign or transfer your rights or obligations
          under these Terms without Sova&rsquo;s prior written consent. Sova may assign these Terms
          in connection with a merger, acquisition, or sale of all or substantially all of
          its assets.
        </li>
        <li style={liStyle}>
          <strong>Notices:</strong> Notices to Sova must be sent to{' '}
          <a href="mailto:legal@sovaos.ca" style={{ color: '#1A6478' }}>
            legal@sovaos.ca
          </a>
          . Notices to you will be sent to the email address associated with your account.
        </li>
      </ul>
    </LegalLayout>
  );
}
