import { countryCodes } from "./countries";

export const getCountry = async (langSetter: Function) => {
	try {
		const res = await fetch(
			"https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_aK795SzqxgsVRVtOinJKtwW5cSXgk"
		);
		const data = await res.json();
		const { country } = data.location;
		if (countryCodes.includes(country)) {
			langSetter("Es");
		} else {
			langSetter("En");
		}
	} catch (error) {
		console.log("Error ", error);
	}
};
