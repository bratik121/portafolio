import "./experience.css";
import Tittles from "../../elements/Tittles";
import { experienciasP, experienciasD } from "../../data/Experience";
import Carousel from "./Carousel";

function Experience() {
	return (
		<section
			className="h-screen w-[75%] mx-auto flex flex-col items-center"
			id="experience"
		>
			<Tittles main="Conocimientos" />
			<div className="experience__container w-full h-[50rem] md:h-[37rem] flex flex-col items-center justify-around">
				<Carousel experiencias={experienciasP} tittle="" />
				<Carousel experiencias={experienciasD} tittle="" />
			</div>
		</section>
	);
}

export default Experience;
