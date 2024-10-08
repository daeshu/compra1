import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "d6b36ea5-1ea9-471f-b6ce-d458fae3bef6", // Get this from tina.io
  token: "433b0d7e569fdd75b83f17311d90a47c774b0677", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        format: "md",
        match: {
          include: "_index"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "image",
            label: "Preview Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          }
        ]
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        format: "md",
        match: {
          exclude: "_index"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "image",
            label: "Preview Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          }
        ]
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        format: "md",
        match: {
          exclude: "_index"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "image",
            name: "image",
            label: "Preview Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          }
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: 'd4495a2ebcb80c835d4385cdd336919d814d1561',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
