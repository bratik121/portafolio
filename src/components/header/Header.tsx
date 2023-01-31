import { useState } from "react";
import "./header.css";
import CV from "../../assets/CURRICULUM BRYANT MITCHELL.pdf";
import me from "../../assets/final.png";
import ButtonLink from "../../elements/ButtonLink";
import Tittles from "../../elements/Tittles";
import Socials from "./Socials";
import {
	motion,
	useScroll,
	useTransform,
	ScrollMotionValues,
} from "framer-motion";

const meVariant = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const titleVariant = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
		},
	},
};

const bottonVariant = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
	},
};

function Header() {
	const { scrollYProgress } = useScroll();
	let y = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

	return (
		<header>
			<div className="header__container mx-auto w-[75%] h-[100vh] md:h-screen flex flex-col items-center pt-11 md:pt-11 relative ">
				{/* Titulos */}

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={titleVariant}
					viewport={{ once: true }}
				>
					<Tittles
						first="Hola, soy"
						main="Bryant Mitchell"
						last="Desarrollador Frontend"
					/>
				</motion.div>

				<motion.div
					className="gap-3 flex flex-col text-center justify-around mt-5	 md:mt-10 md:gap-5 md:flex-row  "
					initial="hidden"
					whileInView="visible"
					variants={bottonVariant}
					viewport={{ once: true }}
				>
					<ButtonLink label="Descargar CV" href={CV} clase="secondary" />
					<ButtonLink label="Hablemos" href="#contact-me" clase="primary" />
				</motion.div>
				<motion.div
					className="me w-[22rem] flex justify-center  h-[38rem] bg-gradient-to-b from-rojo-200 dark:from-naranja-200 to-transparent  transition duration-[0.4s] mt-7 overflow-hidden"
					variants={meVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<img src={me} alt="my picture" className="img__header w-[80%]" />
				</motion.div>

				<Socials />
			</div>
		</header>
	);
}

export default Header;
