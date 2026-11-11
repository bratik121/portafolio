import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Experiencia } from "../../data/experience";

const EASE = [0.16, 1, 0.3, 1] as const;

function ProgressCard({ percent, label, type }: Experiencia) {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const finalOffset = 1 - percent / 100;

	return (
		<article className="flex w-[240px] flex-col items-center gap-4 py-5">
			<div className="relative aspect-square w-[170px]">
				<svg
					viewBox="0 0 140 140"
					className="h-full w-full -rotate-90"
					aria-hidden="true"
				>
					<circle
						cx="70"
						cy="70"
						r="62"
						fill="none"
						strokeWidth="1.5"
						className="stroke-negro-500/15 dark:stroke-blanco/15"
					/>
					{reduceMotion ? (
						<circle
							cx="70"
							cy="70"
							r="62"
							fill="none"
							strokeWidth="2"
							strokeLinecap="round"
							pathLength={1}
							strokeDasharray={1}
							strokeDashoffset={finalOffset}
							className="stroke-rojo-200 dark:stroke-naranja-200"
						/>
					) : (
						<motion.circle
							cx="70"
							cy="70"
							r="62"
							fill="none"
							strokeWidth="2"
							strokeLinecap="round"
							pathLength={1}
							strokeDasharray={1}
							initial={{ strokeDashoffset: 1 }}
							whileInView={{ strokeDashoffset: finalOffset }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1.2, ease: EASE }}
							className="stroke-rojo-200 dark:stroke-naranja-200"
						/>
					)}
				</svg>

				<div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
					<p className="text-[2.75rem] font-medium leading-none tracking-[-0.03em]">
						{percent}
						<span className="text-base">%</span>
					</p>
					<p className="max-w-[9rem] text-center text-sm text-gris-500 dark:text-gris-200">
						{label}
					</p>
				</div>
			</div>

			<p className="text-xs text-gris-500 dark:text-gris-200">
				{t(`experience.types.${type}`)}
			</p>
		</article>
	);
}

export default ProgressCard;
