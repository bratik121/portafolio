export type description = {
	[key: string]: string;
};

export type proyect = {
	title: description;
	description: description;
	image: string;
	repository: string;
	url: string;
};
export const proyects: proyect[] = [
	{
		title: {
			Es: "Briiger",
			En: "Briiger",
		},
		description: {
			Es: "Pagina para buscar una gran variedad de gifs, desarrollada con react, typercript y tailwind.",
			En: "Page to search a wide variety of gifs, developed with react, typescript, and tailwind.",
		},
		image: "https://i.postimg.cc/cJ430FJP/Briigser.png",
		repository: "https://github.com/bratik121/gifBrowser",
		url: "https://bratik121.github.io/gifBrowser/",
	},
	{
		title: {
			Es: "Prueba React",
			En: "React Test",
		},
		description: {
			Es: "Prueba de react, se utilizan diversas librerias y se implementan diversas funcionalidades. (no es responsive)",
			En: "React test, using various libraries and implementing different functionalities. (not responsive)",
		},
		image: "https://i.postimg.cc/WbrCB7NK/ndice.png",
		repository: "https://github.com/bratik121/PruebaProlesys",
		url: "https://test-bryant-prolesys.vercel.app/",
	},
	{
		title: { Es: "Proyecto 3", En: "Project 3" },
		description: {
			Es: "Una breve descripcion sobre lo que es y lo que contiene el proyecto 3",
			En: "A brief description of what project 3 is and what it contains",
		},
		image: "https://picsum.photos/261/125",
		repository: "",
		url: "",
	},
	{
		title: { Es: "Proyecto 4", En: "Project 4" },
		description: {
			Es: "Una breve descripcion sobre lo que es y lo que contiene el proyecto 4",
			En: "A brief description of what project 4 is and what it contains",
		},
		image: "https://picsum.photos/260/126",
		repository: "",
		url: "",
	},
	{
		title: { Es: "Proyecto 5", En: "Project 5" },
		description: {
			Es: "Una breve descripcion sobre lo que es y lo que contiene el proyecto 5",
			En: "A brief description of what project 5 is and what it contains",
		},
		image: "https://picsum.photos/262/125",
		repository: "",
		url: "",
	},
	{
		title: { Es: "Proyecto 6", En: "Project 6" },
		description: {
			Es: "Una breve descripcion sobre lo que es y lo que contiene el proyecto 6",
			En: "A brief description of what project 6 is and what it contains",
		},
		image: "https://picsum.photos/261/124",
		repository: "",
		url: "",
	},
];
