import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import type { Experiencia } from "../../data/experience";
import ProgressCard from "./ProgressCard";

type CarouselProps = {
	experiencias: Experiencia[];
};

function Carousel({ experiencias }: CarouselProps) {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const track = useRef<HTMLDivElement>(null);

	const scrollByCard = (direction: -1 | 1) => {
		track.current?.scrollBy({
			left: direction * 256,
			behavior: reduceMotion ? "auto" : "smooth",
		});
	};

	return (
		<div className="flex items-center gap-3">
			<button
				type="button"
				onClick={() => scrollByCard(-1)}
				aria-label={t("experience.previous")}
				className="hidden h-10 w-10 shrink-0 items-center justify-center border border-negro-500/15 text-2xl text-gris-500 transition-colors hover:border-rojo-200 hover:text-rojo-200 dark:border-blanco/15 dark:text-gris-200 dark:hover:border-naranja-200 dark:hover:text-naranja-200 md:flex"
			>
				<MdOutlineKeyboardArrowLeft aria-hidden="true" />
			</button>

			<div
				ref={track}
				role="region"
				aria-label={t("experience.title")}
				tabIndex={0}
				className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				{experiencias.map((experiencia) => (
					<div key={experiencia.label} className="snap-start shrink-0">
						<ProgressCard {...experiencia} />
					</div>
				))}
			</div>

			<button
				type="button"
				onClick={() => scrollByCard(1)}
				aria-label={t("experience.next")}
				className="hidden h-10 w-10 shrink-0 items-center justify-center border border-negro-500/15 text-2xl text-gris-500 transition-colors hover:border-rojo-200 hover:text-rojo-200 dark:border-blanco/15 dark:text-gris-200 dark:hover:border-naranja-200 dark:hover:text-naranja-200 md:flex"
			>
				<MdOutlineKeyboardArrowRight aria-hidden="true" />
			</button>
		</div>
	);
}

export default Carousel;
