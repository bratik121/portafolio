import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	y?: number;
};

function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={reduceMotion ? false : { opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, ease: EASE, delay }}
		>
			{children}
		</motion.div>
	);
}

export default Reveal;
