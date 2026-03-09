# Deploy Mannsion Group to Vercel via GitHub

## 1. Create the GitHub repository (from your project folder)

In Terminal, from `mannsion-group-revamp`:

```bash
cd /Users/ian/mannsion-group-revamp

# Initialize git (if not already)
git init

# Stage and commit
git add -A
git commit -m "Initial commit: Mannsion Group site"

# Create repo on GitHub (requires GitHub CLI: brew install gh && gh auth login)
gh repo create mannsion-group-revamp --private --source=. --remote=origin --push
```

**If you don't use GitHub CLI:** create the repo on [github.com/new](https://github.com/new) (name it e.g. `mannsion-group-revamp`), then run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/mannsion-group-revamp.git
git branch -M main
git push -u origin main
```

## 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use “Continue with GitHub” if you use GitHub).
2. Click **Add New…** → **Project**.
3. Import the **mannsion-group-revamp** repository.
4. Leave **Framework Preset** as “Other” (or “Vite” only if you add a build step later). For a static `index.html` site, no build is needed.
5. **Root Directory:** leave as `.` (or set to `mannsion-group-revamp` if the repo root is the parent folder).
6. Click **Deploy**.

Vercel will serve `index.html` at the root and your site will be live. Future pushes to `main` will trigger automatic deployments.
