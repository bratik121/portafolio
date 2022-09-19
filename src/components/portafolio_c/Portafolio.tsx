import "./portafolio.css";
import Tittles from "../../elements/Tittles";
import WorkItem from "./WorkItem";

function Portafolio() {
	return (
		<section
			className="md:h-screen w-[75%] mx-auto flex flex-col items-center "
			id="portafolio"
		>
			<Tittles main={"Trabajos y pruebas"} last="recientes" />
			<div className="portafolio__container w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 h-[73%] mt-2 md:mt-6 p-2 ">
				<WorkItem
					tittle="Titulo"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					distinctio."
					url="https://i0.wp.com/elestilolibre.com/wp-content/uploads/2020/06/wos-e1565634010844.jpg?fit=850%2C710&ssl=1"
				/>
				<WorkItem
					tittle="Titulo"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					distinctio."
					url="https://i0.wp.com/elestilolibre.com/wp-content/uploads/2020/06/wos-e1565634010844.jpg?fit=850%2C710&ssl=1"
				/>
				<WorkItem
					tittle="Titulo"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					distinctio."
					url="https://i0.wp.com/elestilolibre.com/wp-content/uploads/2020/06/wos-e1565634010844.jpg?fit=850%2C710&ssl=1"
				/>
				<WorkItem
					tittle="Titulo"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					distinctio."
					url="https://i0.wp.com/elestilolibre.com/wp-content/uploads/2020/06/wos-e1565634010844.jpg?fit=850%2C710&ssl=1"
				/>
				<WorkItem
					tittle="Titulo"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					distinctio."
					url="https://i0.wp.com/elestilolibre.com/wp-content/uploads/2020/06/wos-e1565634010844.jpg?fit=850%2C710&ssl=1"
				/>
				<WorkItem
					tittle="Titulo"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					distinctio."
					url="https://i0.wp.com/elestilolibre.com/wp-content/uploads/2020/06/wos-e1565634010844.jpg?fit=850%2C710&ssl=1"
				/>
			</div>
		</section>
	);
}

export default Portafolio;
