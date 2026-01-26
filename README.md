Kent Hinayon’s portfolio, built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Email (Production)

This project includes a contact form that POSTs to `/api/contact` and sends an email via SMTP on the server.

1) Install deps (already handled if you run `npm install` after pulling changes)

2) Configure environment variables

- Copy `.env.example` to `.env.local` for local development
- Set these variables in your hosting provider for production:
	- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
	- `CONTACT_TO_EMAIL`
	- Optional: `CONTACT_FROM_EMAIL`, `SMTP_SECURE`, `SMTP_VERIFY`

Notes:
- If you use Gmail, you typically need an “App Password” (not your normal password).
- The API includes basic server-side validation, a honeypot field, and a small IP-based rate limiter.

## Customize Your Content

- Hero statement + sections live in `app/page.tsx`
- Update your “Big Three” projects in the `projects` array
- Update “Currently Learning” in the `currentlyLearning` array
- Replace placeholder links (`#`) and the placeholder email (`your.email@example.com`)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy is Vercel: import the repo, then every `git push` updates your live portfolio.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
