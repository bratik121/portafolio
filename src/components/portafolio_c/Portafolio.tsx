import "./portafolio.css";
import { lazy, Suspense } from "react";
import { motion as m } from "framer-motion";
import Tittles from "../../elements/Tittles";
import { proyects } from "../../data/portafolio";
const WorkItem = lazy(() => import("./WorkItem"));

const containerVariant = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.07,
		},
	},
};
const cardVariant = {
	hidden: { y: 200, opacity: 0 },
	show: {
		opacity: 1,
		y: 0,
	},
};

function Portafolio() {
	return (
		<section
			className="md:h-screen w-[75%] mx-auto flex flex-col items-center "
			id="portafolio"
		>
			<Tittles main={"Proyectos"} last="recientes" />
			<m.div
				className="portafolio__container w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 h-[73%] mt-2 md:mt-6 p-2 "
				variants={containerVariant}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				{proyects.map((proyect, index) => {
					return (
						// Suspense en caso de que la img este cargando
						<m.div variants={cardVariant} key={index}>
							<Suspense
								fallback={
									<div className="justify-center flex items-center w-[260px] h-[210px]">
										<h4>Cargando...</h4>
									</div>
								}
							>
								{/* Cards de los proyectos */}
								<WorkItem
									tittle={proyect.tittle}
									image={proyect.image}
									description={proyect.description}
									repository={proyect.repository}
									url={proyect.url}
									key={index}
								/>
							</Suspense>
						</m.div>
					);
				})}
			</m.div>
		</section>
	);
}

export default Portafolio;
