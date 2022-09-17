import { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import ContactMe from "./components/contact-me/ContactMe";
import Experience from "./components/experience/Experience";
import Portafolio from "./components/portafolio_c/Portafolio";
import "./App.css";

function App() {
	const [dark, setDark] = useState(false);

	const setTheme = () => {
		setDark(!dark);
	};

	return (
		<div className={`App w-full h-full  ${dark ? "dark" : ""}`}>
			<div
				className="bg-blanco text-rojo-200 
              dark:bg-negro-200 dark:text-naranja-200 overflow-hidden"
			>
				<Header />
				<Nav setTheme={setTheme} />
				<About />
				<Experience />
				<Portafolio />
				<ContactMe />
			</div>
		</div>
	);
}

export default App;
