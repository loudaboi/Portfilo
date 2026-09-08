import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { DEV_EDITORIAL_IMAGE } from "./data/devEditorialImage";

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

const imageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  credit: z.string().min(1).optional(),
  generated: z.boolean().default(false),
});

const editorialImageField = imageSchema
  .optional()
  .transform((image) => image ?? (import.meta.env.DEV ? DEV_EDITORIAL_IMAGE : undefined));

const stories = defineCollection({
  loader: glob({
    base: "./src/content/stories",
    pattern: "*.md",
  }),
  schema: z
    .object({
      title: z.string().min(1),
      dek: z.string().min(1),
      metaDescription: z.string().min(1).optional(),
      section: z.enum(sections),
      contentType: z.enum(contentTypes),
      topic: z.enum(topics),
      author: z.string().min(1),
      publishedAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      status: z.enum(["draft", "published"]),
      featured: z.boolean().default(false),
      image: editorialImageField,
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

      if (story.section === "news" && story.featured) {
        context.addIssue({
          code: "custom",
          path: ["featured"],
          message: "Only Stories entries may be featured.",
        });
      }

      if (story.section === "news" && story.series) {
        context.addIssue({
          code: "custom",
          path: ["series"],
          message: "News entries cannot belong to a series.",
        });
      }

      if (story.section === "news" && story.seriesOrder !== undefined) {
        context.addIssue({
          code: "custom",
          path: ["seriesOrder"],
          message: "News entries cannot define seriesOrder.",
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
