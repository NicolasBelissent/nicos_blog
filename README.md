# Nicolas Belissent's Blog

Personal blog and photo portfolio built with Astro.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📸 Managing Photos

To add new photos:

1. Add images to `public/images/{country}/`
2. Run `npm run photos` to auto-generate the data file
3. Commit and push changes

## 💻 Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production |
| `npm run photos` | Auto-generate photo data from images |

## 📝 Adding Blog Posts

1. Create a new folder in `src/content/blog/your-post-name/`
2. Add `index.md` with frontmatter:
   ```yaml
   ---
   title: "Your Title"
   description: "Description"
   date: "Month DD YYYY"
   ---
   ```
3. Reference images from the centralized photo bank

## 🌍 Live Site

https://nicobelissent.com

Built with Astro, Tailwind CSS, and deployed on Cloudflare Pages.
