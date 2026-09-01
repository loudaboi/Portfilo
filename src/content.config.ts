import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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

const topics = ["business", "technology", "startups", "ai", "building"] as const;

const stories = defineCollection({
  loader: glob({
    base: "./src/content/stories",
    pattern: "*.md",
  }),
  schema: z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
      contentType: z.enum(contentTypes),
      topic: z.enum(topics),
      author: z.string().min(1),
      publishedAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      status: z.enum(["draft", "published"]),
      featured: z.boolean().default(false),
      series: z
        .string()
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
        .optional(),
      seriesOrder: z.number().int().positive().optional(),
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

      if (story.seriesOrder !== undefined && !story.series) {
        context.addIssue({
          code: "custom",
          path: ["seriesOrder"],
          message: "seriesOrder requires series.",
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
    }),
});

const series = defineCollection({
  loader: glob({
    base: "./src/content/series",
    pattern: "*.md",
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    status: z.enum(["active", "completed"]),
    fixture: z.boolean().default(false),
  }),
});

export const collections = { stories, series };
