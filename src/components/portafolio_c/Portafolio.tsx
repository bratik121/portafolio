import "./portafolio.css";
import Tittles from "../../elements/Tittles";
import { lazy, Suspense } from "react";
import { proyects } from "../../data/portafolio";
const LWorkItem = lazy(() => import("./WorkItem"));

function Portafolio() {
	return (
		<section
			className="md:h-screen w-[75%] mx-auto flex flex-col items-center "
			id="portafolio"
		>
			<Tittles main={"Proyectos"} last="recientes" />
			<div className="portafolio__container w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 h-[73%] mt-2 md:mt-6 p-2 ">
				{proyects.map((proyect, index) => {
					return (
						<Suspense
							key={index}
							fallback={
								<div className="justify-center flex items-center w-[260px] h-[210px]">
									<h4>Cargando...</h4>
								</div>
							}
						>
							<LWorkItem
								tittle={proyect.tittle}
								image={proyect.image}
								description={proyect.description}
								repository={proyect.repository}
								url={proyect.url}
								key={index}
							/>
						</Suspense>
					);
				})}
			</div>
		</section>
	);
}

export default Portafolio;
