import "./experience.css";
import { useContext } from "react";
import { motion as m } from "framer-motion";
import Tittles from "../../elements/Tittles";
import { langContext } from "../../App";
import { experienciasP, experienciasD } from "../../data/experience";
import Carousel from "./Carousel";

const titleVariant = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const containerVariant = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.07,
		},
	},
};
const carouselVariant = {
	hidden: { scale: 0, y: 200, opacity: 0 },
	show: {
		scale: 1,
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeInOut",
		},
	},
};

function Experience() {
	const { lang } = useContext(langContext);
	return (
		<section
			className="h-screen w-[75%] mx-auto flex flex-col items-center"
			id="experience"
		>
			<m.div
				initial="hidden"
				whileInView="visible"
				variants={titleVariant}
				viewport={{ once: true }}
			>
				<Tittles main={lang === "Es" ? "Conocimientos" : "Knowledge"} />
			</m.div>
			{/* Contendor de los carruseles */}
			<m.div
				className="experience__container w-full h-[50rem] md:h-[37rem] flex flex-col items-center justify-around"
				variants={containerVariant}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				{/* Carrusel de los lenguajes */}
				<m.div className="w-full " variants={carouselVariant}>
					<Carousel experiencias={experienciasP} tittle="" />
				</m.div>
				{/* Carrusel de las libreias y frameworks */}
				<m.div className="w-full " variants={carouselVariant}>
					<Carousel experiencias={experienciasD} tittle="" />
				</m.div>
			</m.div>
		</section>
	);
}

export default Experience;
