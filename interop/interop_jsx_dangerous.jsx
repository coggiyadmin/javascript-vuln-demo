// IL-1 polyglot — JavaScript → JSX (CWE-79).
// Host (JS/React) embeds JSX markup and injects an untrusted value via
// dangerouslySetInnerHTML, bypassing React's default escaping → DOM XSS.
// Expected today: FN (JSX not parsed — see #88a/b).
import React from 'react';

export function Comment({ location }) {
  const raw = new URLSearchParams(location.search).get('html'); // SOURCE
  // SINK (CWE-79): dangerouslySetInnerHTML injects attacker markup unescaped.
  return <div dangerouslySetInnerHTML={{ __html: raw }} />;
}
