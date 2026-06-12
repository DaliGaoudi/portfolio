# Mohamed Ali Gaoudi — Portfolio

Personal portfolio for a full-stack engineer. Single-page Next.js app with an
animated hero, project case studies, and a working contact form (email via Resend).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with OKLCH design tokens (accent: Coral)
- **Resend** for contact-form email delivery
- Fonts: Newsreader, Hanken Grotesk, JetBrains Mono (via `next/font`)
- Deploys to **Vercel** (frontend + API route, single project)

## Local development

```bash
npm install
cp .env.local.example .env.local   # then fill in your Resend key
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable             | Required | Description                                            |
| -------------------- | -------- | ------------------------------------------------------ |
| `RESEND_API_KEY`     | yes      | API key from https://resend.com                        |
| `CONTACT_TO_EMAIL`   | no       | Where messages are delivered (default in code)         |
| `CONTACT_FROM_EMAIL` | no       | From address; `onboarding@resend.dev` until you verify a domain |

The contact form works without these for validation/UI, but sending requires
`RESEND_API_KEY`.

## Contact API — `POST /api/contact`

- Validates `name`, `email`, `message` (10–4000 chars) server-side
- Honeypot field (`company`) for spam
- Rate-limited to 5 requests / 10 min per IP (in-memory; swap for Upstash if needed)
- Sends via Resend; returns `{ ok: true }` or a safe error

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import into Vercel (framework auto-detected as Next.js).
3. Add `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`)
   under **Project → Settings → Environment Variables**.
4. Deploy.

## To customize

- **Project screenshots** — drop real images into `public/` and set the `image`
  field on the matching project in `components/Work.tsx` (e.g. `image: "/smartsendr.png"`).
  Until then, a styled mock browser frame is shown.
- **Bailiff live URL** — currently a protected Vercel *preview*. Replace
  `liveUrl` in `components/Work.tsx` with a public production URL.
- **Accent color** — change the `--accent*` tokens in `app/globals.css`.

## Optional next steps (not built)

- Persist submissions / résumé downloads / page views to Postgres (Neon or
  Vercel Postgres) — the handoff's full backend spec.
- Durable rate limiting via Upstash Redis.
