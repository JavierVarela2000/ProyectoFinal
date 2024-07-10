const validatePhoneNumber = (request) => {
	const phoneNumber = String(request).trim();
	// Verificar que la cadena comience con '+'
	if (phoneNumber.charAt(0) !== "+") {
		return false;
	}

	return true;
};

export default validatePhoneNumber;
