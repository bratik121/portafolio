import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import ContactMe from "./components/contact-me/ContactMe";
import Experience from "./components/experience/Experience";
import Portafolio from "./components/portafolio_c/Portafolio";
import Footer from "./components/footer/Footer";
import Modal from "./elements/Modal";
import Loading from "./elements/Loading";
import ScrollProgress from "./elements/ScrollProgress";
import { detectLanguage } from "./data/fetch";
import type { Language } from "./i18n";
import i18n from "./i18n";

function App() {
	const [dark, setDark] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);
	const [lang, setLang] = useState<Language | null>(null);

	useEffect(() => {
		let active = true;

		detectLanguage().then(async (detected) => {
			await i18n.changeLanguage(detected);
			if (active) setLang(detected);
		});

		return () => {
			active = false;
		};
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);

	return (
		<div className="min-h-screen overflow-x-hidden bg-blanco text-negro-500 dark:bg-negro-500 dark:text-blanco">
			<ScrollProgress />
			{lang === null ? (
				<div className="flex min-h-screen items-center justify-center">
					<Loading />
				</div>
			) : (
				<>
					<Header />
					<Nav dark={dark} setTheme={() => setDark((value) => !value)} />
					<main>
						<About />
						<Experience />
						<Portafolio />
						<ContactMe onSuccess={() => setModalOpen(true)} />
					</main>
					<Footer />
					<AnimatePresence>
						{modalOpen ? (
							<Modal
								key="success-modal"
								onClose={() => setModalOpen(false)}
							/>
						) : null}
					</AnimatePresence>
				</>
			)}
		</div>
	);
}

export default App;
