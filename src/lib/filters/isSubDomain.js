const isSubdomain = (subdomain, domain) => {
	// Normalizar ambos dominios eliminando los posibles puntos al final
	subdomain = subdomain.replace(/\.$/, "");
	domain = domain.replace(/\.$/, "");

	// Dividir ambos dominios en partes
	const subdomainParts = subdomain.split(".").reverse();
	const domainParts = domain.split(".").reverse();

	// Si el dominio tiene más partes que el subdominio, no puede ser un subdominio
	if (domainParts.length > subdomainParts.length) {
		return false;
	}

	// Comparar las partes de ambos dominios
	for (let i = 0; i < domainParts.length; i++) {
		if (domainParts[i] !== subdomainParts[i]) {
			return false;
		}
	}

	return true;
};

export default isSubdomain;
