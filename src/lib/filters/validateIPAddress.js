const validateIPAddress = (ipAddress) => {
	// Expresión regular para IPv4
	const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

	// Expresión regular para IPv6
	const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

	// Validación de IPv4
	if (ipv4Regex.test(ipAddress)) {
		const parts = ipAddress.split(".");
		if (parts.length === 4) {
			return parts.every(
				(part) => parseInt(part, 10) >= 0 && parseInt(part, 10) <= 255
			);
		}
	}

	// Validación de IPv6
	if (ipv6Regex.test(ipAddress)) {
		return true;
	}

	// Si no coincide con ninguna expresión regular, retorna falso
	return false;
};

export default validateIPAddress;
