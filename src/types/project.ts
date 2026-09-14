export type ProjectData = {
	title: string;
	description: string;
	category: string;
	period: string;
	published?: Date;
	order: number;
	draft: boolean;
	image: string;
	detailImage?: string;
	tags: string[];
	status: "unspecified" | "planning" | "developing" | "published" | "archived";
	link: { label: string; value: string }[];
};
