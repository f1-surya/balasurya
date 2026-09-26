export interface TechGroup {
  label: string;
  note: string;
  items: string[];
}

/** Technologies drawn from the current site, the repositories, and the writing. */
export const TECH_GROUPS: TechGroup[] = [
  {
    label: "Languages",
    note: "what I reach for",
    items: ["TypeScript", "Go", "Dart", "Java", "Python"],
  },
  {
    label: "Web",
    note: "interfaces",
    items: ["React", "Next.js", "Astro", "Svelte", "Vite", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    note: "when it has to fit a pocket",
    items: ["React Native", "Flutter"],
  },
  {
    label: "Backend",
    note: "APIs and services",
    items: ["Node.js", "Express", "Spring Boot", "Echo", "Drizzle ORM"],
  },
  {
    label: "Data",
    note: "storage",
    items: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    label: "Tools",
    note: "daily environment",
    items: ["Git", "Docker", "Linux", "Vercel"],
  },
];
