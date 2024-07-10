import shodanScraping from "$lib/utils/shodanScraping.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
	const ip = await url.searchParams.get("ip");
	const { generalInformation, technologies, vulnsData, ports } =
		await shodanScraping(ip);

	return { generalInformation, technologies, vulnsData, ports };
}
