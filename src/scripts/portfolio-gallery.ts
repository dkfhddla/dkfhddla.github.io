class PortfolioGallery extends HTMLElement {
	private controller: AbortController | undefined;
	connectedCallback(): void {
		this.controller?.abort();
		this.controller = new AbortController();
		const options = { signal: this.controller.signal };
		const form = this.querySelector<HTMLFormElement>("form");
		const search = this.querySelector<HTMLInputElement>("input");
		const engagement = this.querySelector<HTMLSelectElement>("select");
		const count = this.querySelector<HTMLElement>("[data-count]");
		const empty = this.querySelector<HTMLElement>("[data-empty]");
		const cards = Array.from(
			this.querySelectorAll<HTMLElement>("[data-project]"),
		);
		if (!form || !search || !engagement || !count || !empty) return;
		const update = (): void => {
			const query = search.value
				.trim()
				.normalize("NFKC")
				.toLocaleLowerCase("ko");
			let visible = 0;
			for (const card of cards) {
				const text = (card.dataset.search || "")
					.normalize("NFKC")
					.toLocaleLowerCase("ko");
				const matches =
					text.includes(query) &&
					(engagement.value === "all" ||
						engagement.value === card.dataset.engagement);
				card.hidden = !matches;
				if (matches) visible++;
			}
			count.textContent =
				visible === cards.length
					? `전체 ${visible}개 프로젝트`
					: `${cards.length}개 중 ${visible}개 프로젝트`;
			empty.hidden = visible > 0;
		};
		const reset = (): void => {
			search.value = "";
			engagement.value = "all";
			update();
		};
		form.hidden = false;
		form.addEventListener("submit", (event) => event.preventDefault(), options);
		form.addEventListener(
			"reset",
			(event) => {
				event.preventDefault();
				reset();
			},
			options,
		);
		search.addEventListener("input", update, options);
		engagement.addEventListener("change", update, options);
		this.querySelector("[data-reset]")?.addEventListener(
			"click",
			() => {
				reset();
				search.focus();
			},
			options,
		);
		update();
	}
	disconnectedCallback(): void {
		this.controller?.abort();
	}
}
if (!customElements.get("portfolio-gallery"))
	customElements.define("portfolio-gallery", PortfolioGallery);
