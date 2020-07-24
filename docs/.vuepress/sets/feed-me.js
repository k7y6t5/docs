module.exports = {
  title: "Feed Me Documentation | %v",
  setTitle: "Feed Me",
  handle: "feed-me",
  icon: "/docs/icons/feed-me.svg",
  baseDir: "feed-me",
  searchPlaceholder: "Search the Feed Me docs (Press “/” to focus)",
  primarySet: false,
  sidebar: [
    {
      title: "Get Started",
      collapsable: false,
      children: [
        ["", "Introduction"],
        "get-started/installation-setup",
        "get-started/requirements",
        "get-started/configuration"
      ]
    },
    {
      title: "Feature Tour",
      collapsable: false,
      children: [
        "feature-tour/feed-overview",
        "feature-tour/creating-your-feed",
        "feature-tour/primary-element",
        "feature-tour/field-mapping",
        "feature-tour/importing-your-content",
        "feature-tour/trigger-import-via-cron",
        "feature-tour/using-in-your-templates"
      ]
    },
    {
      title: "Content Mapping",
      collapsable: false,
      children: ["content-mapping/element-types", "content-mapping/field-types"]
    },
    {
      title: "Developers",
      collapsable: false,
      children: [
        "developers/field-types",
        "developers/element-types",
        "developers/data-types",
        "developers/events"
      ]
    },
    {
      title: "Guides",
      collapsable: false,
      children: [
        "guides/importing-assets",
        "guides/importing-entries",
        "guides/importing-commerce-products",
        "guides/importing-commerce-variants",
        "guides/importing-into-matrix",
        "guides/migrating-from-expressionengine",
        "guides/migrating-from-wordpress"
      ]
    },
    {
      title: "Troubleshooting",
      collapsable: false,
      children: ["troubleshooting"]
    }
  ]
};
