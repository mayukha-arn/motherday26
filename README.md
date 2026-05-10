# motherday26 💕

A Mother's Day gift built as a Chrome extension — a tiny illustration of my mom and I based on a picture taken when I was younger. It sits in the top-right corner of every webpage, bobbing and sending hearts even when I cannot.

---

## What's in this repo

```
motherday26/
├── index.html       # GitHub Pages landing page
├── photo.jpg        # Photo displayed on the landing page
├── manifest.json    # Chrome extension manifest (MV3)
├── content.js       # Injects the animated SVG character into every page
└── content.css      # Styles and keyframe animations for the character
```

---

## The extension

The character is a hand-drawn SVG injected directly into every webpage via a content script. It requires no external libraries, no images, and no background service worker — just the three files above.

**What it does:**
- Renders a kawaii two-person illustration (mom and daughter holding hands) in the top-right corner of every page
- Both figures bob up and down independently on a loop
- The girl's left arm waves continuously
- Floating emojis (❤️ 💕 ✨ 🌟) pop up every few seconds

**How it works technically:**
- `manifest.json` declares `host_permissions: ["<all_urls>"]` and registers the content script to run on all URLs at `document_idle`
- `content.js` checks for an existing instance before injecting (prevents duplicates on SPAs like YouTube), builds the SVG DOM, and runs the emote loop via `setInterval`
- `content.css` handles all animation via CSS keyframes — `overflow: visible` on the SVG container prevents the waving arm from clipping

---

## Installing the extension locally

1. Download `manifest.json`, `content.js`, and `content.css` into a folder called `motherday26`
2. Open Chrome and go to `chrome://extensions`
3. Toggle **Developer mode** on (top-right corner)
4. Click **Load unpacked** and select the `motherday26` folder
5. Open any website — the character appears in the top-right corner

The extension does not appear on `chrome://` pages or the Chrome Web Store by design.

---

## The landing page

`index.html` is served via GitHub Pages at:

```
https://<your-username>.github.io/motherday26
```

It includes a hero section with the photo, a scrolling step-by-step installation guide, and direct download links pointing to the three extension files in this same repo. Floating hearts animate in the background and each step reveals on scroll.

To enable GitHub Pages: **Settings → Pages → Branch: main → / (root) → Save.**

---

## Customizing

To swap the photo, replace `photo.jpg` with your own image (keep the filename the same) and push to GitHub. The frame is styled at a 3:4 aspect ratio and crops from the top center, so portrait photos work best.

To change the emotes the character sends, edit this array in `content.js`:

```js
const emotes = ['❤️', '💕', '🌟', '✨', '😊', '💖'];
```

To adjust the position on screen, edit these two lines in `content.css`:

```css
top: 20px;
right: 20px;
```

---

*Made with love for the best mom. Happy Mother's Day 2026.*
