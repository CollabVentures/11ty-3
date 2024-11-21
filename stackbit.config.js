import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "eleventy",
  nodeVersion: "18",

  // Eleventy to run inside Visual Editor container
  devCommand: "npx @11ty/eleventy --serve --port {PORT}",

  // Eleventy-specific configuration
  experimental: {
    ssg: {
      proxyWebsockets: true,
      logPatterns: {
        up: ["Server at"],
      },
    },
  },

  // Specific option to prevent Visual Editor to interfere with page reload mechanism of Eleventy
  customContentReload: true,

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "slug", required: true, default: "{slug}" },
            { name: "markdown_content", type: "markdown", required: true },
          ],
        },
        {
          name: "Term",
          type: "term",
          urlPath: "/{slug}",
          filePath: "content/terms/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "slug", required: true, default: "{slug}" },
            { name: "markdown_content", type: "markdown", required: true },
            {
              name: "state",
              type: "enum",
              required: true,
              options: [
                { label: "0", value: "Draft" },
                { label: "1", value: "Review" },
                { label: "2", value: "Approved" },
                { label: "9", value: "Archived" },
              ],
              default: "en",
            },
          ],
        },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "img",
        publicPath: "/",
      },
    }),
  ],
});
