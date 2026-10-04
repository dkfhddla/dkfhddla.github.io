import fs from "node:fs/promises";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

async function loadImages(
	page: import("@playwright/test").Page,
): Promise<void> {
	for (const image of await page.locator("img:not(#media-dialog img)").all()) {
		await image.scrollIntoViewIfNeeded();
		await expect
			.poll(() =>
				image.evaluate((element) => (element as HTMLImageElement).naturalWidth),
			)
			.toBeGreaterThan(0);
	}
	await page.evaluate(() => window.scrollTo(0, 0));
}

test("home, career and project archive are readable and accessible", async ({
	page,
}, info) => {
	for (const route of [
		"/",
		"/career/",
		"/projects/",
		"/about/",
		"/notes/",
		"/projects/cinevstudio/",
		"/projects/shotloom/",
		"/projects/asset-library/",
	]) {
		await page.goto(route);
		await expect(page.locator("h1")).toHaveCount(1);
		await expect(page.locator("h1")).toBeVisible();
		await expect(page.locator("html")).toHaveAttribute("lang", "ko");
		await loadImages(page);
		expect(
			await page.evaluate(
				() => document.documentElement.scrollWidth <= window.innerWidth,
			),
		).toBe(true);
		const result = await new AxeBuilder({ page })
			.withTags(["wcag2a", "wcag2aa", "wcag21aa"])
			.analyze();
		expect(
			result.violations.map(({ id, nodes }) => ({
				id,
				targets: nodes.map((node) => node.target),
			})),
		).toEqual([]);
		if (["/", "/projects/cinevstudio/", "/career/"].includes(route)) {
			await fs.mkdir("docs/pr/portfolio-refresh", { recursive: true });
			const name =
				route === "/"
					? "home"
					: route === "/career/"
						? "career"
						: "cinevstudio";
			await page.screenshot({
				path: `docs/pr/portfolio-refresh/${name}-${info.project.name}.png`,
				fullPage: true,
			});
		}
	}
});

test("search, combined filters, empty results and reset survive repeated navigation", async ({
	page,
}) => {
	for (let repeat = 0; repeat < 3; repeat++) {
		await page.goto("/projects/");
		const cards = page.locator("[data-project]:visible");
		await expect(cards).toHaveCount(19);
		await page.getByLabel("프로젝트 검색", { exact: true }).fill(" rUsT ");
		await expect(cards).toHaveCount(1);
		await expect(cards).toContainText("Shotloom");
		await page
			.getByLabel("참여 형태", { exact: true })
			.selectOption("personal");
		await expect(cards).toHaveCount(0);
		await expect(
			page.getByText("조건에 맞는 프로젝트가 없습니다."),
		).toBeVisible();
		await page.getByRole("button", { name: "전체 프로젝트 보기" }).click();
		await expect(cards).toHaveCount(19);
		await expect(
			page.getByLabel("프로젝트 검색", { exact: true }),
		).toBeFocused();
		await page
			.getByLabel("참여 형태", { exact: true })
			.selectOption("freelance");
		await expect(cards).toHaveCount(4);
		await page.getByRole("button", { name: "초기화", exact: true }).click();
		await expect(cards).toHaveCount(19);
		await page
			.getByRole("link", { name: /CineV Studio 실제 프로젝트 화면/ })
			.click();
		await expect(page.locator("h1")).toHaveText("CineV Studio");
		await page.getByRole("link", { name: "← 프로젝트 목록" }).click();
		await expect(page.locator("[data-project]:visible")).toHaveCount(19);
		await page.goBack();
		await expect(page.locator("h1")).toHaveText("CineV Studio");
		await page.goForward();
		await expect(page.locator("[data-project]:visible")).toHaveCount(19);
	}
});

test("keyboard skip link and image dialog restore focus", async ({ page }) => {
	await page.goto("/");
	await page.keyboard.press("Tab");
	await expect(page.getByRole("link", { name: "본문으로 이동" })).toBeFocused();
	await page.keyboard.press("Enter");
	await expect(page.locator("#main")).toBeFocused();
	await page.goto("/projects/shotloom/");
	const image = page
		.getByRole("button", { name: /타임라인.*확대 보기/ })
		.first();
	await image.focus();
	for (let repeat = 0; repeat < 3; repeat++) {
		await page.keyboard.press("Enter");
		await expect(page.getByRole("dialog")).toBeVisible();
		await expect(
			page.getByRole("button", { name: "이미지 확대 닫기" }),
		).toBeFocused();
		await page.keyboard.press("Escape");
		await expect(page.getByRole("dialog")).toBeHidden();
		await expect(image).toBeFocused();
	}
});

