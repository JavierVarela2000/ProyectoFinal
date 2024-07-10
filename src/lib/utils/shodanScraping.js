import puppeteer from "puppeteer";
const shodanScraping = async (query) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(`https://www.shodan.io/host/${query}`);
	await page.waitForSelector("body");

	// Extraer el contenido deseado de la primera tabla
	const generalInformation = await page.evaluate(() => {
		const table = document.querySelector(".table.u-full-width");
		if (!table) return null;

		const data = {};
		const rows = table.querySelectorAll("tbody tr");

		if (!rows) return null;

		rows.forEach((row) => {
			try {
				const cells = row.querySelectorAll("td");
				const key = cells[0]?.innerText.trim();

				if (key) {
					const value = cells[1] ? cells[1].innerText.trim() : "";
					data[key] = value;
				}
			} catch {}
		});
		return data;
	});

	// Extraer el contenido deseado de la segunda tabla
	const technologies = await page.evaluate(() => {
		const httpComponents = document.querySelector("#http-components");
		if (!httpComponents) return null;

		const categories = httpComponents.querySelectorAll(".category");
		if (!categories) return null;

		const data = {};
		categories.forEach((category) => {
			try {
				const heading = category
					.querySelector(".category-heading")
					.innerText.trim();
				const technologies = category.querySelectorAll(".technologies a");
				const techArray = [];
				technologies.forEach((tech) => {
					const name = tech.querySelector(".technology-name").innerText.trim();
					const versionElement = tech.querySelector(".technology-version");
					const version = versionElement
						? versionElement.innerText.trim()
						: null;
					techArray.push({ name, version });
				});
				data[heading] = techArray;
			} catch {}
		});
		return data;
	});

	// Extraer el contenido deseado de la tabla de vulnerabilidades
	const vulnsData = await page.evaluate(() => {
		const vulnsTable = document.getElementById("vulns-table");
		if (!vulnsTable) return null;

		const vulnsRows = vulnsTable.querySelectorAll(".vuln-row");
		if (!vulnsRows.length) return [];

		const vulnerabilities = [];
		vulnsRows.forEach((row, index) => {
			try {
				const id = row.getAttribute("id") ?? `index${index}`;
				const descriptionElement = row.querySelector("span:last-child");
				const description = descriptionElement
					? descriptionElement.innerText.trim()
					: "";
				const tagElement = row.querySelector(".tag");
				const tag = tagElement ? tagElement.innerText.trim() : "";
				vulnerabilities.push({ id, description, tag });
			} catch {}
		});
		return vulnerabilities;
	});

	const ports = await page.evaluate(() => {
		const portsContainer = document.getElementById("ports");
		if (!portsContainer) return null;

		const portLinks = portsContainer.querySelectorAll("a");
		if (!portLinks) return null;

		const ports = [];
		portLinks.forEach((link) => {
			const portNumber = link.textContent.trim();
			const portId = link.getAttribute("href").replace("#", "");
			const portDetails = {};

			// Find corresponding details for each port
			const portDetailsElement = document.getElementById(portId);
			if (portDetailsElement) {
				const bannerTitle = portDetailsElement.querySelector(".banner-title");
				if (bannerTitle) {
					const productName = bannerTitle
						.querySelector("em")
						.textContent.trim();
					const productVersion = bannerTitle
						.querySelector(".text-secondary span")
						.textContent.trim();
					portDetails.product = { name: productName, version: productVersion };
				}

				const preElements = portDetailsElement.querySelectorAll("pre");

				if (preElements.length > 0) {
					portDetails.details = [];
					preElements.forEach((pre) => {
						const text = pre.textContent.trim();
						portDetails.details.push(text);
					});
				}

				// Add more details as needed
				// Example: SSL Certificate information

				ports.push({ portNumber, details: portDetails });
			}
		});

		return ports;
	});

	// console.log("Informacion General:", generalInformation);
	// console.log("Tecnologias: ", technologies);
	// console.log("vulnerabilidades: ", vulnsData);

	await browser.close();
	return { generalInformation, technologies, vulnsData, ports };
};

export default shodanScraping;
