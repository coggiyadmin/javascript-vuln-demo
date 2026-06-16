/**
 * DEMO FILE — intentional vulnerabilities for security scanner showcase.
 *
 * CWE findings  : CWE-943 (NoSQL Injection — user input in MongoDB queries),
 *                 CWE-601 (Open Redirect — user-controlled redirect target),
 *                 CWE-942 (CORS Wildcard — Access-Control-Allow-Origin: *),
 *                 CWE-346 (CORS Reflected Origin — dynamic origin echoed back),
 *                 CWE-614 (Insecure Cookie — missing Secure/HttpOnly flags),
 *                 CWE-117 (Log Injection — user input in log messages)
 * Secrets       : MongoDB Atlas URI, Twilio SID/token hardcoded
 */

'use strict';
const express  = require('express');
const mongoose = require('mongoose');
const router   = express.Router();

// CWE-798: hardcoded production credentials
const MONGO_URI      = 'mongodb+srv://admin:Pr0dP%40ss@cluster0.abcde.mongodb.net/app';
const TWILIO_SID     = 'ACabcdef1234567890abcdef1234567890';
const TWILIO_TOKEN   = 'abcdef1234567890abcdef1234567890AB';
const SENDGRID_KEY   = 'SG.abcdefghijklmnopqrstuvwxyz.ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdef';

// CWE-943: NoSQL Injection — user input directly in MongoDB query
router.get('/users', async (req, res) => {
    const { username, role } = req.query;
    // Attacker sends ?username[$ne]=x&role[$gt]= to bypass filters
    const users = await mongoose.connection.db.collection('users').find({
        username,
        role,
    }).toArray();
    res.json(users);
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // CWE-943: attacker sends {"username": {"$gt": ""}, "password": {"$gt": ""}}
    const user = await mongoose.connection.db.collection('users').findOne({
        username,
        password,
    });
    res.json({ authenticated: !!user });
});

router.get('/products', async (req, res) => {
    const filter = req.query.filter;
    // CWE-943: raw query object from user passed to aggregate
    const results = await mongoose.connection.db
        .collection('products')
        .aggregate([{ $match: filter }])
        .toArray();
    res.json(results);
});

// CWE-601: Open Redirect — user controls Location header
router.get('/login-redirect', (req, res) => {
    const next = req.query.next || '/dashboard';
    // No validation of next — attacker sends ?next=https://evil.com/phish
    res.redirect(next);
});

router.get('/oauth/callback', (req, res) => {
    const returnTo = req.query.return_to;
    res.redirect(returnTo);  // CWE-601: unvalidated redirect
});

// CWE-942: CORS Wildcard — any origin allowed
router.use('/api/public', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// CWE-346: CORS Reflected Origin — echoes back whatever Origin header the client sends
router.use('/api/v2', (req, res, next) => {
    const origin = req.headers['origin'];
    // Reflects attacker-controlled origin — allows any site to make credentialed requests
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

// CWE-614: Insecure Cookie — missing Secure and HttpOnly flags
router.post('/session/create', (req, res) => {
    const { userId, role } = req.body;
    // No Secure flag: transmitted over HTTP; No HttpOnly: accessible to XSS
    res.cookie('session_token', userId + ':' + role, {
        maxAge: 86400000,
        // Missing: secure: true, httpOnly: true, sameSite: 'strict'
    });
    res.cookie('auth_token', 'Bearer_' + userId, { path: '/' });
    res.json({ status: 'session created' });
});

router.get('/remember-me', (req, res) => {
    const token = req.query.token;
    res.cookie('remember_token', token, { maxAge: 2592000000 }); // 30 days, no Secure
    res.json({ remembered: true });
});

// CWE-117: Log Injection — raw user input in log messages
router.post('/events', (req, res) => {
    const { action, userId } = req.body;
    // Attacker injects \n[ADMIN] Privileged action performed to forge log lines
    console.log(`[AUDIT] action=${action} user=${userId} ip=${req.ip}`);
    console.warn(`Event recorded: ${action} by ${req.headers['x-forwarded-for']}`);
    res.json({ logged: true });
});

module.exports = router;
