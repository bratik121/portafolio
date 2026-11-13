import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const EASE = [0.16, 1, 0.3, 1] as const;
const slides = ["intro", "objectives", "interests"] as const;

function InfoSlider() {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const [index, setIndex] = useState(0);
	const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
	const activeSlide = slides[index];

	const handleKeyDown = (
		event: React.KeyboardEvent<HTMLButtonElement>,
		current: number
	) => {
		let next = current;

		switch (event.key) {
			case "ArrowRight":
				next = (current + 1) % slides.length;
				break;
			case "ArrowLeft":
				next = (current - 1 + slides.length) % slides.length;
				break;
			case "Home":
				next = 0;
				break;
			case "End":
				next = slides.length - 1;
				break;
			default:
				return;
		}

		event.preventDefault();
		setIndex(next);
		tabRefs.current[next]?.focus();
	};

	const content = t(`about.slides.${activeSlide}.content`, {
		returnObjects: true,
	}) as unknown as string[];

	return (
		<div>
			<div
				role="tablist"
				aria-label={t("about.title")}
				className="flex flex-wrap gap-x-6 gap-y-2 border-b border-negro-500/15 pb-3 dark:border-blanco/15"
			>
				{slides.map((slide, slideIndex) => {
					const isActive = slideIndex === index;

					return (
						<button
							key={slide}
							type="button"
							role="tab"
							id={`about-tab-${slide}`}
							aria-selected={isActive}
							aria-controls="about-panel"
							onClick={() => setIndex(slideIndex)}
							onKeyDown={(event) => handleKeyDown(event, slideIndex)}
							ref={(element) => {
								tabRefs.current[slideIndex] = element;
							}}
							tabIndex={isActive ? 0 : -1}
							className={`pb-1 text-sm transition-colors duration-200 ${
								isActive
									? "text-rojo-200 dark:text-naranja-200"
									: "text-gris-500 hover:text-negro-500 dark:text-gris-200 dark:hover:text-blanco"
							}`}
						>
							{t(`about.slides.${slide}.title`)}
						</button>
					);
				})}
			</div>

			<div
				id="about-panel"
				role="tabpanel"
				aria-labelledby={`about-tab-${activeSlide}`}
				className="min-h-[13rem] pt-6 md:min-h-[11rem]"
			>
				<AnimatePresence mode="wait" initial={false}>
					<motion.div
						key={activeSlide}
						initial={reduceMotion ? false : { opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
						transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE }}
					>
						<ul className="measure list-disc space-y-2 pl-5 text-negro-500/80 marker:text-rojo-200 dark:text-blanco/80 dark:marker:text-naranja-200">
							{content.map((paragraph, paragraphIndex) => (
								<li key={paragraphIndex}>
									<p>{paragraph}</p>
								</li>
							))}
						</ul>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default InfoSlider;
