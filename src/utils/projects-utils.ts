import { type CollectionEntry, getCollection } from "astro:content";
import type { ProjectData } from "@/types/project";

export const projectEngagementLabels: Record<
	ProjectData["engagement"],
	string
> = {
	company: "회사 프로젝트",
	freelance: "외주 프로젝트",
	personal: "개인 프로젝트",
	unspecified: "참여 형태 미정",
};

export const projectStatusLabels: Record<ProjectData["status"], string> = {
	unspecified: "상태 미지정",
	planning: "계획 중",
	developing: "개발 중",
	published: "공개됨",
	archived: "보관됨",
};

export async function getSortedProjects(): Promise<
	CollectionEntry<"projects">[]
> {
	const projects = await getCollection("projects", ({ data }) =>
		import.meta.env.PROD ? !data.draft : true,
	);
	return projects.sort(
		(a, b) =>
			b.data.order - a.data.order ||
			(b.data.published?.getTime() ?? 0) - (a.data.published?.getTime() ?? 0) ||
			a.id.localeCompare(b.id),
	);
}
