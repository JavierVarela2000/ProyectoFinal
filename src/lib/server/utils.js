const puppeteer = await import("puppeteer");
const normalizeElement = (element, selector) => {
	const el = element.querySelector(selector);
	return el ? el.textContent.trim().replace(/\n/g, "") : "";
};
const getShodan = async (query) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(`https://www.shodan.io/search?query=${query}`);
	await page.waitForSelector("div.result");

	// Extraer el contenido deseado
	const results = await page.evaluate(() => {
		const normalizeElement = (element, selector) => {
			const el = element.querySelector(selector);
			return el ? el.textContent.trim().replace(/\n/g, "") : "";
		};

		return Array.from(document.querySelectorAll(".result")).map((element) => {
			const obj = {
				timestamp: normalizeElement(element, ".timestamp"),
				ip: normalizeElement(element, ".heading .title"),
				organization: normalizeElement(element, ".result-details .filter-org"),
				country: normalizeElement(element, ".result-details img"),
				city: normalizeElement(
					element,
					".result-details .filter-link:nth-of-type(2)"
				),
				data: normalizeElement(element, "pre"),
			};

			return obj;
		});
	});

	console.log("Results:", results);

	// Cerrar el navegador
	await browser.close();
	return results;
};

export { getShodan };
