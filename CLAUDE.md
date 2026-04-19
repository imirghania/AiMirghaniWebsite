# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server on port 3000
pnpm build        # Type-check (astro check) then build
pnpm preview      # Preview the production build
pnpm check        # Run Biome linter/formatter (--apply-unsafe)
```

## Architecture

This is an **Astro SSR site** (output: `"server"`) deployed on **Netlify** via `@astrojs/netlify`. The live URL is `https://ahmed.imirghani.com/`.

**Key integrations:**
- **Tailwind CSS + DaisyUI** — utility styling
- **Vue 3** — interactive components (via `@astrojs/vue`)
- **MDX** — blog posts with math support (KaTeX via `remark-math` + `rehype-katex`)
- **rehype-pretty-code** — Dracula-themed syntax highlighting
- **astro-icon** — SVG icon system; custom SVG icons live in `src/icons/`

**Content collections** (`src/content/config.ts`):
- `blog` — `.md` and `.mdx` files in `src/content/blog/`. Required frontmatter: `title`, `description`, `pubDate`, `author`, `image`, `tags`. Optional: `imageSrc`, `isPublished`.
- `projects` — `.md` files in `src/content/projects/`. Required: `title`, `description`, `pubDate`, `image`, `url`. Optional: `tags`, `isPublished`.

**Static data** (`src/setupCollections/`): JSON files drive dynamic sections on the site — `skills.json`, `tools.json`, `experiences.json`, `education.json`, `projects.json`, `menu.json`. These are imported directly in components, not through Astro content collections.

**Path aliases** (defined in `tsconfig.json`):
- `@root/*` → `src/*`
- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@content/*` → `src/content/*`
- `@setupCollections/*` → `src/setupCollections/*`

**Layouts:** `src/layouts/main.astro` is the primary wrapper (wraps `mainHead.astro`). Most pages use `<MainLayout>`.

**Pages:**
- `/` — homepage with typewriter intro, recent posts, projects
- `/blog` — paginated post listing; `/blog/article/[...slug]` — individual posts
- `/blog/tag/[...tag]` — posts filtered by tag
- `/projects` — project grid
- `/about` — about page (pulls text from `src/pages/texts/aboutMe.md`)
- `/rss.xml` — RSS feed

**Linting:** Biome (`biome.json`) with recommended rules + organized imports. Run via `pnpm check`.

**Markdown/MDX config** (`configOptions.js`): rehype-pretty-code options (Dracula theme) and rehype-autolink-headings options are exported from here and imported in `astro.config.mjs`.

**Site constants** (`src/constants.ts`): pagination limits, site metadata, and social URLs are centralized here.
