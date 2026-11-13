/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Familjen Grotesk"', "system-ui", "sans-serif"],
			},
			colors: {
				blanco: "#FDFFFC",
				negro: {
					200: "#161925",
					500: "#07020D",
				},
				rojo: {
					200: "#990D35",
					500: "#6b0925",
				},
				naranja: {
					200: "#F0803C",
					500: "#f59458",
				},
				gris: { 200: "#959c9a", 500: "#5b5e5d" },
			},
		},
	},
	plugins: [],
};
