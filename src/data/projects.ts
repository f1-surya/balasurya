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
      "A collection-management product built as a set of clients around a Java API — a TypeScript web app, a mobile companion, and a lite edition. It started as a small tool for a monthly, manual chore and grew into something with a real architecture.",
    year: "2025 —",
    stack: ["TypeScript", "Java", "Spring Boot", "REST API", "Docker"],
    motif: "ledger",
    links: [
      { label: "Live", href: "https://collection-ledger.vercel.app" },
      { label: "Web", href: "https://github.com/f1-surya/collection-ledger" },
      {
        label: "API",
        href: "https://github.com/f1-surya/collection-ledger-api",
      },
    ],
  },
  {
    index: "02",
    name: "git-go",
    tagline: "Git, from the inside.",
    description:
      "An attempt to understand version control by rebuilding its core in Go with nothing but the standard library — add, commit, status, log and revert. Built to stop treating the tools I use every day as magic.",
    year: "2025",
    stack: ["Go", "Standard Library", "CLI"],
    motif: "network",
    links: [{ label: "Code", href: "https://github.com/f1-surya/git-go" }],
  },
  {
    index: "03",
    name: "Customer List Renamer",
    tagline: "A small tool that saved real hours.",
    description:
      "A command-line utility that renames a cable-TV customer list by matching smartcard numbers. It replaced hours of manual spreadsheet work, and it is still one of the most immediately useful things I have written.",
    year: "2025",
    stack: ["Go", "CLI"],
    motif: "signal",
    links: [
      {
        label: "Code",
        href: "https://github.com/f1-surya/customer-list-renamer",
      },
    ],
  },
  {
    index: "04",
    name: "go-http",
    tagline: "The web, from first principles.",
    description:
      "A basic HTTP implementation in Go, built purely to see how the protocol fits together. No framework, no shortcuts — just request parsing, routing and responses written by hand for the education.",
    year: "2026",
    stack: ["Go", "HTTP", "Networking"],
    motif: "terminal",
    links: [{ label: "Code", href: "https://github.com/f1-surya/go-http" }],
  },
];
