import { aboutList } from "../../data/about";
import { motion } from "framer-motion";
import { useState } from "react";

function InfoSlider() {
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

	const [index, setIndex] = useState<number>(0);
	const nextItem = (index: number) => {
		if (index !== aboutList.length - 1) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	};
	return (
		<div
			className="w-full col-span-2  md:col-span-3"
			onClick={() => {
				nextItem(index);
			}}
		>
			<motion.div
				variants={containerVariant}
				initial="hidden"
				animate="show"
				exit="exit"
				key={index}
			>
				<h3 className="font-semibold mb-2">{aboutList[index].tittle}</h3>
				<p className=" about__p text-gris-500 text-justify dark:text-gris-200 	">
					{aboutList[index].content}
				</p>
			</motion.div>
		</div>
	);
}

export default InfoSlider;
