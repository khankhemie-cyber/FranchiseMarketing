import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Accessibility Statement — Sova',
  description:
    'Sova\'s commitment to WCAG 2.1 AA accessibility conformance and how to report barriers.',
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

export default function AccessibilityStatement() {
  return (
    <LegalLayout title="Accessibility Statement" effectiveDate="May 1, 2025">
      <p style={pStyle}>
        Sova Technologies Inc. is committed to making its website and platform accessible to
        all users, including persons with disabilities. We believe that accessible design
        benefits everyone and is a fundamental aspect of professional software development.
      </p>
      <p style={pStyle}>
        This statement describes the current accessibility status of sovaos.ca and the Sova
        platform, our ongoing efforts to improve, and how to contact us if you encounter
        a barrier.
      </p>

      <h2 style={h2Style}>1. Our Commitment</h2>
      <p style={pStyle}>
        We are working toward conformance with the <strong>Web Content Accessibility Guidelines
        (WCAG) 2.1 Level AA</strong>. WCAG is the internationally recognized standard for web
        accessibility, published by the World Wide Web Consortium (W3C).
      </p>
      <p style={pStyle}>
        Our accessibility efforts are guided by four core principles — that content should be
        Perceivable, Operable, Understandable, and Robust (POUR). We integrate accessibility
        considerations into our design process, engineering reviews, and quality assurance
        cycles.
      </p>

      <h2 style={h2Style}>2. Current Conformance Status</h2>
      <p style={pStyle}>
        We assess our platform against WCAG 2.1 AA through a combination of automated testing
        tools and manual review. As of the effective date of this statement:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          The Sova marketing website (sovaos.ca) is <strong>partially conformant</strong> with
          WCAG 2.1 AA. Partially conformant means that some content does not yet fully conform
          to the standard.
        </li>
        <li style={liStyle}>
          The Sova platform application is under active accessibility improvement. We are
          systematically reviewing and remediating identified issues.
        </li>
      </ul>
      <p style={pStyle}>
        We conduct accessibility reviews as part of our product development cycle and upon
        major releases.
      </p>

      <h2 style={h2Style}>3. Known Limitations</h2>
      <p style={pStyle}>
        We are aware of the following accessibility limitations and are actively working to
        address them:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Complex data visualizations:</strong> Some charts and graphs in the analytics
          module may not have fully accessible text alternatives. We are implementing improved
          data table alternatives and ARIA descriptions.
        </li>
        <li style={liStyle}>
          <strong>Rich text editor:</strong> The campaign content editor uses a third-party
          component that has known keyboard navigation limitations. We are evaluating
          accessible alternatives.
        </li>
        <li style={liStyle}>
          <strong>PDF exports:</strong> Reports exported as PDFs may not be fully accessible
          to screen readers. Tagged PDF support is on our development roadmap.
        </li>
        <li style={liStyle}>
          <strong>Colour contrast in legacy UI:</strong> Certain secondary interface elements
          in the platform may not meet the 4.5:1 contrast ratio required under WCAG 1.4.3.
          These are being addressed in our ongoing design system refresh.
        </li>
        <li style={liStyle}>
          <strong>Video content:</strong> Product demonstration videos and tutorials may not
          have closed captions. We are adding captions to our video library.
        </li>
      </ul>

      <h2 style={h2Style}>4. Assistive Technology Compatibility</h2>
      <p style={pStyle}>
        We aim to support use of the following assistive technologies with the primary features
        of the platform:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>Screen readers: NVDA and JAWS on Windows; VoiceOver on macOS and iOS.</li>
        <li style={liStyle}>Keyboard-only navigation for all critical workflows.</li>
        <li style={liStyle}>Browser zoom up to 200% without loss of functionality.</li>
        <li style={liStyle}>Increased text spacing without loss of content or functionality.</li>
      </ul>
      <p style={pStyle}>
        If you use an assistive technology not listed above and encounter difficulties, please
        let us know — we want to understand and address your experience.
      </p>

      <h2 style={h2Style}>5. How to Report an Accessibility Barrier</h2>
      <p style={pStyle}>
        We welcome feedback from users who encounter accessibility barriers on our site or
        platform. Your input helps us identify and resolve issues more quickly.
      </p>
      <p style={pStyle}>
        To report an accessibility barrier, please contact us at:
      </p>
      <p style={pStyle}>
        <strong>Email:</strong>{' '}
        <a href="mailto:accessibility@sovaos.ca" style={{ color: '#1A6478' }}>
          accessibility@sovaos.ca
        </a>
        <br />
        <strong>Subject line:</strong> Accessibility Feedback — [brief description of issue]
      </p>
      <p style={pStyle}>
        When reporting, please include:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>The URL or location of the content you are experiencing difficulty with.</li>
        <li style={liStyle}>A description of the barrier and what you were trying to do.</li>
        <li style={liStyle}>The assistive technology and browser you are using (if applicable).</li>
        <li style={liStyle}>Your preferred method of contact for follow-up.</li>
      </ul>
      <p style={pStyle}>
        We commit to acknowledging accessibility reports within 5 business days and to
        providing an initial assessment or workaround within 10 business days where possible.
      </p>

      <h2 style={h2Style}>6. Formal Complaints</h2>
      <p style={pStyle}>
        If you are not satisfied with our response to an accessibility report, you may contact
        the relevant provincial accessibility regulator or the Canadian Human Rights Commission.
        Organizations in Ontario may also refer to the{' '}
        <em>Accessibility for Ontarians with Disabilities Act</em> (AODA) and contact the
        Accessibility Directorate of Ontario.
      </p>

      <h2 style={h2Style}>7. Ongoing Efforts</h2>
      <p style={pStyle}>
        Accessibility is an ongoing commitment, not a one-time exercise. Our current and
        planned efforts include:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>Integrating automated accessibility checks into our CI/CD pipeline.</li>
        <li style={liStyle}>Conducting periodic manual audits with assistive technology users.</li>
        <li style={liStyle}>Providing accessibility training for our design and engineering teams.</li>
        <li style={liStyle}>Including accessibility criteria in our design system and component library.</li>
        <li style={liStyle}>Publishing updated conformance reports as our platform evolves.</li>
      </ul>
      <p style={pStyle}>
        We update this statement when significant changes are made to our platform or when
        new audit results are available.
      </p>
    </LegalLayout>
  );
}
