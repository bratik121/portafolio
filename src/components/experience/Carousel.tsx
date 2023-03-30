import ProgressCard from "./ProgressCard";
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useContext } from "react";
import { experiencia } from "../../data/experience";
import { langContext } from "../../App";
function Carousel(props: any) {
	const [width, setWidth] = useState<number>(0);
	const [index, setIndex] = useState<number>(0);
	const carosel = useRef() as React.MutableRefObject<HTMLDivElement>;
	const [spaces, setSpaces] = useState<number[]>([]);
	const { lang } = useContext(langContext);
	useEffect(() => {
		setWidth(carosel.current.scrollWidth - carosel.current.offsetWidth);
		if (spaces.length === 0) {
			props.experiencias.forEach((element: experiencia, index: number) => {
				if (index === 0) {
					spaces.push(index);
				} else {
					spaces.push(spaces[index - 1] - 235);
				}
			});
			spaces.splice(spaces.length - 3, spaces.length);
			spaces.push(-(carosel.current.scrollWidth - carosel.current.offsetWidth));
		}
	}, []);

	const moveRight = () => {
		if (index !== spaces.length - 1) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	};
	const moveLeft = () => {
		if (index !== 0) {
			setIndex(index - 1);
		} else if (index === 0) {
			setIndex(spaces.length - 1);
		}
	};

	return (
		<div className="w-full flex flex-col ">
			<h3 className="text-center text-xl italic mb-4">{props.tittle}</h3>
			<div className="w-full flex items-center">
				<MdOutlineKeyboardArrowLeft
					className="hidden md:block w-[5%] text-4xl hover:cursor-pointer"
					onClick={moveLeft}
				/>
				<div className="w-[90%]">
					<motion.div
						className="carousel flex w-[100%] items-center overflow-hidden"
						ref={carosel}
					>
						<motion.div
							className={`inner-carousel flex w-full cursor-grab`}
							animate={{ x: spaces[index] }}
							drag="x"
							dragConstraints={{ right: 0, left: -width }}
							dragElastic={0.15}
						>
							{props.experiencias.map(
								(experiencia: experiencia, index: number) => {
									return (
										<motion.div className="mx-2 " key={index}>
											<ProgressCard
												area={experiencia.label}
												percent={experiencia.percent}
												description={experiencia.description[lang]}
											/>
										</motion.div>
									);
								}
							)}
						</motion.div>
					</motion.div>
				</div>
				<MdOutlineKeyboardArrowRight
					className="hidden md:block w-[5%] text-4xl hover:cursor-pointer"
					onClick={moveRight}
				/>
			</div>
		</div>
	);
}

export default Carousel;
