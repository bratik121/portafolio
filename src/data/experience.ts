export type SkillType = "language" | "library" | "framework" | "tool";

export type Experiencia = {
	percent: number;
	label: string;
	type: SkillType;
};

export const experienciasP: Experiencia[] = [
	{ percent: 95, label: "HTML", type: "language" },
	{ percent: 70, label: "CSS", type: "language" },
	{ percent: 80, label: "JavaScript", type: "language" },
	{ percent: 75, label: "TypeScript", type: "language" },
	{ percent: 80, label: "Java", type: "language" },
	{ percent: 60, label: "PL/SQL", type: "language" },
];

export const experienciasD: Experiencia[] = [
	{ percent: 80, label: "React", type: "library" },
	{ percent: 80, label: "Bootstrap", type: "framework" },
	{ percent: 80, label: "Tailwind", type: "framework" },
	{ percent: 80, label: "Redux", type: "library" },
	{ percent: 70, label: "Svelte", type: "framework" },
	{ percent: 70, label: "GitHub", type: "tool" },
	{ percent: 50, label: "Vue", type: "framework" },
];
