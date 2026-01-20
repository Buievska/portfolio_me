export interface Skill {
  id: number;
  label: string;
  iconId: string;
}

export const skillsData: Skill[] = [
  { id: 1, label: "HTML", iconId: "icon-html" },
  { id: 2, label: "CSS", iconId: "icon-css" },
  { id: 3, label: "Sass", iconId: "icon-sass" },
  { id: 4, label: "JavaScript", iconId: "icon-js" },
  { id: 5, label: "TypeScript", iconId: "icon-ts" },
  { id: 6, label: "React", iconId: "icon-react" },
  { id: 7, label: "Next.js", iconId: "icon-nextjs" },
  { id: 8, label: "Node.js", iconId: "icon-nodejs" },
  { id: 9, label: "MongoDB", iconId: "icon-mongodb" },
  { id: 10, label: "Postman", iconId: "icon-postman" },
  { id: 11, label: "GitHub", iconId: "icon-gh" },
  { id: 12, label: "Figma", iconId: "icon-figma" },
];