test("all project links, images and anchors resolve; existing article URLs survive", async ({
	page,
	request,
}) => {
	await page.goto("/projects/");
	const routes = await page
		.locator("[data-project] a")
		.evaluateAll((links) =>
			links.map((link) => link.getAttribute("href") || ""),
		);
	const checked = new Set<string>();
	for (const route of ["/", "/career/", "/about/", "/notes/", ...routes]) {
		await page.goto(route);
		await loadImages(page);
		const targets = await page
			.locator("a[href], img[src], video source[src], link[rel=icon]")
			.evaluateAll((elements) =>
				elements.map(
					(element) =>
						element.getAttribute("href") || element.getAttribute("src") || "",
				),
			);
		for (const target of targets) {
			if (!target || /^(https?:|mailto:|data:)/.test(target)) continue;
			const resolved = new URL(target, page.url());
			if (!checked.has(resolved.pathname)) {
				const response = await request.get(resolved.pathname);
				expect(response.ok(), `${route} → ${target}`).toBe(true);
				checked.add(resolved.pathname);
			}
			if (resolved.hash && resolved.pathname === new URL(page.url()).pathname) {
				const id = decodeURIComponent(resolved.hash.slice(1));
				if (id)
					expect(
						await page.evaluate(
							(id) => Boolean(document.getElementById(id)),
							id,
						),
						`${route} #${id}`,
					).toBe(true);
			}
		}
		expect(
			await page
				.locator("img:not(#media-dialog img)")
				.evaluateAll((images) =>
					images
						.filter(
							(image) =>
								!(image instanceof HTMLImageElement) ||
								!image.complete ||
								image.naturalWidth === 0,
						)
						.map((image) => image.getAttribute("src")),
				),
		).toEqual([]);
	}
	for (const route of [
		"/posts/starting-dev-notes/",
		"/posts/shotloom-project-history/",
		"/posts/am-i-a-codex-launcher/",
		"/archive/",
		"/rss.xml",
	])
		expect((await request.get(route)).ok(), route).toBe(true);
});

test("content and navigation remain available without JavaScript", async ({
	browser,
}) => {
	const context = await browser.newContext({
		javaScriptEnabled: false,
		viewport: { width: 390, height: 844 },
	});
	const page = await context.newPage();
	await page.goto("http://127.0.0.1:4322/projects/");
	await expect(page.locator("[data-project]:visible")).toHaveCount(19);
	await expect(page.locator("[data-controls]")).toBeHidden();
	await page
		.getByRole("link", { name: /CineV Studio 실제 프로젝트 화면/ })
		.click();
	await expect(page.locator("h1")).toHaveText("CineV Studio");
	await page.getByRole("link", { name: "← 프로젝트 목록" }).click();
	await expect(page.locator("[data-project]:visible")).toHaveCount(19);
	await context.close();
});

test("local demonstration videos load and play", async ({ page }) => {
	for (const route of ["/projects/cinevstudio/", "/projects/shotloom/"]) {
		await page.goto(route);
		for (const video of await page.locator("video").all()) {
			await video.evaluate(async (element) => {
				await (element as HTMLVideoElement).play();
			});
			await expect
				.poll(() =>
					video.evaluate(
						(element) => (element as HTMLVideoElement).currentTime,
					),
				)
				.toBeGreaterThan(0);
			expect(
				await video.evaluate(
					(element) => (element as HTMLVideoElement).videoWidth,
				),
			).toBeGreaterThan(0);
			await video.evaluate((element) => (element as HTMLVideoElement).pause());
		}
	}
});

test("article and portfolio layouts support repeated navigation", async ({
	page,
}) => {
	const navigationErrors: string[] = [];
	page.on("console", (message) => {
		if (message.type() === "error" && /swup|container/i.test(message.text()))
			navigationErrors.push(message.text());
	});
	for (let repeat = 0; repeat < 3; repeat++) {
		await page.goto("/notes/");
		await page.locator(".note-row").first().click();
		await expect(page).toHaveURL(/\/posts\//);
		await page.locator("#navbar a[href='/']").first().click();
		await expect(page.locator("body")).toHaveClass("portfolio");
		await expect(page.locator("h1")).toHaveText(
			"창작자의 의도를움직이는 장면으로.",
		);
	}
	expect(navigationErrors).toEqual([]);
});
