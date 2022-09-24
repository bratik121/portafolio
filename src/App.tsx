import { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import ContactMe from "./components/contact-me/ContactMe";
import Experience from "./components/experience/Experience";
import Portafolio from "./components/portafolio_c/Portafolio";
import Modal from "../src/elements/Modal";
import "./App.css";

function App() {
	const [dark, setDark] = useState(false);
	const setTheme = () => {
		setDark(!dark);
	};
	const [modalSate, setModalSate] = useState(false);
	const modalSateSetter = (value: boolean) => {
		setModalSate(value);
	};

	return (
		<div className={`App w-full h-full  ${dark ? "dark" : ""}`}>
			<div
				className="main-contianer bg-blanco text-rojo-200 
              dark:bg-negro-200 dark:text-naranja-200 overflow-hidden w-full relative"
			>
				<Header />
				<Nav setTheme={setTheme} />
				<About />
				<Experience />
				<Portafolio />
				<ContactMe modalSateSetter={modalSateSetter} />
				{modalSate && (
					<Modal tittle="Correo enviado!" modalSateSetter={modalSateSetter} />
				)}
			</div>
		</div>
	);
}

export default App;
