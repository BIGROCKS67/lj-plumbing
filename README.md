# L J Plumbing & Heating

Rebuild of ljplumbheat.co.uk. Banbury trade site.

## Live

- **Live:** https://www.ljplumbheat.co.uk
- **Repo:** https://github.com/BIGROCKS67/lj-plumbing
- Old WordPress still on `ljplumbheat.co.uk` until we flip DNS.

## Dev

```bash
npm install
npm run dev
```

http://localhost:3040

## DNS (when we flip — not yet)

Same playbook as SMH. Read `../EXISTING-DOMAIN-GO-LIVE.md`.

**Do not touch Outlook MX.**

| Type | Name | Value |
|------|------|--------|
| CNAME | `www` | `bigrocks67.github.io` |
| A | `@` | leave `185.151.30.184` (20i) + 301 to www |
| MX | `@` | `ljplumbheat-co-uk.mail.protection.outlook.com` — leave |

Pages custom domain: `www.ljplumbheat.co.uk` only. Set it once, after the www CNAME is in.
