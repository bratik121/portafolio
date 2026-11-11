import { countryCodes } from "./countries";

type Language = "es" | "en";

const browserLanguage = (): Language =>
	(navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";

export const detectLanguage = async (): Promise<Language> => {
	const fallback = browserLanguage();
	const controller = new AbortController();
	const timeout = window.setTimeout(() => controller.abort(), 3000);

	try {
		const res = await fetch(
			"https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_aK795SzqxgsVRVtOinJKtwW5cSXgk",
			{ signal: controller.signal }
		);

		if (!res.ok) return fallback;

		const data = await res.json();
		const country = data?.location?.country;

		if (typeof country !== "string") return fallback;

		return countryCodes.includes(country) ? "es" : "en";
	} catch {
		return fallback;
	} finally {
		window.clearTimeout(timeout);
	}
};
