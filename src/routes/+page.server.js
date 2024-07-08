/** @type {import('./$types').Actions} */
import { getShodan } from "$lib/server/utils.js";
export const actions = {
	shodan: async ({ request }) => {
		const data = await request.formData();
		const query = data.get("query");
		await getShodan(query);
	},
};
