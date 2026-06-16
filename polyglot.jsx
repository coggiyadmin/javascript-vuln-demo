import React from 'react';
export function Comment() {
  const c = location.hash.slice(1);                 // DOM source
  return <div dangerouslySetInnerHTML={{ __html: c }} />;  // CWE-79 (React XSS)
}
export function Safe() {
  const c = location.hash.slice(1);
  return <div>{c}</div>;                            // React auto-escapes -> SAFE (must NOT fire)
}
