import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	avatar: "/assets/images/jacob-profile.png",
	name: "Jacob",
	bio: "제품과 실시간 3D 도구를 만들며 배운 판단을 기록합니다.",
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/dkfhddla",
			showName: false,
		},
		{
			name: "About",
			icon: "fa7-solid:user",
			url: "/about/",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
