class MediaGallery extends HTMLElement {
	private controller: AbortController | undefined;
	connectedCallback(): void {
		this.controller?.abort();
		this.controller = new AbortController();
		const options = { signal: this.controller.signal };
		const dialog = document.querySelector<HTMLDialogElement>("#media-dialog");
		const preview = dialog?.querySelector<HTMLImageElement>("img");
		const title = dialog?.querySelector<HTMLElement>("h2");
		let opener: HTMLElement | null = null;
		if (!dialog || !preview || !title) return;
		for (const img of this.querySelectorAll<HTMLImageElement>("img")) {
			if (img.closest("a, button")) continue;
			const button = document.createElement("button");
			button.type = "button";
			button.className = "image-zoom";
			button.setAttribute(
				"aria-label",
				`${img.alt || "프로젝트 이미지"} 확대 보기`,
			);
			img.before(button);
			button.append(img);
		}
		this.addEventListener(
			"click",
			(event) => {
				const button =
					event.target instanceof Element
						? event.target.closest<HTMLButtonElement>(".image-zoom")
						: null;
				const img = button?.querySelector("img");
				if (!button || !img) return;
				opener = button;
				preview.src = img.currentSrc || img.src;
				preview.alt = img.alt;
				title.textContent = img.alt || "프로젝트 이미지";
				dialog.showModal();
			},
			options,
		);
		dialog
			.querySelector("[data-close]")
			?.addEventListener("click", () => dialog.close(), options);
		dialog.addEventListener(
			"click",
			(event) => {
				if (event.target === dialog) dialog.close();
			},
			options,
		);
		dialog.addEventListener("close", () => opener?.focus(), options);
	}
	disconnectedCallback(): void {
		this.controller?.abort();
	}
}
if (!customElements.get("media-gallery"))
	customElements.define("media-gallery", MediaGallery);
