export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62b9898daf135b0f577f5ebb",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-35jg6dgp",
                  apiId: "0f85239e-e8b4-483a-b119-6b345997eab6",
                },
                {
                  buildHookId: "62b9898db12f651074ae6e0a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7mxh4das",
                  apiId: "fc740913-4906-4601-9f7c-76514b874f0b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/OktawiaRogowicz/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7mxh4das.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
