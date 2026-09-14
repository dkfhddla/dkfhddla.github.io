import { defineCollection } from "astro:content";
import type { CollectionConfig } from "astro/content/config";
import { glob } from "astro/loaders";
import { type ZodType, z } from "astro/zod";
import type { ProjectData } from "@/types/project";

type PostData = {
	title: string;
	published: Date;
	updated?: Date;
	publishedIncludesTime: boolean;
	updatedIncludesTime: boolean;
	draft: boolean;
	description: string;
	image: string;
	tags: string[];
	category: string | null;
	lang: string;
	pinned: boolean;
	author: string;
	sourceLink: string;
	licenseName: string;
	licenseUrl: string;
	comment: boolean;
	password: string;
	passwordHint: string;
	prevTitle: string;
	prevSlug: string;
	nextTitle: string;
	nextSlug: string;
};

type DynamicData = {
	published: Date;
	pinned: boolean;
	location: string;
};

type ContentCollection<T> = CollectionConfig<
	ZodType<T>,
	ReturnType<typeof glob>
>;

type PostDateInput = string;

const postDateSchema = z.union([
	z.iso.date(),
	z.iso.datetime({ offset: true }),
]);

function normalizePostDate(value: PostDateInput): Date {
	return new Date(value);
}

function postDateIncludesTime(value: PostDateInput): boolean {
	return value.includes("T");
}

const postsCollection: ContentCollection<PostData> = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
	schema: z
		.object({
			title: z.string(),
			published: postDateSchema,
			updated: postDateSchema.optional(),
			draft: z.boolean().optional().default(false),
			description: z.string().optional().default(""),
			image: z.string().optional().default(""),
			tags: z.array(z.string()).optional().default([]),
			category: z.string().optional().nullable().default(""),
			lang: z.string().optional().default(""),
			pinned: z.boolean().optional().default(false),
			author: z.string().optional().default(""),
			sourceLink: z.string().optional().default(""),
			licenseName: z.string().optional().default(""),
			licenseUrl: z.string().optional().default(""),
			comment: z.boolean().optional().default(true),
			password: z.string().optional().default(""),
			passwordHint: z.string().optional().default(""),

			/* For internal use */
			prevTitle: z.string().default(""),
			prevSlug: z.string().default(""),
			nextTitle: z.string().default(""),
			nextSlug: z.string().default(""),
		})
		.transform(
			(data): PostData => ({
				...data,
				published: normalizePostDate(data.published),
				updated: data.updated ? normalizePostDate(data.updated) : undefined,
				publishedIncludesTime: postDateIncludesTime(data.published),
				updatedIncludesTime: data.updated
					? postDateIncludesTime(data.updated)
					: false,
			}),
		),
});

const specCollection: ContentCollection<Record<string, never>> =
	defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/spec" }),
		schema: z.object({}),
	});

const dynamicCollection: ContentCollection<DynamicData> = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/dynamic" }),
	schema: z.object({
		published: z.date(),
		pinned: z.boolean().optional().default(false),
		location: z.string().optional().default(""),
	}),
});

const projectsCollection: ContentCollection<ProjectData> = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string().default(""),
		category: z.string().default(""),
		period: z.string().default(""),
		published: z.coerce.date().optional(),
		order: z.number().default(0),
		draft: z.boolean().default(false),
		image: z.string().default(""),
		tags: z.array(z.string()).default([]),
		status: z
			.enum(["unspecified", "planning", "developing", "published", "archived"])
			.default("unspecified"),
		link: z
			.array(
				z.object({
					label: z.string(),
					value: z
						.url()
						.refine(
							(value) => /^https?:\/\//i.test(value),
							"Use an HTTP or HTTPS URL",
						),
				}),
			)
			.default([]),
	}),
});

export const collections: {
	dynamic: typeof dynamicCollection;
	posts: typeof postsCollection;
	projects: typeof projectsCollection;
	spec: typeof specCollection;
} = {
	dynamic: dynamicCollection,
	posts: postsCollection,
	projects: projectsCollection,
	spec: specCollection,
};
