import type { SidebarLayoutConfig } from "../types/sidebarConfig";

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "both",
	tabletSidebar: "left",
	hideSidebarOnPostPage: false,
	showBothSidebarsOnPostPage: true,
	leftComponents: [
		{
			type: "profile",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "announcement",
			enable: true,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "music",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
		},
		{
			type: "categories",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			specificConfig: { collapseThreshold: 6 },
		},
		{
			type: "tags",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			specificConfig: { collapseThreshold: 12 },
		},
	],
	rightComponents: [
		{
			type: "stats",
			enable: true,
			position: "top",
			showOnPostPage: false,
		},
		{
			type: "siteInfo",
			enable: true,
			position: "top",
			showOnPostPage: true,
			specificConfig: {
				siteInfo: { unknownBuildPlatform: "GitHub Pages" },
			},
		},
		{
			type: "sidebarToc",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			hideOnNonPostPage: true,
		},
	],
	mobileBottomComponents: [],
};
