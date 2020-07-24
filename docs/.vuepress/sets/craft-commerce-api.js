module.exports = {
  title: "Craft Commerce Class Reference | %v",
  setTitle: "Craft Commerce API",
  handle: "commerce-api",
  icon: "/docs/icons/commerce.svg",
  baseDir: "commerce/api",
  versions: [
    ["3.x", { label: "3.x" }],
    ["2.x", { label: "2.x" }],
    ["1.x", { label: "1.x" }]
  ],
  defaultVersion: "3.x",
  searchPlaceholder: "Search the Commerce docs (Press “/” to focus)",
  primarySet: false,
  sidebar: require("./craft-commerce-api-sidebar")
};
