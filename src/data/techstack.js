export const techStack = [
  { id: "php", name: "PHP", icon: "fab fa-php" },
  { id: "html", name: "HTML", icon: "fab fa-html5" },
  { id: "css", name: "CSS", icon: "fab fa-css3-alt" },
  { id: "javascript", name: "JavaScript", icon: "fab fa-js-square" },
  { id: "mysql", name: "MySQL", icon: "fas fa-database" },
  { id: "laravel", name: "Laravel", icon: "fab fa-laravel" },
  { id: "git", name: "SVN/Git", icon: "fas fa-code-branch" },
  { id: "vscode", name: "VSCode", icon: "fas fa-code" },
  { id: "mamp", name: "MAMP", icon: "fas fa-server" },
  { id: "eclipse", name: "Eclipse", icon: "fas fa-file-code" },
  { id: "vue", name: "Vue.js", icon: "fa-brands fa-vuejs" },
  { id: "redmine", name: "Redmine", icon: "fas fa-list-check" },
  { id: "wordpress", name: "WordPress", icon: "fab fa-wordpress" },
  { id: "elementor", name: "Elementor", icon: "fa-brands fa-elementor" },
  { id: "wpforms", name: "WPForms", icon: "fa-brands fa-wpforms" },
  { id: "canva", name: "Canva", icon: "fa-brands fa-canva" },
];

const aliasMap = {
  js: "fab fa-js-square",
  "vue.js": "fa-brands fa-vuejs",
  sql: "fas fa-database",
};

const baseMap = techStack.reduce((map, tech) => {
  map[tech.id.toLowerCase()] = tech.icon;
  map[tech.name.toLowerCase()] = tech.icon;
  return map;
}, {});

export const techIconMap = { ...baseMap, ...aliasMap };

export const getTechIconClass = (tag) => {
  const key = typeof tag === "string" ? tag.trim().toLowerCase() : "";
  return techIconMap[key] ?? "fas fa-code";
};
