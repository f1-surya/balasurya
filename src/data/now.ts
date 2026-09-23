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
    value: "Collection Ledger",
    detail:
      "Pushing the collection-management app toward something I actually rely on.",
  },
  {
    label: "Learning",
    value: "Go & systems fundamentals",
    detail:
      "HTTP, git internals, and small games written from scratch to see how things work.",
  },
  {
    label: "Reading",
    value: "Science fiction & literary",
    detail:
      "Working through a long sci-fi series and a few novels on the side; the next one is already on the way.",
  },
  {
    label: "Watching",
    value: "Formula 1",
    detail: "Race weekends, whenever the calendar lands on one.",
  },
  {
    label: "Exploring",
    value: "Linux & dotfiles",
    detail:
      "Tuning a configuration that does exactly what I need and nothing more.",
  },
];
