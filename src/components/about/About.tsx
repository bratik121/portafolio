import "./about.css";
import { IoMdSchool } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import mirio from "../../assets/mirio.png";
import Tittles from "../../elements/Tittles";
import TextSlider from "./TextSlider";
function About() {
	return (
		<section
			className="h-screen w-[75%] mx-auto relative flex flex-col items-center"
			id="about"
		>
			{/* Titulos */}
			<Tittles main="Acerca de mi" />
			{/* contenedor Grid principal */}
			<div className="about__container md:mt-8 grid grid-cols-1 justify-items-center  md:grid-cols-[length:var(--colsSize)] gap-7 md:gap-[15%]">
				{/* Color de fondo de la imagen > la imagen*/}
				<div
					className="about__me  f-full grid place-items-center w-[60%] md:w-full
				bg-gradient-to-tr from-rojo-200 to-transparent dark:from-naranja-200 "
				>
					{/* Contenedor de la imagen */}
					<div className="about__me-image w-full f-full rotate-12 hover:rotate-0 bg-black transition dur">
						<img src={mirio} alt="Bryant uwu" />
					</div>
				</div>
				{/* El contenido del about */}
				<div className="about__content">
					<div className="abut__cards grid grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
						<article
							className="about__card justify-around text-center flex flex-col items-center bg-[rgba(240,28,60,0.16)] w-[8rem] md:w-[9.5rem]
						border border-rojo-200 dark:border-naranja-200 dark:bg-[rgba(240,128,60,0.16)] aspect-square"
						>
							<div className="card__tittle flex flex-col items-center text-center">
								<IoMdSchool className="card__icon" />
								<h5 className="text-negro-200 text-sm dark:text-blanco">
									Estudios
								</h5>
							</div>
							<small className="text-gris-500 dark:text-gris-200">
								+3 Años estudiando
							</small>
						</article>
						<article
							className="about__card justify-around text-center flex flex-col items-center bg-[rgba(240,28,60,0.16)] w-[8rem] md:w-[9.5rem]
						border border-rojo-200 dark:border-naranja-200 dark:bg-[rgba(240,128,60,0.16)] aspect-square"
						>
							<div className="card__tittle flex flex-col items-center text-center">
								<RiComputerFill className="card__icon" />
								<h5 className="text-negro-200 text-sm dark:text-blanco">
									Hobbies
								</h5>
							</div>
							<TextSlider
								list={[
									"Programar",
									"Tocar guitarra",
									"Video juegos",
									"Ver peliculas",
								]}
							/>
						</article>
						<article
							className="about__card justify-around text-center flex flex-col items-center bg-[rgba(240,28,60,0.16)] w-full md:w-[9.5rem] 
						 border border-rojo-200 dark:border-naranja-200 dark:bg-[rgba(240,128,60,0.16)] col-span-2 md:col-span-1 md:aspect-square"
						>
							<div className="card__tittle flex flex-col items-center text-center">
								<IoBarChartSharp className="card__icon" />
								<h5 className="text-negro-200 text-sm dark:text-blanco">
									Habilidades
								</h5>
							</div>
							<TextSlider
								list={[
									"Ingles avanzado",
									"Trabajo en Equipo",
									"Gestion de conflictos",
									"Negociar",
								]}
							/>
						</article>
						<p className=" about__p text-gris-500 text-justify dark:text-gris-200 col-span-2	 md:col-span-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reiciendis hic in alias dolor. Saepe beatae molestias cum dolores
							totam nemo fugiat aperiam inventore modi dignissimos! Officia
							commodi maxime et sint magni id placeat expedita deleniti! Nulla
							voluptatem asperiores eveniet fugit laboriosam harum totam atque,
							ut ipsam aliquam quia dolorum quasi corporis fuga minima optio
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
