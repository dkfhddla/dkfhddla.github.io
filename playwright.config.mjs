import { defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: "./tests",
	fullyParallel: false,
	workers: 1,
	timeout: 60000,
	reporter: "list",
	use: { baseURL: "http://127.0.0.1:4322", trace: "retain-on-failure" },
	projects: [
		{ name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
		{
			name: "mobile",
			use: {
				viewport: { width: 390, height: 844 },
				isMobile: true,
				hasTouch: true,
			},
		},
	],
	webServer: {
		command: "pnpm preview --host 127.0.0.1 --port 4322",
		// Astro 7 detects agent shells; keep this process attached to Playwright.
		env: { ASTRO_PREVIEW_BACKGROUND: "1" },
		url: "http://127.0.0.1:4322",
		reuseExistingServer: !process.env.CI,
		timeout: 60000,
	},
});
