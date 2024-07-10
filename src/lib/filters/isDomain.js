const isDomain = (url) => {
	// Expresión regular para validar un dominio
	const domainRegex =
		/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;

	// Probar la URL contra la expresión regular
	return domainRegex.test(url);
};

export default isDomain;
