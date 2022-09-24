import "./portafolio.css";
import Tittles from "../../elements/Tittles";
import WorkItem from "./WorkItem";
import { proyects } from "../../data/portafolio";

function Portafolio() {
	return (
		<section
			className="md:h-screen w-[75%] mx-auto flex flex-col items-center "
			id="portafolio"
		>
			<Tittles main={"Trabajos y pruebas"} last="recientes" />
			<div className="portafolio__container w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 h-[73%] mt-2 md:mt-6 p-2 ">
				{proyects.map((proyect, index) => {
					return (
						<WorkItem
							tittle={proyect.tittle}
							image={proyect.image}
							description={proyect.description}
							repository={proyect.repository}
							url={proyect.url}
							key={index}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Portafolio;
