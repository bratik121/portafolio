export type about = {
	tittle: string;
	content: string[];
};
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
		tittle: "Presentacion",
		content: [
			"¡Hola! Me llamo Bryant Mitchell, soy un estudiante de la universidad Católica Andrés Bello, estoy a dos semestres de graduarme.",
			"Soy una persona con mucha iniciativa, con un gran potencial para crecer, capaz de adaptarse a cualquier situación y solucionar los problemas que se presenten.",
		],
	},
	{
		tittle: "Objetivos",
		content: [
			`Laborar en una empresa dinámica mientras termino la carrera de Ingeniería
		Informática; que me ayude a avanzar en el desarrollo de mis habilidades, destrezas
		y conocimientos como desarrollador y programador web. Siempre garantizando una buena experiencia para  el  usuario y un gran rendimiento del software.
		`,
		],
	},
	{
		tittle: "Intereses",
		content: [
			"Diseño de interfaces y de experiencias de usuario (Ui/Ux).",
			"Arquitecturas para el flujo de datos (Flux-Redux)",
			"Inteligencia artificial (IA)",
			"Desarrollo de video juegos",
			"Desarrollo de aplicaciones móviles",
		],
	},
];
