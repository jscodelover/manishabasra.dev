## Browser

### Typeface vs Font

- A **typeface** is the overall design (e.g., Inter), while a **font** is a specific file or style within that typeface (e.g., Inter Bold 16pt).
- Typeface is like a song; a font is like an MP3 file of that song.
- A typeface can have many fonts, each with specific values such as weight, style, and width.

### Next.js

Prefer using [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for Google and local fonts. This approach loads fonts at build time, includes the font files in your build, and allows you to specify font file subsets for auto-preloading (e.g., preload `latin` if your app supports English). This results in faster load times and better performance.

> **Tip:** For optimal font performance, consider using only the local file for the `latin` subset if your project doesn't require other character sets. This minimizes bundle size and improves load times.

## Storybook

### Custom render functions

If we want to add custom render function to render multiple component or to customize the store from the default component, then make sure you stories file has `.jsx` or `.tsx` extension.

## CSS

### Color Schema media query

The prefers-color-scheme media feature allows CSS to detect a user’s OS or browser theme preference—light or dark—and apply styles conditioned on that.

```css
@media (prefers-color-scheme: light) {
  /* light-mode styles */
}

@media (prefers-color-scheme: dark) {
  /* dark-mode styles */
}
```

To detect the theme in JS:

```JS
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// we can add listener
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  console.log('Now dark mode is', e.matches);
});
```

You can use meta tag tells the browser upfront whether your site handles light, dark, or both. Prevent flash of wrong theme

```html
<meta name="color-scheme" content="light dark" />
```

> **Question 🙋🏻: When your CSS hasn't loaded yet—or during a slow connection. How will this meta tag helps❓**
>
> The meta tag ensures user-agent-controlled UI matches the user’s theme preference before CSS loads. It stops browsers from briefly showing the wrong theme—eliminating that annoying flash of light or dark.
> You can have a thing CSS to tell which color-schema we support so that the browser rendered UI control and be color accordingly

```CSS
:root {
  color-scheme: light dark;
}
```

## Typescript

### `satisfies` Operator

TypeScript’s `satisfies` operator (introduced in TS 4.9) provides a safer alternative to type assertions and annotations. It checks that a value conforms to a specified type, while preserving the value’s more specific inferred type.

Use `satisfies` when you want to ensure an object matches a type without widening its type or losing autocomplete and type inference.

```ts
// Using type annotation: type is widened, less specific
const subject1: Record<string, number | string> = {};
subject1.maths = 100;
subject1.english = '94.05';

// Using satisfies: type is checked, but object keeps its specific shape
const subject2 = {
  maths: 100,
  english: '94.05',
} satisfies Record<string, number | string>;
```

- `satisfies` checks that `subject2` matches the type, but `subject2` still has its exact keys and types inferred.
- Use type annotation when you want to allow any keys; use `satisfies` when you want to check compatibility but keep precise types.
