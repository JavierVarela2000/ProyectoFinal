/** @type {import('./$types').Actions} */
const getShodan = async () => {
	const puppeteer = await import("puppeteer");
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("https://www.shodan.io/search?query=danec");
	await page.waitForSelector("div");

	// Extraer el contenido deseado
	const titles = await page.evaluate(() => {
		return Array.from(document.querySelectorAll("div")).map(
			(element) => element.textContent
		);
	});

	console.log("Títulos:", titles);

	// Cerrar el navegador
	await browser.close();
};
export const actions = {
	shodan: async (event) => {
		await getShodan();
	},
};
