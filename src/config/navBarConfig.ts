import {
	type NavBarConfig,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

export const navBarConfig: NavBarConfig = {
	links: [
		{ name: "홈", url: "/", icon: "material-symbols:home" },
		{
			name: "프로젝트",
			url: "/projects/",
			icon: "material-symbols:deployed-code",
		},
		{ name: "경력", url: "/career/", icon: "material-symbols:work" },
		{ name: "개발 기록", url: "/notes/", icon: "material-symbols:article" },
		{ name: "연락처", url: "/#contact", icon: "material-symbols:mail" },
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
