# Solterra Grand

Resort booking web app (portfolio project) with a scroll-driven marketing site and an authenticated member portal. Members sign in with Google, reserve stays, and cancel them. Built solo with Next.js, TypeScript, Tailwind CSS, Auth.js and Supabase.

**Live:** [solterra-grand.vercel.app](https://solterra-grand.vercel.app/)

<img width="1920" height="998" alt="image" src="https://github.com/user-attachments/assets/64bec972-2e93-4e86-9533-d250f249a26a" />


<img width="1920" height="998" alt="image" src="https://github.com/user-attachments/assets/8f13fc10-55f9-4969-9caa-2b22d981fbd5" />


## Features

- Five-level scroll landing page (Arrival, Social Hub, Residences, Pools, Beach & Cove)
- Google sign-in via Auth.js (NextAuth v5); a member record is created on first sign-in
- Create and cancel bookings with instant UI updates
- User profile management
- Responsive on desktop and mobile, including short phone screens

## Scope

This is a portfolio project, not a production reservation system. It covers authentication and the booking create/cancel flow. It does not include payments, room inventory, or an admin side.

## Tech Stack

| Area | Choice |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS |
| Auth | Auth.js (NextAuth v5), Google provider |
| Database / storage | Supabase (Postgres, image hosting) |
| Deployment | Vercel |

## Technical decisions

- **Server rendering:** Homepage state was restructured so most of the page renders on the server, reducing the JavaScript sent to the browser.
- **Booking security:** Cancellations verify on the server that the booking belongs to the signed-in member before processing.
- **Short-screen layouts:** Fixed breakage on short phone screens with a sizing system based on screen height instead of fixed breakpoints.
- **Image weight:** Moved 13 large images to cloud storage, cutting the app by 13.3 MB and serving right-sized images per device.

## Getting Started

```bash
git clone https://github.com/Trowlips/Solterra-Grand.git
cd Solterra-Grand
npm install
cp .env.example .env.local   # fill in your own values
npm run dev
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in your own values:

| Variable | Purpose |
|---|---|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_KEY` | Supabase public (anon) key |
| `SUPABASE_SECRET` | Supabase service role key. Server-side only, never expose to the browser |
| `NEXTAUTH_URL` | App base URL (`http://localhost:3000` locally) |
| `NEXTAUTH_SECRET` | Random string used to sign sessions. Generate with `npx auth secret` or `openssl rand -base64 32` |
| `AUTH_GOOGLE_ID` | Google OAuth client ID |
| `AUTH_GOOGLE_SECRET` | Google OAuth client secret |

Requires your own Supabase project and a Google OAuth app. Add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI in the Google console.
