import { countryCodes } from "./countries";

export const getCountry = async (langSetter: Function) => {
	try {
		const res = await fetch(
			"http://api.ipapi.com/api/check?access_key=f855afb0167ce82ec6fa16530234dd24"
		);
		const data = await res.json();
		console.log(data);
		const { country_code } = data;
		if (countryCodes.includes(country_code)) {
			langSetter("Es");
		} else {
			langSetter("En");
		}
	} catch (error) {
		console.log("Error ", error);
	}
};
