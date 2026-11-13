import { useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Reveal from "../../elements/Reveal";
import SectionTitle from "../../elements/SectionTitle";
import { proyects } from "../../data/portafolio";
import ProjectsDeck from "./ProjectsDeck";
import WorkItem from "./WorkItem";

function ProjectsGrid() {
	return (
		<div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-16 xl:grid-cols-3">
			{proyects.map((project) => (
				<Reveal key={project.id} y={16}>
					<WorkItem project={project} />
				</Reveal>
			))}
		</div>
	);
}

function Portafolio() {
	const { t } = useTranslation();
	const isDesktop = useMediaQuery("(min-width: 1280px)");
	const reduceMotion = useReducedMotion();
	const useDeck = Boolean(isDesktop && !reduceMotion);

	return (
		<section id="portafolio" className={useDeck ? "" : "py-24 md:py-32"}>
			{useDeck ? (
				<ProjectsDeck projects={proyects} />
			) : (
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
					<ProjectsGrid />
				</div>
			)}
		</section>
	);
}

export default Portafolio;
