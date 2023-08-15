type description = { [key: string]: string };

export type experiencia = {
	percent: number;
	label: string;
	description: description;
};

export const experienciasP: experiencia[] = [
	{
		percent: 95,
		label: "Html",
		description: { Es: "Lenguaje", En: "Language" },
	},
	{
		percent: 70,
		label: "Css",
		description: { Es: "Lenguaje", En: "Language" },
	},
	{
		percent: 80,
		label: "JavaScript",
		description: { Es: "Lenguaje", En: "Language" },
	},
	{
		percent: 75,
		label: "TypeScript",
		description: { Es: "Lenguaje", En: "Language" },
	},
	{
		percent: 80,
		label: "Java",
		description: { Es: "Lenguaje", En: "Language" },
	},
	{
		percent: 60,
		label: "PL/SQL",
		description: { Es: "Lenguaje", En: "Language" },
	},
];

export const experienciasD: experiencia[] = [
	{
		percent: 80,
		label: "React",
		description: { Es: "Libreria", En: "Library" },
	},
	{
		percent: 80,
		label: "Bootstrap",
		description: { Es: "Framework", En: "Framework" },
	},
	{
		percent: 80,
		label: "Tailwind",
		description: { Es: "Framework", En: "Framework" },
	},
	{
		percent: 80,
		label: "Redux",
		description: { Es: "Libreria", En: "Library" },
	},
	{
		percent: 70,
		label: "Svelte",
		description: { Es: "Framework", En: "Framework" },
	},
	{
		percent: 70,
		label: "Git-Github",
		description: { Es: "Herramienta", En: "Tool" },
	},
	{
		percent: 50,
		label: "Vue",
		description: { Es: "Framework", En: "Framework" },
	},
];
