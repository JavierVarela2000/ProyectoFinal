const validatePhoneNumber = (phoneNumber) => {
	// Expresión regular para validar número de teléfono (formato E.164)
	// Permite números que empiecen con '+' seguido de uno o más dígitos
	const phoneRegex = /^\+?[1-9]\d{1,14}$/;

	// Validar el número de teléfono
	return phoneRegex.test(Number(phoneNumber));
};

export default validatePhoneNumber;
