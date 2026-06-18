# WhereToWatchSportz — Setup Guide

## Your Tech Stack (All Free)
- **GitHub** → stores your website files + auto-deploys on every change
- **Cloudflare Pages** → hosts the site globally, super fast
- **Decap CMS** → your /admin dashboard to write posts without touching code
- **Cloudflare DNS** → you already have this for your domain

---

## STEP 1 — Create a GitHub Account & Repo

1. Go to https://github.com and sign up (free)
2. Click the **+** icon → **New repository**
3. Name it: `wheretowatchsportz`
4. Set it to **Public**
5. Click **Create repository**

---

## STEP 2 — Upload the Site Files

1. In your new repo, click **"uploading an existing file"** (shown on the empty repo page)
2. Drag and drop ALL the files from the ZIP you downloaded
   - Make sure the folder structure is: `public/`, `public/admin/`, `public/css/`, `public/js/`
3. Scroll down, click **"Commit changes"**

Your files are now on GitHub ✅

---

## STEP 3 — Connect GitHub to Cloudflare Pages

1. Log into **Cloudflare Dashboard** → https://dash.cloudflare.com
2. In the left sidebar click **"Workers & Pages"**
3. Click **"Create application"** → **"Pages"** → **"Connect to Git"**
4. Click **"Connect GitHub"** → authorize Cloudflare
5. Select your `wheretowatchsportz` repo
6. In Build settings:
   - **Framework preset:** None
   - **Build command:** leave EMPTY
   - **Build output directory:** `public`
7. Click **"Save and Deploy"**

Cloudflare will give you a URL like `wheretowatchsportz.pages.dev` — your site is live! ✅

---

## STEP 4 — Connect Your Custom Domain

1. In Cloudflare Pages, go to your project → **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Type: `wheretowatchsportz.com`
4. Since your DNS is already on Cloudflare, it will auto-configure ✅
5. Also add: `www.wheretowatchsportz.com`

SSL certificate is automatic — no extra steps.

---

## STEP 5 — Set Up Decap CMS (Your /admin dashboard)

This gives you a visual editor at `wheretowatchsportz.com/admin`

### 5a — Enable GitHub OAuth via Cloudflare

1. Go to your GitHub → **Settings** → **Developer settings** → **OAuth Apps**
2. Click **"New OAuth App"**
   - Application name: `WTWS CMS`
   - Homepage URL: `https://wheretowatchsportz.com`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
3. Click **Register application**
4. Copy the **Client ID** and generate a **Client Secret** — save both

### 5b — Add to Cloudflare Pages Environment Variables

1. In Cloudflare Pages → your project → **Settings** → **Environment variables**
2. Add these two:
   - `GITHUB_CLIENT_ID` = (your client ID from above)
   - `GITHUB_CLIENT_SECRET` = (your client secret from above)

### 5c — Edit the CMS config

In your GitHub repo, open `public/admin/config.yml`
Change this line:
```
repo: YOUR_GITHUB_USERNAME/wheretowatchsportz
```
To your actual GitHub username, e.g.:
```
repo: johndoe/wheretowatchsportz
```
Commit the change — Cloudflare auto-deploys in ~30 seconds.

---

## STEP 6 — Write Your First Post!

1. Go to: `https://wheretowatchsportz.com/admin`
2. Log in with GitHub
3. Click **"Posts / Guides"** → **"New Post"**
4. Fill in the title, sport, summary, and body
5. Click **"Publish"** → it saves to GitHub → site updates in 30 seconds ✅

---

## Daily Workflow After Setup

To update the site:
- Go to `wheretowatchsportz.com/admin`
- Write or edit content
- Hit Publish
- Done — no code, no ZIP files, no servers

To update streaming info on sport pages:
- Go to GitHub.com → your repo → `public/cricket.html`
- Click the pencil ✏️ icon to edit
- Make your changes
- Click "Commit changes"
- Cloudflare auto-deploys in 30 seconds

---

## File Structure Reference

```
wheretowatchsportz/
├── public/
│   ├── index.html          ← Homepage
│   ├── cricket.html        ← Cricket page
│   ├── football.html       ← Football page (add yourself)
│   ├── f1.html             ← F1 page (add yourself)
│   ├── tennis.html         ← Tennis page (add yourself)
│   ├── platforms.html      ← Full platforms page (add yourself)
│   ├── posts.html          ← Guides listing page (add yourself)
│   ├── css/
│   │   └── style.css       ← All styling
│   ├── js/
│   │   └── main.js         ← Search + mobile menu
│   └── admin/
│       ├── index.html      ← Decap CMS loader
│       └── config.yml      ← CMS content configuration
```

---

## Need Help?

- Decap CMS docs: https://decapcms.org/docs/
- Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- GitHub basics: https://docs.github.com/en/get-started
