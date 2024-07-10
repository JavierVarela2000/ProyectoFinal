import validateIPAddress from "./filters/validateIPAddress";
import validatePhoneNumber from "./filters/validatePhoneNumber";
import chekFile from "./filters/chekFile";
const categorizeData = (data) => {
	const items = [{ item: data[0]["Source Entity"] }];

	for (let i = 0; i < data.length; i++) {
		const domain = data[0]["Source Entity"];
		const item = data[i]["Target Entity"];
		if (validateIPAddress(item)) {
			items.push({ item, domain, type: "IpAddress" });
		} else if (validatePhoneNumber(item)) {
			items.push({ item, domain, type: "PhoneNumber" });
		} else if (chekFile(item)) {
			items.push({ item, domain, type: "File" });
		} else {
			items.push({ item, domain, type: "unknow" });
		}
	}
	console.log(items);
	return;
};

export default categorizeData;
