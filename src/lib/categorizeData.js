import validateIPAddress from "./filters/validateIPAddress";
import validatePhoneNumber from "./filters/validatePhoneNumber";
import chekFile from "./filters/chekFile";
import isDomain from "./filters/isDomain";
import isEmail from "./filters/isEmail";
const categorizeData = (data) => {
	const domain = data[0]["Source Entity"];
	const items = [{ item: domain, type: "Domain", category: "Op" }];

	for (let i = 0; i < data.length; i++) {
		const domain = data[0]["Source Entity"];
		const item = data[i]["Target Entity"];
		if (validateIPAddress(item)) {
			items.push({
				item,
				targetSource: domain,
				type: "IpAddress",
				category: "Operations", //Operaciones
				valoration: 3,
			});
		} else if (isEmail(item)) {
			items.push({
				item,
				targetSource: domain,
				type: "Email",
				category: "Security", //seguridad
				valoration: 1,
			});
		} else if (validatePhoneNumber(item)) {
			items.push({
				item,
				targetSource: domain,
				type: "PhoneNumber",
				category: "Operations", // Operaciones
				valoration: 2,
			});
		} else if (chekFile(item)) {
			items.push({
				item,
				targetSource: domain,
				type: "File",
				category: "CommercialInterest", // Interes Comerciales
				valoration: 2,
			});
		} else if (isDomain(item)) {
			items.push({
				item,
				targetSource: domain,
				type: "Domain",
				category: "Operations", //Operaciones
				valoration: 1,
			});
		} else {
			items.push({
				item,
				targetSource: domain,
				type: "Unknow",
				category: "Unknow", // Desconocido
				valoration: "unknow",
			}); //
		}
	}
	return items;
};

export default categorizeData;
