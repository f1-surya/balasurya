/**
 * IMPORTANT — keep prettier-plugin-tailwindcss pinned to 0.7.x.
 *
 * prettier-plugin-tailwindcss@0.8.x wraps the Astro printer incorrectly when
 * used with prettier-plugin-astro@0.14.1 on Prettier 3.5.3: formatting an
 * `.astro` file emits an empty `<object></object>` document, and
 * `prettier --write` silently overwrites every `.astro` file with it.
 * 0.7.4 sorts Tailwind classes correctly and leaves Astro files intact.
 *
 * prettier-plugin-tailwindcss MUST be listed last.
 *
 * @type {import("prettier").Config}
 */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/global.css",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
