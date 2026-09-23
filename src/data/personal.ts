export interface Interest {
  title: string;
  text: string;
  icon: "car" | "flag" | "film" | "gamepad" | "book" | "terminal";
  /** optional large mono annotation, e.g. a year or a category */
  meta?: string;
}

/** The personal side — drawn from the interests already described on this site. */
export const INTERESTS: Interest[] = [
  {
    title: "Cars",
    meta: "V10 / manual",
    text: "European sports cars — Porsche, Koenigsegg, Lamborghini. A particular weakness for a big naturally-aspirated engine and a manual gearbox.",
    icon: "car",
  },
  {
    title: "Formula 1",
    meta: "race weekends",
    text: "Ask me about it and I will not stop talking. I follow the season race by race and enjoy the engineering as much as the racing.",
    icon: "flag",
  },
  {
    title: "Films",
    meta: "all genres",
    text: "I watch a lot of films and I'll give almost any genre a chance — quiet dramas, crime, science fiction, whatever the evening calls for. Atmosphere and craft matter to me more than the label.",
    icon: "film",
  },
  {
    title: "Games",
    meta: "survival",
    text: "Mostly Minecraft lately. I recently made it to the end and defeated the ender dragon.",
    icon: "gamepad",
  },
  {
    title: "Books",
    meta: "sci-fi / literary",
    text: "Science fiction, literary and contemporary fiction, and the occasional long fantasy epic. I like a big book that takes its time and earns it.",
    icon: "book",
  },
  {
    title: "Linux",
    meta: "open source",
    text: "A long-time Linux user and an admirer of open source. The dotfiles are a project of their own at this point.",
    icon: "terminal",
  },
];
