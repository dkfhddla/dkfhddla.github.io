import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	avatar: "/assets/images/jacob-profile.png",
	name: "Jacob",
	bio: "Unreal Engine·C++ 기반 3D 콘텐츠 제작 도구 개발자. 편집 시스템과 웹·Rust 엔진을 연결합니다.",
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
