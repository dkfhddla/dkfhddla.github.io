import type { MusicPlayerConfig } from "../types/musicConfig";

export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: true,
	showInSidebar: true,
	mode: "local",
	volume: 0.45,
	playMode: "list",
	showLyrics: false,
	local: {
		playlist: [
			{
				name: "Bright Notes",
				artist: "Jacob / Generated",
				url: "/assets/music/bright-notes.wav",
				cover: "/assets/images/jacob-banner.jpg",
				lrc: "",
			},
		],
	},
};
