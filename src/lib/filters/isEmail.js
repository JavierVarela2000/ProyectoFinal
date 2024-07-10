const isEmail = (email) => {
	// Verificar si el email tiene el formato correcto
	if (email.includes("@") && email.includes(".")) {
		console.log(email);
		return true;
	}
	return false;
};

export default isEmail;
