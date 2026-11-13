import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<motion.div
			aria-hidden="true"
			className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-rojo-200 dark:bg-naranja-200"
			style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
		/>
	);
}

export default ScrollProgress;
