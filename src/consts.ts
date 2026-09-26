export const SITE_TITLE = "Balasurya Ganesamoorthi";
export const SITE_DESCRIPTION =
  "Software developer from Tamilnadu, India. I love cars and I like to code.";
export const SITE_URL = "https://surya-sigma.vercel.app";

export const AUTHOR = {
  name: "Balasurya Ganesamoorthi",
  shortName: "Surya",
  role: "Software Developer",
  line: "I love cars and I like to code.",
  location: "Virudhunagar, Tamilnadu, India",
};

export const SOCIALS = [
  { label: "GitHub", handle: "f1-surya", href: "https://github.com/f1-surya" },
  {
    label: "LinkedIn",
    handle: "balasurya-ganesamoorthi",
    href: "https://linkedin.com/in/balasurya-ganesamoorthi",
  },
  { label: "X", handle: "f1_surya", href: "https://twitter.com/f1_surya" },
  {
    label: "Instagram",
    handle: "f1_surya",
    href: "https://www.instagram.com/f1_surya/",
  },
  {
    label: "LeetCode",
    handle: "f1-surya",
    href: "https://leetcode.com/u/f1-surya/",
  },
];

export interface SectionMeta {
  id: string;
  index: string;
  nav: string;
  title: string;
  align: "left" | "right";
}

export const SECTIONS: SectionMeta[] = [
  { id: "about", index: "01", nav: "About", title: "About", align: "left" },
  {
    id: "projects",
    index: "02",
    nav: "Projects",
    title: "Projects",
    align: "right",
  },
  {
    id: "experience",
    index: "03",
    nav: "Experience",
    title: "Experience",
    align: "left",
  },
  {
    id: "technologies",
    index: "04",
    nav: "Tech",
    title: "Technologies",
    align: "right",
  },
  {
    id: "personal",
    index: "05",
    nav: "Personal",
    title: "Personal",
    align: "left",
  },
  { id: "now", index: "06", nav: "Now", title: "Now", align: "right" },
  {
    id: "contact",
    index: "07",
    nav: "Contact",
    title: "Contact",
    align: "left",
  },
];
