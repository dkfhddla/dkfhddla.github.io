import {
	type NavBarConfig,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "홈",
			url: "/",
			icon: "material-symbols:home",
		},
		{
			name: "글",
			url: "#",
			icon: "material-symbols:article",
			children: [
				{
					name: "아카이브",
					url: "/archive/",
					icon: "material-symbols:archive",
				},
				{
					name: "카테고리",
					url: "/categories/",
					icon: "material-symbols:folder-open-rounded",
				},
				{
					name: "태그",
					url: "/tags/",
					icon: "material-symbols:tag-rounded",
				},
			],
		},
		{
			name: "소개",
			url: "/about/",
			icon: "material-symbols:person",
		},
		{
			name: "친구",
			url: "/friends/",
			icon: "material-symbols:group",
		},
		{
			name: "GitHub",
			url: "https://github.com/dkfhddla",
			external: true,
			icon: "fa7-brands:github",
		},
	],
};

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};
