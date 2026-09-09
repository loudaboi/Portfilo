import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sections = ["news", "stories"] as const;

const contentTypes = [
  "reported",
  "explained",
  "guide",
  "profile",
  "analysis",
  "perspective",
  "field-notes",
  "partner",
] as const;

const topics = ["business", "technology", "startup", "ai"] as const;

const stories = defineCollection({
  loader: glob({
    base: "./src/content/stories",
    pattern: "*.md",
  }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1),
        dek: z.string().min(1),
        metaDescription: z.string().min(1).optional(),
        section: z.enum(sections),
        contentType: z.enum(contentTypes),
        topic: z.enum(topics),
        publishedAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        status: z.enum(["draft", "published"]),
        featured: z.boolean().default(false),
        image: z
          .object({
            src: image(),
            alt: z.string().min(1),
            credit: z.string().min(1).optional(),
            generated: z.boolean().default(false),
          })
          .optional(),
        methodology: z.string().min(1).optional(),
        correction: z
          .object({
            correctedAt: z.coerce.date(),
            note: z.string().min(1),
          })
          .optional(),
      })
      .superRefine((story, context) => {
        if (story.status === "published" && !story.publishedAt) {
          context.addIssue({
            code: "custom",
            path: ["publishedAt"],
            message: "Published stories require publishedAt.",
          });
        }

        if (
          story.publishedAt &&
          story.updatedAt &&
          story.updatedAt < story.publishedAt
        ) {
          context.addIssue({
            code: "custom",
            path: ["updatedAt"],
            message: "updatedAt cannot be earlier than publishedAt.",
          });
        }

        if (story.section === "news" && story.featured) {
          context.addIssue({
            code: "custom",
            path: ["featured"],
            message: "Only Stories entries may be featured.",
          });
        }
      }),
});

export const collections = { stories };
