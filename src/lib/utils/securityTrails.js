const apiKey = "2M4VNur-6oy21VvuHu5sRcp-1BEGTj0s";

const getDomains = async () => {
	const url = "https://api.securitytrails.com/v1/domain/danec.com.ec";
	const options = {
		method: "GET",
		headers: { accept: "application/json", apiKey },
	};
	fetch(url, options)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
	return;
};

export { getDomains };
