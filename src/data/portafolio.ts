export type Project = {
	id: string;
	image: string;
	repository?: string;
	url?: string;
};

export const proyects: Project[] = [
	{
		id: "infinityEnergy",
		image: "https://i.postimg.cc/gjHwQtth/Infinity-Energy-Land.png",
		url: "https://www.infinityenergyusa.com/",
	},
	{
		id: "briigser",
		image: "https://i.postimg.cc/cJ430FJP/Briigser.png",
		repository: "https://github.com/bratik121/gifBrowser",
		url: "https://bratik121.github.io/gifBrowser/",
	},
	{
		id: "reactTest",
		image: "https://i.postimg.cc/WbrCB7NK/ndice.png",
		repository: "https://github.com/bratik121/PruebaProlesys",
		url: "https://test-bryant-prolesys.vercel.app/",
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
