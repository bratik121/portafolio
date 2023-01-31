import { aboutList, about } from "../../data/about";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const containerVariant = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

function InfoSlider() {
	const [index, setIndex] = useState<number>(0);
	const nextItem = (index: number) => {
		if (index !== aboutList.length - 1) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	};

	return (
		<div className="w-full col-span-2  md:col-span-3 flex flex-col items-center min-h-[256px] justify-between">
			<AnimatePresence>
				<motion.div
					className="w-full hover:cursor-pointer"
					variants={containerVariant}
					initial="hidden"
					animate="show"
					key={index}
					onClick={() => {
						nextItem(index);
					}}
				>
					<h3 className="font-semibold mb-2">{aboutList[index].tittle}</h3>
					<ul className=" about__p text-gris-500 text-justify dark:text-gris-200 list-disc px-4 w-full">
						{aboutList[index].content.map(
							(content: string, indexLi: number) => {
								return (
									<li
										key={indexLi}
										className=" marker:text-rojo-200 dark:marker:text-naranja-200"
									>
										<p key={indexLi}>{content}</p>
									</li>
								);
							}
						)}
					</ul>
				</motion.div>
			</AnimatePresence>
			{/* Slider Controls */}
			<div className="flex justify-around  w-[20%] mt-2">
				{aboutList.map((element: about, indexE: number) => {
					return (
						<span
							key={indexE}
							className={`info__slider__button w-[16px] h-[16px] text-2xl p-2 realtive 
					${
						index === indexE
							? "after:bg-rojo-200 dark:after:bg-naranja-200"
							: "after:bg-gris-500 dark:after:bg-gris-200"
					}
					`}
							onClick={() => {
								setIndex(indexE);
							}}
						></span>
					);
				})}
			</div>
		</div>
	);
}

export default InfoSlider;
