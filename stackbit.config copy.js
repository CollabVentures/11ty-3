import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "eleventy",
  devCommand: "npx @11ty/eleventy --serve --port 3000",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          /*          urlPath: "/{slug}", */
          filePath: "content/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "slug", required: true },
            { name: "markdown_content", type: "markdown", required: true },
          ],
        },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "_site",
        uploadDir: "dist/images",
        publicPath: "/",
      },
    }),
  ],
});
