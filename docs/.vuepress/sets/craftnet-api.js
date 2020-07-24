module.exports = {
  title: "Craftnet API Reference | %v",
  setTitle: "Craftnet API",
  handle: "craftnet-api",
  icon: "/docs/icons/craftnet.svg",
  baseDir: "craftnet/api",
  searchPlaceholder: "Search the Craftnet API docs (Press “/” to focus)",
  primarySet: false,
  sidebar: [
    {
      title: "Topics",
      collapsable: false,
      children: ["authentication", "pagination"]
    },
    {
      title: "APIs",
      collapsable: false,
      children: ["packages", "plugin-licenses"]
    }
  ]
};
