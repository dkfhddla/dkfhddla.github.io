// A custom element reconnects cleanly when Swup replaces the page content.
class ProjectGallery extends HTMLElement {
	private events?: AbortController;
	private category = "";
	private engagement = "";
	private composing = false;

	connectedCallback(): void {
		this.events?.abort();
		this.events = new AbortController();
		const { signal } = this.events;
		const search = this.querySelector<HTMLInputElement>("#project-search");
		const status = this.querySelector<HTMLSelectElement>("#project-status");
		if (!search || !status) return;

		const restore = (): void => {
			const params = new URLSearchParams(window.location.search);
			search.value = params.get("q") ?? "";
			const state = params.get("status") ?? "all";
			status.value = [...status.options].some(
				(option) => option.value === state,
			)
				? state
				: "all";
			const category = params.get("category") ?? "";
			this.category = [
				...this.querySelectorAll<HTMLButtonElement>("button[data-category]"),
			].some((button) => button.dataset.category === category)
				? category
				: "";
			const engagement = params.get("engagement") ?? "";
			this.engagement = [
				...this.querySelectorAll<HTMLButtonElement>("button[data-engagement]"),
			].some((button) => button.dataset.engagement === engagement)
				? engagement
				: "";
			this.applyFilters(false);
		};
		search.addEventListener(
			"compositionstart",
			() => {
				this.composing = true;
			},
			{ signal },
		);
		search.addEventListener(
			"compositionend",
			() => {
				this.composing = false;
				this.applyFilters();
			},
			{ signal },
		);
		search.addEventListener(
			"input",
			() => {
				if (!this.composing) this.applyFilters();
			},
			{ signal },
		);
		status.addEventListener("change", () => this.applyFilters(), { signal });
		this.addEventListener(
			"click",
			(event) => {
				if (!(event.target instanceof Element)) return;
				const button = event.target.closest<HTMLButtonElement>("button");
				if (!button) return;
				if (button.hasAttribute("data-category")) {
					this.category = button.dataset.category ?? "";
				} else if (button.hasAttribute("data-engagement")) {
					this.engagement = button.dataset.engagement ?? "";
				} else if (
					button.hasAttribute("data-clear") ||
					button.hasAttribute("data-reset")
				) {
					search.value = "";
					this.composing = false;
					if (button.hasAttribute("data-reset")) {
						this.category = "";
						this.engagement = "";
						status.value = "all";
					}
					search.focus();
				} else return;
				this.applyFilters();
			},
			{ signal },
		);
		window.addEventListener("popstate", restore, { signal });
		this.querySelector<HTMLElement>("[data-filter-controls]")?.removeAttribute(
			"hidden",
		);
		restore();
	}

	disconnectedCallback(): void {
		this.events?.abort();
		this.composing = false;
	}

	private applyFilters(updateUrl = true): void {
		const search = this.querySelector<HTMLInputElement>("#project-search");
		const status = this.querySelector<HTMLSelectElement>("#project-status");
		if (!search || !status) return;
		const query = search.value
			.normalize("NFKC")
			.toLocaleLowerCase("ko-KR")
			.trim();
		const cards = this.querySelectorAll<HTMLElement>("[data-project-card]");
		let count = 0;
		for (const card of cards) {
			const matches =
				(!query || card.dataset.search?.includes(query)) &&
				(!this.category || card.dataset.category === this.category) &&
				(!this.engagement || card.dataset.engagement === this.engagement) &&
				(status.value === "all" || card.dataset.status === status.value);
			card.hidden = !matches;
			if (matches) count++;
		}
		for (const section of this.querySelectorAll<HTMLElement>(
			"[data-project-section]",
		)) {
			const sectionCards = section.querySelectorAll<HTMLElement>(
				"[data-project-card]",
			);
			section.hidden =
				sectionCards.length > 0 &&
				![...sectionCards].some((card) => !card.hidden);
		}
		for (const button of this.querySelectorAll<HTMLButtonElement>(
			"button[data-category]",
		)) {
			button.setAttribute(
				"aria-pressed",
				String(button.dataset.category === this.category),
			);
		}
		for (const button of this.querySelectorAll<HTMLButtonElement>(
			"button[data-engagement]",
		)) {
			button.setAttribute(
				"aria-pressed",
				String(button.dataset.engagement === this.engagement),
			);
		}
		const clear = this.querySelector<HTMLButtonElement>("[data-clear]");
		if (clear) clear.hidden = search.value.length === 0;
		const empty = this.querySelector<HTMLElement>("[data-no-results]");
		if (empty) empty.hidden = count > 0 || cards.length === 0;
		const counter = this.querySelector<HTMLElement>("[data-result-count]");
		if (counter)
			counter.textContent =
				query || this.category || this.engagement || status.value !== "all"
					? `${cards.length}개 중 ${count}개 프로젝트`
					: `전체 ${count}개 프로젝트`;
		if (updateUrl) {
			const location = new URL(window.location.href);
			for (const [key, value] of [
				["q", search.value.trim()],
				["category", this.category],
				["engagement", this.engagement],
				["status", status.value === "all" ? "" : status.value],
			]) {
				if (value) location.searchParams.set(key, value);
				else location.searchParams.delete(key);
			}
			// Swup reads state.url on Back; updating only the address bar loses filters.
			const state = window.history.state;
			const nextState =
				state?.source === "swup"
					? {
							...state,
							url: `${location.pathname}${location.search}${location.hash}`,
						}
					: state;
			window.history.replaceState(nextState, "", location);
		}
	}
}

if (!customElements.get("project-gallery")) {
	customElements.define("project-gallery", ProjectGallery);
}
