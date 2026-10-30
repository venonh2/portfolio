<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

## Setup

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Run tests: `npm test`

## Code style

- TypeScript strict mode; no `any` without a justifying comment.
- Prefer Server Components; add 'use client' only when a component needs interactivity.
- Co-locate route code under `app/`; shared UI in `components/`.
- Make use of tailwind css

## Guardrails

Things agents get wrong here. Follow these strictly:

- Never edit files in `.next/` — they are build output.
- Don’t fetch on the client when a Server Component can fetch on the server.
- Never commit secrets, API keys, or `.env` files.

<!-- END:nextjs-agent-rules -->
