// XSS variant: React dangerouslySetInnerHTML, source = prop/query.
import React from 'react';
export function C({ q }) { return <div dangerouslySetInnerHTML={{ __html: q }} />; } // SINK CWE-79
