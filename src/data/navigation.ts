export type NavItem = {
  key: "home" | "about" | "contact";
  path: string;
  bgPath: string;
};

export const navigationItems: NavItem[] = [
  { key: "home", path: "/", bgPath: "/bg" },
  { key: "about", path: "/about", bgPath: "/bg/about" },
  { key: "contact", path: "/contact", bgPath: "/bg/contact" }
];
