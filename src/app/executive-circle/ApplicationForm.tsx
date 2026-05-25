'use client';

import { useEffect, useRef } from 'react';

export function ApplicationForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = iframeRef.current;
    if (!frame) return;
    let src = frame.src;
    if (!(/[?&]referrername=/.test(src))) {
      let rfr = window.location.href;
      try {
        rfr = window.self !== window.top
          ? window.top!.location.href
          : (/^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr) ? rfr : '');
      } catch (e) {}
      if (rfr) {
        if (rfr.length > 1800) {
          const qi = rfr.indexOf('?');
          if (qi > -1) rfr = rfr.substring(0, qi);
          if (rfr.length > 1800) rfr = rfr.substring(0, 1800);
        }
        src += (src.indexOf('?') > 0 ? '&' : '?') + 'referrername=' + encodeURIComponent(rfr);
      }
    }
    if (frame.src !== src) frame.src = src;
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id="ziframe_257204"
      aria-label="Sova Event Invitations Form"
      style={{ height: '500px', width: '99%', border: 'none' }}
      src="https://forms.zohopublic.ca/operationssov1/form/SovaEventInvitationsForm/formperma/6IgnFXe-dPL20cJkfDQb07xJMsO3b5SI6ZTysFxJFe8"
    />
  );
}
