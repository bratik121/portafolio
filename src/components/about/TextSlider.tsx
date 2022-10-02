import { motion } from "framer-motion";
function TextSlider(props: any) {
	const smallVariant = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { duration: 0.7, ease: "easeInOut" } },
	};
	const clickHandler = (index: number) => {
		props.setIndex(index);
	};
	return (
		<div className="flex flex-col items-center">
			<motion.small
				className="actual active-anim text-gris-500 dark:text-gris-200"
				variants={smallVariant}
				initial="hidden"
				animate="show"
				key={props.index}
			>
				{props.list[props.index]}
			</motion.small>
			<div className="flex justify-around">
				{props.list.map((element: string, index: number) => {
					return (
						<span
							className={`text__slider__button w-[16px] h-[16px] text-2xl p-2 realtive
                            ${
															props.index === index
																? "after:bg-rojo-200 dark:after:bg-naranja-200"
																: "after:bg-gris-500 dark:after:bg-gris-200"
														}
                            `}
							key={index}
							onClick={() => {
								clickHandler(index);
							}}
						></span>
					);
				})}
			</div>
		</div>
	);
}

export default TextSlider;
