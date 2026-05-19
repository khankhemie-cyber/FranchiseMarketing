import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Security & Data Practices — Sova',
  description:
    'How Sova protects your data through Canadian hosting, encryption, access controls, and incident response.',
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

export default function SecurityPractices() {
  return (
    <LegalLayout title="Security & Data Practices" effectiveDate="May 1, 2025">
      <p style={pStyle}>
        Sova Technologies Inc. takes the security of your data seriously. This document
        describes the technical and organizational measures we implement to protect Customer
        Data processed through the Sova platform. It is intended to help customers and
        prospects make informed decisions about entrusting their data to our platform.
      </p>
      <p style={pStyle}>
        Our security program is designed to align with widely recognized frameworks, including
        SOC 2 Trust Services Criteria. We are continuously maturing our controls and working
        toward formal third-party attestation.
      </p>

      <h2 style={h2Style}>1. Data Residency & Hosting</h2>
      <p style={pStyle}>
        Sova&rsquo;s primary production infrastructure is hosted in Canada. We use Canadian data
        centres to ensure that your data remains subject to Canadian privacy law, including
        PIPEDA, and is not routinely transferred outside Canadian jurisdiction as part of
        normal platform operations.
      </p>
      <p style={pStyle}>
        Our hosting provider operates redundant facilities with high availability architecture,
        including geographic failover within Canada. Backups are stored in Canadian regions
        and are subject to the same security controls as production data.
      </p>
      <p style={pStyle}>
        Where certain ancillary services (such as transactional email or analytics tools)
        are provided by third parties with infrastructure outside Canada, we ensure appropriate
        data processing agreements are in place and that data minimization principles are
        applied — meaning only the data strictly necessary for the service is transferred.
      </p>

      <h2 style={h2Style}>2. Encryption</h2>
      <p style={pStyle}>
        All data transmitted between your browser or client and the Sova platform is encrypted
        using TLS 1.2 or higher. We do not support deprecated protocols (TLS 1.0 or 1.1) or
        weak cipher suites.
      </p>
      <p style={pStyle}>
        Data at rest — including database records, backups, and file storage — is encrypted
        using AES-256 or equivalent industry-standard encryption. Encryption keys are managed
        using dedicated key management services with strict access controls and rotation policies.
      </p>

      <h2 style={h2Style}>3. Access Controls</h2>
      <p style={pStyle}>
        Access to Customer Data within Sova is governed by the principle of least privilege:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Employee access:</strong> Sova employees are granted access to Customer
          Data only on a need-to-know basis, consistent with their job function. Access is
          provisioned through our identity management system and requires approval.
        </li>
        <li style={liStyle}>
          <strong>Multi-factor authentication (MFA):</strong> MFA is required for all
          employee access to production systems and administrative tools.
        </li>
        <li style={liStyle}>
          <strong>Role-based access control (RBAC):</strong> The platform enforces RBAC at
          the application layer, ensuring that platform users can only access data and
          features authorized for their role within their organization.
        </li>
        <li style={liStyle}>
          <strong>Access reviews:</strong> We conduct periodic reviews of employee access
          privileges and promptly revoke access upon offboarding.
        </li>
        <li style={liStyle}>
          <strong>Audit logging:</strong> Administrative access to production systems is
          logged. Logs are retained for a minimum of 12 months and are protected against
          tampering.
        </li>
      </ul>

      <h2 style={h2Style}>4. Network & Infrastructure Security</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Firewalls and network segmentation:</strong> Production systems are isolated
          from development and corporate networks. Inbound access to internal services is
          restricted by firewall rules with explicit allow-lists.
        </li>
        <li style={liStyle}>
          <strong>DDoS protection:</strong> We use network-level DDoS mitigation to protect
          platform availability.
        </li>
        <li style={liStyle}>
          <strong>Vulnerability scanning:</strong> We run automated vulnerability scans against
          our infrastructure on a regular schedule and prioritize remediation of identified
          findings based on severity.
        </li>
        <li style={liStyle}>
          <strong>Dependency management:</strong> We monitor third-party software dependencies
          for known vulnerabilities using automated tooling and apply security patches promptly.
        </li>
      </ul>

      <h2 style={h2Style}>5. Application Security</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Secure development lifecycle:</strong> Security requirements are incorporated
          into our design and development process. Engineers receive training on secure coding
          practices relevant to our technology stack.
        </li>
        <li style={liStyle}>
          <strong>Code review:</strong> All code changes undergo peer review before deployment
          to production. Security-sensitive changes receive additional scrutiny.
        </li>
        <li style={liStyle}>
          <strong>Penetration testing:</strong> We engage qualified third-party security
          professionals to conduct penetration tests of the platform periodically and following
          significant architectural changes.
        </li>
        <li style={liStyle}>
          <strong>Input validation and output encoding:</strong> The platform applies
          server-side input validation and output encoding to mitigate common vulnerabilities
          including injection attacks and cross-site scripting (XSS).
        </li>
      </ul>

      <h2 style={h2Style}>6. Incident Response</h2>
      <p style={pStyle}>
        Sova maintains a documented incident response plan that governs how we detect, contain,
        investigate, and recover from security incidents. Key elements include:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Detection:</strong> We use centralized logging, anomaly detection, and
          alerting to identify potential security events in a timely manner.
        </li>
        <li style={liStyle}>
          <strong>Escalation:</strong> Security incidents are escalated to designated response
          leads with defined roles and responsibilities.
        </li>
        <li style={liStyle}>
          <strong>Customer notification:</strong> In the event of a data breach that may
          affect your personal information, we will notify affected customers in accordance
          with our obligations under PIPEDA&rsquo;s breach reporting provisions, including
          notification to the Office of the Privacy Commissioner of Canada where required.
          We target notification to affected customers within 72 hours of confirming a
          qualifying breach.
        </li>
        <li style={liStyle}>
          <strong>Post-incident review:</strong> Following any significant incident, we conduct
          a post-incident review to identify root causes and implement preventive measures.
        </li>
      </ul>

      <h2 style={h2Style}>7. Business Continuity & Disaster Recovery</h2>
      <p style={pStyle}>
        We maintain business continuity and disaster recovery plans to minimize service
        disruption in the event of a major failure. Our infrastructure is designed for
        high availability with redundant components. We take regular automated backups of
        Customer Data and test restore procedures periodically.
      </p>

      <h2 style={h2Style}>8. Vendor & Supply Chain Security</h2>
      <p style={pStyle}>
        We evaluate the security practices of third-party service providers before onboarding
        them and require data processing agreements that bind them to appropriate security and
        confidentiality obligations. We maintain an inventory of subprocessors and review
        material changes to their security posture.
      </p>

      <h2 style={h2Style}>9. SOC 2 Alignment</h2>
      <p style={pStyle}>
        Our security program is designed to align with the Trust Services Criteria published
        by the AICPA as the basis for SOC 2 reporting — covering Security, Availability,
        and Confidentiality. We are working toward obtaining a formal SOC 2 Type II report
        from an independent auditor. We will communicate the outcome of this process to
        customers when available.
      </p>
      <p style={pStyle}>
        We do not currently hold SOC 2 certification and make no representation of certified
        compliance at this time.
      </p>

      <h2 style={h2Style}>10. Responsible Disclosure</h2>
      <p style={pStyle}>
        If you discover a potential security vulnerability in the Sova platform or website,
        we ask that you report it to us responsibly before making any public disclosure. Please
        send details to{' '}
        <a href="mailto:security@sovaos.ca" style={{ color: '#1A6478' }}>
          security@sovaos.ca
        </a>
        . We will acknowledge your report within 3 business days and work with you to
        understand and address the issue.
      </p>
      <p style={pStyle}>
        We do not take legal action against researchers who report vulnerabilities in good faith
        and in accordance with this policy.
      </p>

      <h2 style={h2Style}>11. Contact</h2>
      <p style={pStyle}>
        For questions about our security practices, please contact:{' '}
        <a href="mailto:security@sovaos.ca" style={{ color: '#1A6478' }}>
          security@sovaos.ca
        </a>
      </p>
    </LegalLayout>
  );
}
