import * as XLSX from "xlsx";

const handleExcelFile = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			try {
				const data = new Uint8Array(e.target.result);
				const workbook = XLSX.read(data, { type: "array" });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];
				const json = XLSX.utils.sheet_to_json(worksheet);
				resolve(json); // Resolvemos la promesa con los datos JSON
			} catch (error) {
				reject(error); // Si hay algún error, rechazamos la promesa
			}
		};
		reader.onerror = (error) => {
			reject(error); // Si hay un error de lectura, rechazamos la promesa
		};
		reader.readAsArrayBuffer(file);
	});
};

export default handleExcelFile;
