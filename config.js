/**
 * DEMO FILE — intentional vulnerabilities for security scanner showcase.
 *
 * Secrets       : multiple hardcoded production credentials across AWS, Stripe, Slack,
 *                 OpenAI, database — all categories that secret scanners target
 * Compliance    : credentials should be injected via environment variables or vault;
 *                 committing live keys violates PCI-DSS, SOC 2, and GDPR controls
 * Hygiene       : no .gitignore exclusion, no secret rotation policy
 */

'use strict';

// SECRETS — CWE-798: production credentials hardcoded and committed to version control

module.exports = {

  database: {
    host    : 'prod-mysql.acmecorp.internal',
    port    : 3306,
    user    : 'app_admin',
    password: 'MyPr0dDB@Passw0rd!',   // Live production DB password
    name    : 'production',
  },

  redis: {
    host    : 'prod-redis.acmecorp.internal',
    port    : 6379,
    password: 'Redis@Secr3t!2024',
  },

  aws: {
    accessKeyId    : 'AKIAIOSFODNN7EXAMPLE',                       // AWS IAM key
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY', // AWS IAM secret
    region         : 'us-east-1',
    s3Bucket       : 'acmecorp-prod-uploads',
  },

  stripe: {
    secretKey     : 'sk_live_51ABCDEFghijklmnopqrstuvwxyz1234567890EXAMPLE', // Live Stripe key
    webhookSecret : 'whsec_ExampleWebhookSigningSecret1234567890abcdef',
    publishableKey: 'pk_live_51ABCDEFghijklmnopqrstuvwxyz0987654321EXAMPLE',
  },

  sendgrid: {
    apiKey: 'SG.ExampleSendGridAPIKeyABCDEFGHIJKLMNOPQRSTUVWXYZ123456',
  },

  slack: {
    botToken      : 'xoxb-EXAMPLE-SLACK-BOT-TOKEN-12345678901234567890abcdef',
    signingSecret : 'slack_signing_secret_example_abc123def456ghi789',
  },

  openai: {
    apiKey        : 'sk-proj-ExampleOpenAIKeyABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
    organizationId: 'org-ExampleOrgIdABCDEFGHIJKLMNOP',
  },

  github: {
    personalAccessToken: 'ghp_ExampleGitHubPATABCDEFGHIJKLMNOPQRS12345',
    webhookSecret      : 'github_webhook_secret_example_xyz789',
  },

  jwt: {
    secret   : 'super-secret-jwt-signing-key-do-not-commit',
    expiresIn: '7d',
  },

  internal: {
    adminBypassKey: 'MASTER_KEY_2024_admin_override_abc123',
    debugToken    : 'debug_token_internal_use_only_xyz456',
  },
};
