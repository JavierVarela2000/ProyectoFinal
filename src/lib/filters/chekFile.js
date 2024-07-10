const chekFile = (url) => {
	// Expresión regular para verificar '/web.archive.org/'
	const webArchiveRegex = /\/web\.archive\.org\//;

	// Expresión regular para verificar si termina en '.pdf'
	const pdfRegex = /\.pdf$/;

	return webArchiveRegex.test(url) || pdfRegex.test(url);
};

export default chekFile;
