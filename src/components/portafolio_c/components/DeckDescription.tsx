import { motion, useReducedMotion } from "framer-motion";
type DeckDescriptionProps = {
	description: string;
};

function DeckDescription({ description }: DeckDescriptionProps) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			initial={reduceMotion ? false : { opacity: 0, y: 4 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
		>
			<p className="measure text-sm leading-relaxed text-gris-500 dark:text-gris-200">
				{description}
			</p>
		</motion.div>
	);
}

export default DeckDescription;
