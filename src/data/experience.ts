export interface Role {
  company: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
}

/** Sourced from the experience already listed on this site. */
export const EXPERIENCE: Role[] = [
  {
    company: "Gester",
    role: "Software Developer",
    period: "Oct 2024 — Nov 2024",
    summary:
      "Built an ordering application for a tiffin service, working across the interface and the data behind it.",
    stack: ["Next.js", "React"],
  },
  {
    company: "Last 2 Brain Cells",
    role: "Full-Stack Developer",
    period: "Jun 2023 — Jun 2024",
    summary:
      "Built websites with the MERN stack and mobile applications with Flutter and Firebase, end to end.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Flutter", "Firebase"],
  },
];
