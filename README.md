# 🌱 Jade's Website — Getting Started Guide

Hey Jade! This guide will walk you through everything from "I've never done this before" to "my website is live on the internet." Take it one step at a time. There's no rush.

---

## What's in this project?

Here's what each file/folder does (you don't need to memorize this):

```
jade-site/
├── public/              ← Static files (favicon, images you add later)
├── src/
│   ├── content/
│   │   └── blog/        ← 📝 YOUR BLOG POSTS GO HERE (just text files!)
│   ├── layouts/         ← Templates that control how pages look
│   ├── pages/           ← The actual pages of your site
│   └── styles/          ← All the visual styling
├── astro.config.mjs     ← Site settings
├── package.json         ← Project info
├── netlify.toml         ← Tells Netlify how to build your site
└── README.md            ← This file!
```

**The only folder you'll touch regularly is `src/content/blog/`** — that's where you add new blog posts.

---

## Step 1: Install the tools you need

You need two things on your computer. These are one-time installs.

### 1A: Install Node.js
Node.js is what runs your site locally (on your computer).

1. Go to https://nodejs.org
2. Download the **LTS** version (the big green button)
3. Run the installer — just click "Next" through everything
4. To verify it worked, open **Terminal** (Mac) or **Command Prompt** (Windows):
   ```
   node --version
   ```
   If you see a number like `v20.x.x`, you're good!

### 1B: Install Git
Git tracks your changes and connects to GitHub.

1. Go to https://git-scm.com/downloads
2. Download for your operating system
3. Run the installer (defaults are fine)
4. Verify:
   ```
   git --version
   ```

### 1C: Install a code editor
You need something to edit files. I recommend **VS Code** — it's free and beginner-friendly.

1. Go to https://code.visualstudio.com
2. Download and install it
3. That's it!

---

## Step 2: Set up the project on your computer

1. Put the `jade-site` folder somewhere easy to find (like your Desktop or Documents)

2. Open **Terminal** (Mac) or **Command Prompt** (Windows)

3. Navigate to the folder:
   ```
   cd Desktop/jade-site
   ```
   (adjust the path to wherever you put it)

4. Install the project dependencies:
   ```
   npm install
   ```
   This will take a minute. You'll see a lot of text — that's normal!

5. Start your site locally:
   ```
   npm run dev
   ```

6. Open your browser and go to: **http://localhost:4321**

🎉 **You should see your website!** It's running on your computer. Only you can see it for now.

To stop it, press `Ctrl + C` in the terminal.

---

## Step 3: Create a GitHub account and repository

GitHub is where your site's code lives online. Netlify watches it and automatically updates your live site when you make changes.

### 3A: Create a GitHub account
1. Go to https://github.com
2. Sign up for a free account

### 3B: Create a new repository
1. Click the **+** button in the top right → **New repository**
2. Name it: `jade-site` (or whatever you like)
3. Keep it **Public** (free hosting requires this)
4. Do NOT check "Add a README" (we already have one)
5. Click **Create repository**

### 3C: Connect your local folder to GitHub
GitHub will show you instructions after creating the repo. In your terminal (make sure you're in the jade-site folder):

```
git init
git add .
git commit -m "first commit - my website!"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/jade-site.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

If it asks for your password, you may need to create a **Personal Access Token**:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with "repo" permissions
3. Use that token as your password

---

## Step 4: Deploy on Netlify (make it live!)

1. Go to https://app.netlify.com and sign up **using your GitHub account**
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Select your `jade-site` repository
5. Netlify will auto-detect the settings (thanks to our `netlify.toml` file):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy**
7. Wait 1-2 minutes...

🎉 **Your site is live!** Netlify gives you a URL like `random-name-123.netlify.app`

To get a nicer URL:
- Go to **Site settings** → **Change site name** → type something like `jadeduong`
- Your URL becomes: **jadeduong.netlify.app**

---

## Step 5: How to write a new blog post

This is the part you'll do over and over. It's simple!

### 5A: Create a new file
In the `src/content/blog/` folder, create a new file. Name it with dashes, like:
```
my-new-post-title.md
```

### 5B: Add the header info
Every post starts with this block (copy and paste it):
```
---
title: "Your Post Title Here"
date: 2026-03-01
tag: "Reflection"
description: "A short description of what this post is about."
layout: ../../layouts/BlogPost.astro
---
```

Change the title, date, tag, and description to match your post.
Tags can be anything: Reflection, Making, Process, Life, Learning, etc.

### 5C: Write your post below the header
Just write in plain text! Some formatting you can use:

```markdown
## This is a heading

This is a regular paragraph.

**This text is bold** and *this is italic*.

> This is a quote block

- This is a bullet point
- Another bullet point

[This is a link](https://example.com)
```

### 5D: Preview it
Run `npm run dev` and check http://localhost:4321 — your new post should appear!

### 5E: Publish it
In your terminal:
```
git add .
git commit -m "new blog post: my post title"
git push
```

Netlify will automatically rebuild and publish. Your post is live in about a minute!

---

## Step 6: How to edit your site content

### Changing the homepage text
Edit the file: `src/pages/index.astro`
The text is plain HTML — find what you want to change and change it.

### Updating project cards
In the same `index.astro` file, find the project cards and edit the titles, descriptions, and tags.

### Changing the look
Edit `src/styles/global.css` — the colors are at the top in the `:root` section. Try changing `--accent` to a different color!

---

## Quick reference: Terminal commands you'll use

| What you want to do | Command |
|---|---|
| Go to your project folder | `cd path/to/jade-site` |
| Start the site locally | `npm run dev` |
| Stop the local site | `Ctrl + C` |
| Save your changes to Git | `git add .` |
| Describe what you changed | `git commit -m "description here"` |
| Push changes live | `git push` |
| See what files changed | `git status` |

---

## If something goes wrong

**"command not found"** → The tool isn't installed. Revisit Step 1.

**"npm install" gives errors** → Make sure you're in the `jade-site` folder. Try `cd jade-site` first.

**Site doesn't update after push** → Check Netlify dashboard for build errors. Usually it's a typo in a blog post header.

**Blog post doesn't show up** → Make sure the file is in `src/content/blog/` and has the correct header format (the `---` block at the top).

**Need help?** → Paste the error message into Claude or ChatGPT and ask what it means. That's vibe coding!

---

## You've got this! 💪

Remember — everything on your site is a work in progress. That's kind of the whole point.

The first push is the hardest. After that, adding a blog post takes about 5 minutes. You write, you push, it's live.

Welcome to building in public, Jade.
