import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Loading() {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();

	return (
		<div
			role="status"
			aria-label={t("loading")}
			className="w-44 overflow-hidden border-b border-negro-500/15 dark:border-blanco/15"
		>
			<motion.div
				className="h-px bg-rojo-200 dark:bg-naranja-200"
				initial={reduceMotion ? { width: "55%" } : { x: "-100%" }}
				animate={reduceMotion ? { width: "55%" } : { x: "100%" }}
				transition={
					reduceMotion
						? undefined
						: { duration: 1.15, repeat: Infinity, ease: "easeInOut" }
				}
				style={{ width: reduceMotion ? "55%" : "45%" }}
			/>
		</div>
	);
}

export default Loading;
