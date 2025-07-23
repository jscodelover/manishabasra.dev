## Typeface vs Font

- A **typeface** is the overall design (e.g., Inter), while a **font** is a specific file or style within that typeface (e.g., Inter Bold 16pt).
- Typeface is like a song; a font is like an MP3 file of that song.
- A typeface can have many fonts, each with specific values such as weight, style, and width.

### Next.js

Prefer using [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for Google and local fonts. This approach loads fonts at build time, includes the font files in your build, and allows you to specify font file subsets for auto-preloading (e.g., preload `latin` if your app supports English). This results in faster load times and better performance.

> **Tip:** For optimal font performance, consider using only the local file for the `latin` subset if your project doesn't require other character sets. This minimizes bundle size and improves load times.
