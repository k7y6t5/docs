module.exports = {
  title: "Craft CMS Class Reference | %v",
  setTitle: "Craft CMS API",
  handle: "craft-api",
  icon: "/docs/icons/craft.svg",
  baseDir: "api",
  versions: [
    ["3.x", { label: "3.x" }],
    ["2.x", { label: "2.x" }]
  ],
  defaultVersion: "3.x",
  searchPlaceholder: "Search the Craft API docs (Press “/” to focus)",
  primarySet: false,
  sidebar: {
    "3.x": require("./craft-api-sidebar")
  }
};
