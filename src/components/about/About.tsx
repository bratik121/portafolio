import "./about.css";
import { motion as m } from "framer-motion";
import about from "../../assets/Aboutme.png";
import Tittles from "../../elements/Tittles";
import AboutCards from "./AboutCards";

import InfoSlider from "./InfoSlider";

const imgVariant = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const infoVariant = {};

function About() {
	return (
		<section
			className="md:h-screen w-[75%] mx-auto relative flex flex-col items-center"
			id="about"
		>
			{/* Titulos */}
			<Tittles main="Acerca de mi" />
			{/* contenedor Grid principal */}
			<div className="about__container md:mt-8 grid grid-cols-1 justify-items-center  md:grid-cols-[length:var(--colsSize)] gap-7 md:gap-[15%]">
				{/* Color de fondo de la imagen > la imagen*/}
				<m.div
					className="about__me  grid place-items-center w-[60%] md:w-full
				bg-gradient-to-tr from-rojo-200 to-transparent dark:from-naranja-200 "
					variants={imgVariant}
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true }}
				>
					{/* Contenedor de la imagen */}
					<div className="about__me-image w-full h-full rotate-12 hover:rotate-0 hover:shadow-lg bg-black transition duration-300">
						<img
							className="about__me-image__image"
							src={about}
							alt="Bryant uwu"
						/>
					</div>
				</m.div>
				{/* El contenido del about */}
				<div className="about__content w-full ">
					{/* Informacion - Cards */}
					<AboutCards />
					{/* Informacion - Texto */}
					<InfoSlider />
				</div>
			</div>
		</section>
	);
}

export default About;
