export interface NowItem {
  label: string;
  value: string;
  detail: string;
}

/**
 * Edit this file to keep the "Now" section current. Bump NOW_UPDATED whenever
 * you change anything below.
 */
export const NOW_UPDATED = "September 2026";

export const NOW: NowItem[] = [
  {
    label: "Building",
    value: "Freelance",
    detail: "Doing some freelance projects that I get through my network.",
  },
  {
    label: "Reading",
    value: "Dune: Messiah",
    detail:
      "Just finished Dune. Waiting for Dune: Messiah to arrive. I'm also planning on reading The Postmaster by Rabindranath Tagore.",
  },
  {
    label: "Watching",
    value: "Formula 1",
    detail:
      "I'll watch races when they're on. Its not so interesting this year due to the regs.",
  },
];
