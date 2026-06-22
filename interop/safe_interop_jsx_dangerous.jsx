// IL-1 polyglot — SAFE mirror of interop_jsx_dangerous.jsx.
// The untrusted value is rendered as JSX children (text), which React escapes by
// default — no dangerouslySetInnerHTML. ZERO security findings expected.
import React from 'react';

export function Comment({ location }) {
  const raw = new URLSearchParams(location.search).get('html'); // SOURCE
  // Safe: rendered as text content; React auto-escapes — markup shows literally.
  return <div>{raw}</div>;
}
