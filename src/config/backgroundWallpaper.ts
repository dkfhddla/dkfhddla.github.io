import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "banner",
	playerEnable: false,
	src: {
		desktop: "/assets/images/jacob-banner.jpg",
		mobile: "/assets/images/jacob-banner.jpg",
	},
	common: {
		dimOpacity: 0.28,
		homeText: {
			enable: true,
			title: "다시 찾을 수 있게",
			titleSize: "4.25rem",
			subtitle: [
				"문제에서 원인까지",
				"경계를 정하고 구현하기",
				"검증 가능한 기록 남기기",
			],
			subtitleSize: "1.35rem",
			typewriter: {
				enable: true,
				speed: 90,
				deleteSpeed: 45,
				pauseTime: 2200,
			},
			linksEnable: true,
			links: [
				{
					name: "GitHub",
					icon: "fa7-brands:github",
					url: "https://github.com/dkfhddla",
					showName: true,
				},
				{
					name: "RSS",
					icon: "fa7-solid:rss",
					url: "/rss/",
				},
			],
		},
		carousel: {
			enable: false,
			interval: 5000,
			transitionEffect: "fade",
		},
	},
	banner: {
		position: "center",
		postInfo: {
			mode: "description",
		},
		navbar: {
			transparentMode: "semi",
			blur: 8,
		},
		waves: {
			enable: {
				desktop: true,
				mobile: true,
			},
		},
		gradient: {
			enable: {
				desktop: true,
				mobile: true,
			},
			height: "12%",
		},
	},
};
