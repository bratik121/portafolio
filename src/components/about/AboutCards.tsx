import { useState } from "react";
import { motion as m } from "framer-motion";
import { IoMdSchool } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import TextSlider from "./TextSlider";
import { skills, hobbies } from "../../data/about";

const containerVariant = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delay: 0.2,
		},
	},
};
const articleVariant = {
	hidden: { y: -300, opacity: 0 },
	show: { y: 0, opacity: 1 },
};
function AboutCards() {
	const [indexHobbies, setIndexHobbies] = useState<number>(0);
	const [indexSkills, setIndexSkills] = useState<number>(0);
	const nextItem = (
		index: number,
		setter: React.Dispatch<React.SetStateAction<number>>,
		array: string[]
	) => {
		if (index !== array.length - 1) {
			setter(index + 1);
		} else {
			setter(0);
		}
	};
	const prevtItem = (
		index: number,
		setter: React.Dispatch<React.SetStateAction<number>>,
		array: string[]
	) => {
		if (index !== 0) {
			setter(index - 1);
		} else {
			setter(array.length - 1);
		}
	};
	const setHobbieIndex = (index: number) => {
		setIndexHobbies(index);
	};
	const setSkillIndex = (index: number) => {
		setIndexSkills(index);
	};
	return (
		<m.div
			className="abut__cards grid grid-cols-2 md:grid-cols-3 gap-5 justify-items-center"
			variants={containerVariant}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
		>
			{/* Estudios */}
			<m.article
				className="about__card justify-around text-center flex flex-col items-center bg-[rgba(240,28,60,0.16)] w-[8rem] md:w-[9.5rem]
						border border-rojo-200 dark:border-naranja-200 dark:bg-[rgba(240,128,60,0.16)] aspect-square"
				variants={articleVariant}
			>
				<div className="card__tittle flex flex-col items-center text-center">
					<IoMdSchool className="card__icon" />
					<h5 className="text-negro-200 text-sm dark:text-blanco">Estudios</h5>
				</div>
				<small className="text-gris-500 dark:text-gris-200">
					4 Años estudiando
				</small>
			</m.article>
			{/* Hobbies */}
			<m.article
				className="about__card justify-around text-center flex flex-col items-center bg-[rgba(240,28,60,0.16)] w-[8rem] md:w-[9.5rem]
						border border-rojo-200 dark:border-naranja-200 dark:bg-[rgba(240,128,60,0.16)] aspect-square relative overflow-hidden"
				variants={articleVariant}
			>
				<div className="card__tittle flex flex-col items-center text-center">
					<RiComputerFill className="card__icon" />
					<h5 className="text-negro-200 text-sm dark:text-blanco">Hobbies</h5>
				</div>
				<TextSlider
					list={hobbies}
					index={indexHobbies}
					setIndex={setHobbieIndex}
				/>
				<div
					className="left-boton cursor-pointer absolute h-full w-[22%]  left-0 "
					onClick={() => {
						prevtItem(indexHobbies, setIndexHobbies, hobbies);
					}}
				></div>
				<div
					className="right-boton cursor-pointer absolute h-full w-[22%]  right-0 "
					onClick={() => {
						nextItem(indexHobbies, setIndexHobbies, hobbies);
					}}
				></div>
			</m.article>
			{/* Habilidades */}
			<m.article
				className="about__card justify-around text-center flex flex-col items-center bg-[rgba(240,28,60,0.16)] w-full md:w-[9.5rem] 
						 border border-rojo-200 dark:border-naranja-200 dark:bg-[rgba(240,128,60,0.16)] col-span-2 md:col-span-1 md:aspect-square relative overflow-hidden"
				variants={articleVariant}
			>
				<div className="card__tittle flex flex-col items-center text-center">
					<IoBarChartSharp className="card__icon" />
					<h5 className="text-negro-200 text-sm dark:text-blanco">
						Habilidades
					</h5>
				</div>
				<TextSlider
					list={skills}
					index={indexSkills}
					setIndex={setSkillIndex}
				/>
				<div
					className="left-boton cursor-pointer absolute h-full  w-[28%] md:w-[22%]  left-0"
					onClick={() => {
						prevtItem(indexSkills, setIndexSkills, skills);
					}}
				></div>
				<div
					className="right-boton cursor-pointer absolute h-full w-[28%]  md:w-[22%]  right-0"
					onClick={() => {
						nextItem(indexSkills, setIndexSkills, skills);
					}}
				></div>
			</m.article>
		</m.div>
	);
}

export default AboutCards;
