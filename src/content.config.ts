import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const collection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/collection" }),
  schema: z.object({
    title: z.object({
      en: z.string(),
      es: z.string(),
    }),
    category: z.object({
      en: z.string(),
      es: z.string(),
    }),
    description: z.object({
      en: z.string(),
      es: z.string(),
    }),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.object({
          en: z.string(),
          es: z.string(),
        }),
      }),
    ),
    prevProject: z.string(),
    nextProject: z.string(),
  }),
});

export const collections = { collection };
