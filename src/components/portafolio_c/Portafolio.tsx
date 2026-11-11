import { useRef } from "react";
import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Reveal from "../../elements/Reveal";
import SectionTitle from "../../elements/SectionTitle";
import { proyects } from "../../data/portafolio";
import WorkItem from "./WorkItem";

function Portafolio() {
	const { t } = useTranslation();
	const sectionRef = useRef<HTMLElement>(null);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const parallax = useTransform(scrollYProgress, [0, 1], [36, -36]);
	const enableParallax = Boolean(isDesktop && !reduceMotion);

	return (
		<section ref={sectionRef} id="portafolio" className="py-24 md:py-32">
			<div className="shell">
				<Reveal>
					<SectionTitle
						title={t("projects.title")}
						subtitle={
							t("projects.subtitle") === "projects.subtitle"
								? undefined
								: t("projects.subtitle")
						}
					/>
				</Reveal>

				<div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 md:mt-16 md:grid-cols-3 md:gap-y-6">
					{proyects.map((project, index) => (
						<motion.div
							key={project.id}
							style={{ y: enableParallax && index === 1 ? parallax : 0 }}
						>
							<WorkItem project={project} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Portafolio;
