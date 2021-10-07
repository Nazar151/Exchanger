import { Exchanger } from "./Exchanger";
initEventListener();

function initEventListener() {
	const btn: HTMLElement | null = document.getElementById("exchange");
	const resultText: HTMLElement | null = document.getElementById("result");

	const getInputNumberValue = (id: string): number => {
		const element: HTMLElement | null = document.getElementById(id);
		if (element !== null && element instanceof HTMLInputElement) {
			return element.valueAsNumber;
		} else {
			throw new Error(`HTML Element is null or wrong type`);
		}
	};

	const getExchange = (resultText: HTMLElement | null, exchange: Exchanger) => {
		if (resultText !== null) {
			resultText.innerText = `${exchange.toCopper()}`;
		}
	};

	if (btn !== null) {
		if (btn instanceof HTMLButtonElement) {
			btn.addEventListener<"click">("click", (e: MouseEvent) => {
				e.preventDefault();
				e.stopPropagation();
				const exchange: Exchanger = new Exchanger(
					getInputNumberValue("gold"),
					getInputNumberValue("silver"),
					getInputNumberValue("copper")
				);
				getExchange(resultText, exchange);
			});
		} else {
			throw new Error(`HTML Element for exchange is not a button`);
		}
	} else {
		throw new Error(`Button for exchange not found`);
	}
}
