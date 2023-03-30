export type about = {
	title: string;
	content: string[];
};

export const hobbies: { [key: string]: string[] } = {
	Es: ["Programar", "Música", "Video juegos", "Vóleybol"],

	En: ["Programming", "Music", "Video games", "Volleyball"],
};

export const skills: { [key: string]: string[] } = {
	Es: [
		"Ingles avanzado",
		"Trabajo en Equipo",
		"Gestion de conflictos",
		"Negociar",
	],
	En: ["Advanced English", "Teamwork ", "Conflict Management", "Negotiation"],
};

type aboutAtribute = {
	[key: string]: about[];
};

export const aboutList: aboutAtribute = {
	Es: [
		{
			title: "Presentacion",
			content: [
				"¡Hola! Me llamo Bryant Mitchell, soy un estudiante de la universidad Católica Andrés Bello, estoy a dos semestres de graduarme.",
				"Soy una persona con mucha iniciativa, con un gran potencial para crecer, capaz de adaptarse a cualquier situación y solucionar los problemas que se presenten.",
			],
		},
		{
			title: "Objetivos",
			content: [
				`Laborar en una empresa dinámica mientras termino la carrera de Ingeniería
			Informática; que me ayude a avanzar en el desarrollo de mis habilidades, destrezas
			y conocimientos como desarrollador y programador web. Siempre garantizando una buena experiencia para  el  usuario y un gran rendimiento del software.
			`,
			],
		},
		{
			title: "Intereses",
			content: [
				"Diseño de interfaces y de experiencias de usuario (Ui/Ux).",
				"Arquitecturas para el flujo de datos (Flux-Redux)",
				"Inteligencia artificial (IA)",
				"Desarrollo de video juegos",
				"Desarrollo de aplicaciones móviles",
			],
		},
	],

	En: [
		{
			title: "Introduction",
			content: [
				"Hello, my name is Bryant Mitchell. I am a student at Universidad Católica Andrés Bello, and I am two semesters away from graduation.",
				"I am an individual with a lot of initiative, great potential for growth, and capable of adapting to any situation and solving problems as they arise.",
			],
		},
		{
			title: "Objectives",
			content: [
				"To work in a dynamic company while finishing my degree in Computer Engineering, which helps me advance in the development of my skills, abilities, and knowledge as a web developer and programmer. Always ensuring a good user experience and high software performance.",
			],
		},
		{
			title: "Interests",
			content: [
				"User interface and experience (UI/UX) design",
				"Data flow architectures (Flux-Redux)",
				"Artificial intelligence (AI)",
				"Video game development",
				"Mobile application development",
			],
		},
	],
};

/*

export const hobbies: string[] = [
	"Programar",
	"Musica",
	"Video juegos",
	"Volleyball",
];

export const skills: string[] = [
	"Ingles avanzado",
	"Trabajo en Equipo",
	"Gestion de conflictos",
	"Negociar",
];

export const aboutList: about[] = [
	{
		title: "Presentacion",
		content: [
			"¡Hola! Me llamo Bryant Mitchell, soy un estudiante de la universidad Católica Andrés Bello, estoy a dos semestres de graduarme.",
			"Soy una persona con mucha iniciativa, con un gran potencial para crecer, capaz de adaptarse a cualquier situación y solucionar los problemas que se presenten.",
		],
	},
	{
		title: "Objetivos",
		content: [
			`Laborar en una empresa dinámica mientras termino la carrera de Ingeniería
		Informática; que me ayude a avanzar en el desarrollo de mis habilidades, destrezas
		y conocimientos como desarrollador y programador web. Siempre garantizando una buena experiencia para  el  usuario y un gran rendimiento del software.
		`,
		],
	},
	{
		title: "Intereses",
		content: [
			"Diseño de interfaces y de experiencias de usuario (Ui/Ux).",
			"Arquitecturas para el flujo de datos (Flux-Redux)",
			"Inteligencia artificial (IA)",
			"Desarrollo de video juegos",
			"Desarrollo de aplicaciones móviles",
		],
	},
];
*/
