export type Motif =
  | "ledger"
  | "kanban"
  | "terminal"
  | "signal"
  | "network"
  | "grid";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  index: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  stack: string[];
  motif: Motif;
  links: ProjectLink[];
}

/**
 * Project data is grounded in the repositories at github.com/f1-surya and the
 * writing already published on this site. Update this file to update the
 * projects section.
 */
export const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Collection Ledger",
    tagline: "A real problem, finally digitised.",
    description:
      "A collection-management app that started as a Java REST API, then became a full-stack Next.js application. After using v2 for four months, I rebuilt it again with SvelteKit and added features based on what I learned from using it.",
    year: "2025 —",
    stack: ["Sveltekit", "TypeScript", "Postgres", "Drizzle ORM"],
    motif: "ledger",
    links: [
      { label: "Live", href: "https://cl-svelte.vercel.app" },
      {
        label: "v2 · Next.js",
        href: "https://github.com/f1-surya/collection-ledger",
      },
      {
        label: "v1 · Java API",
        href: "https://github.com/f1-surya/collection-ledger-api",
      },
    ],
  },
  {
    index: "02",
    name: "Yavarum",
    tagline: "A website for accessibility work.",
    description:
      "A website designed and built for Yavarum to present their accessibility services and work.",
    year: "2026",
    stack: ["Astro", "TypeScript"],
    motif: "grid",
    links: [{ label: "Live", href: "https://yavarum.com" }],
  },
  {
    index: "03",
    name: "TNMDA",
    tagline: "A website for a nonprofit.",
    description:
      "A website designed and built for TNMDA to present their work, services, community programs, and ways to get involved.",
    year: "2026",
    stack: ["Astro", "TypeScript"],
    motif: "signal",
    links: [{ label: "Live", href: "https://tnmda.org" }],
  },
  {
    index: "04",
    name: "Geoscope",
    tagline: "Exploring gene-expression data.",
    description:
      "An interface for exploring datasets from the Gene Expression Omnibus.",
    year: "2026",
    stack: ["Python"],
    motif: "network",
    links: [
      {
        label: "Code",
        href: "https://github.com/f1-surya/geoscope",
      },
    ],
  },
];
