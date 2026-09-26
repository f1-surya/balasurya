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
    text: "Ask me about it and I will not stop talking. I'll die on the Max Verstappen is the best driver hill.",
    icon: "flag",
  },
  {
    title: "Films",
    meta: "all genres",
    text: "I watch a lot of movies, nothing particular. I just want a film with a decent story and good screenplay. I am a fan of monologues, like Pacino at 'Scent of a Woman'.",
    icon: "film",
  },
  {
    title: "Books",
    meta: "still exploring",
    text: "I've only recently started reading seriously, so I don't know what I like yet. My favorites so far are The Hobbit and Dune.",
    icon: "book",
  },
  {
    title: "Linux",
    meta: "open source",
    text: "A long-time Linux user and an admirer of open source. Currently running Omarchy, my 5th distro.",
    icon: "terminal",
  },
];
