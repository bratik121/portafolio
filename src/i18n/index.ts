import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";

export const supportedLanguages = ["es", "en"] as const;
export type Language = (typeof supportedLanguages)[number];

i18n.use(initReactI18next).init({
	resources: {
		es: { translation: es },
		en: { translation: en },
	},
	lng: "en",
	fallbackLng: "en",
	supportedLngs: supportedLanguages,
	interpolation: {
		escapeValue: false,
	},
	returnNull: false,
});

const syncDocumentLanguage = (language: string) => {
	document.documentElement.lang = language;
};

syncDocumentLanguage(i18n.language);
i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
