import recomendaiCover from "../assets/recomendai-placeholder.svg";

export type Project = {
	id: string;
	image: string;
	role?: string;
	year?: number | string;
	repository?: string;
	url?: string;
	stack?: string[];
};

export const proyects: Project[] = [
	{
		id: "infinityEnergy",
		image: "https://i.postimg.cc/gjHwQtth/Infinity-Energy-Land.png",
		role: "Frontend Developer",
		year: 2024,
		url: "https://www.infinityenergyusa.com/",
		stack: ["react", "tailwind"],
	},
	{
		id: "briigser",
		image: "https://i.postimg.cc/cJ430FJP/Briigser.png",
		role: "Frontend Developer",
		year: 2023,
		repository: "https://github.com/bratik121/gifBrowser",
		url: "https://bratik121.github.io/gifBrowser/",
		stack: ["react", "typescript", "tailwind"],
	},
	{
		// TODO: replace the placeholder cover with the RecomendAI capture and add url/repository when available.
		id: "recommendai",
		image: recomendaiCover,
		role: "Full-Stack Developer",
		year: 2025,
		stack: [
			"django",
			"react",
			"typescript",
			"postgresql",
			"scikitlearn",
			"gemini",
			"tailwind",
		],
	},
	{
		id: "project4",
		image: "https://picsum.photos/260/126",
	},
	{
		id: "project5",
		image: "https://picsum.photos/262/125",
	},
	{
		id: "project6",
		image: "https://picsum.photos/261/124",
	},
];
