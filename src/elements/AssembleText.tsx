import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const letterVariants: Variants = {
	hidden: (index: number) => ({
		opacity: 0,
		y: "0.42em",
		x: index % 2 === 0 ? "-0.16em" : "0.16em",
		rotate: index % 2 === 0 ? -3 : 3,
	}),
	visible: {
		opacity: 1,
		y: 0,
		x: 0,
		rotate: 0,
		transition: { duration: 0.8, ease: EASE },
	},
};

type AssembleTextProps = {
	text: string;
	delay?: number;
	className?: string;
};

function AssembleText({ text, delay = 0, className }: AssembleTextProps) {
	const reduceMotion = useReducedMotion();
	const characters = Array.from(text);

	if (reduceMotion) {
		return <span className={className}>{text}</span>;
	}

	return (
		<span className={className}>
			<span className="sr-only">{text}</span>
			<motion.span
				aria-hidden="true"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.035,
							delayChildren: delay,
						},
					},
				}}
			>
				{characters.map((character, index) => (
					<motion.span
						key={`${character}-${index}`}
						custom={index}
						variants={letterVariants}
						className="inline-block"
					>
						{character === " " ? "\u00A0" : character}
					</motion.span>
				))}
			</motion.span>
		</span>
	);
}

export default AssembleText;
