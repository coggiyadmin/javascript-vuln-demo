/**
 * NEGATIVE TEST FILE — secure equivalents of every vulnerable pattern.
 *
 * Flows user input through safe APIs to each sink type. The scanner MUST
 * produce ZERO security findings here. Any finding is a FALSE POSITIVE.
 *
 * Safe patterns exercised:
 *   sql_injection      → parameterized query ($1 placeholders)
 *   xss                → DOMPurify.sanitize / encodeURIComponent
 *   command_injection  → execFile with arg array (no shell)
 *   path_traversal     → path.resolve + prefix check
 *   ssrf               → host allowlist before fetch
 *   open_redirect      → redirect allowlist
 *   insecure_cookie    → res.cookie with secure + httpOnly + sameSite
 *   cors               → explicit single-origin allowlist
 */

'use strict';
const express   = require('express');
const path      = require('path');
const { execFile } = require('child_process');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const router = express.Router();
const DOMPurify = createDOMPurify(new JSDOM('').window);

const UPLOAD_ROOT = path.resolve('/var/app/uploads');
const ALLOWED_HOSTS = new Set(['api.internal.example.com', 'cdn.example.com']);
const ALLOWED_REDIRECTS = new Set(['/dashboard', '/profile', '/settings']);

// SAFE sql — parameterized query, no string interpolation
router.get('/users', async (req, res) => {
    const { pg } = await import('pg');
    const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();
    const result = await client.query(
        'SELECT * FROM users WHERE username = $1 AND role = $2',
        [req.query.username, req.query.role]               // parameters, not concatenation
    );
    res.json(result.rows);
});

// SAFE xss — DOMPurify sanitizes before rendering
router.get('/profile', (req, res) => {
    const clean = DOMPurify.sanitize(req.query.bio || '');  // sanitizer
    res.send(`<div class="bio">${clean}</div>`);
});

// SAFE command — execFile with arg array, no shell interpretation
router.post('/ping', (req, res) => {
    execFile('ping', ['-c', '3', '--', String(req.body.host)], (err, stdout) => {
        res.json({ output: stdout, error: err ? err.message : null });
    });
});

// SAFE path — resolve and verify the result stays under UPLOAD_ROOT
router.get('/file/:name', (req, res) => {
    const target = path.resolve(UPLOAD_ROOT, req.params.name);
    if (!target.startsWith(UPLOAD_ROOT + path.sep)) {
        return res.status(403).send('forbidden');
    }
    res.sendFile(target);
});

// SAFE ssrf — host validated against allowlist before fetch
router.get('/fetch', async (req, res) => {
    let url;
    try { url = new URL(req.query.url); } catch { return res.status(400).end(); }
    if (!ALLOWED_HOSTS.has(url.hostname)) {
        return res.status(403).send('host not allowed');
    }
    const r = await fetch(url.href);
    res.send(await r.text());
});

// SAFE redirect — destination validated against allowlist
router.get('/go', (req, res) => {
    const next = ALLOWED_REDIRECTS.has(req.query.next) ? req.query.next : '/dashboard';
    res.redirect(next);
});

// SAFE cookie — secure, httpOnly, sameSite all set
router.post('/session', (req, res) => {
    res.cookie('session_token', req.body.token, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 3600000,
    });
    res.json({ ok: true });
});

// SAFE cors — explicit single trusted origin, no wildcard, no reflection
router.use('/api/v3', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://app.example.com');
    res.header('Vary', 'Origin');
    next();
});

module.exports = router;
