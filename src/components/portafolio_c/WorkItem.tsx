import { useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectFacts from "../../elements/ProjectFacts";
import ProjectLinks from "../../elements/ProjectLinks";
import ProjectStack from "../../elements/ProjectStack";
import type { Project } from "../../data/portafolio";

type WorkItemProps = {
	project: Project;
};

function WorkItem({ project }: WorkItemProps) {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const titleKey = `projects.items.${project.id}.title`;
	const descriptionKey = `projects.items.${project.id}.description`;
	const title = t(titleKey);
	const description = t(descriptionKey);

	return (
		<article className="group flex h-full flex-col">
			<div className="arch-soft overflow-hidden bg-negro-500/5 dark:bg-blanco/5">
				<img
					src={project.image}
					alt={t("projects.imageAlt", { title })}
					loading="lazy"
					className={`aspect-[16/10] w-full object-cover ${
						reduceMotion
							? ""
							: "transition-transform duration-700 ease-out group-hover:scale-[1.03]"
					}`}
				/>
			</div>

			<div className="mt-5 flex flex-1 flex-col">
				<h3 className="text-2xl font-medium tracking-[-0.02em]">{title}</h3>
				<p className="measure mt-2 text-sm leading-relaxed text-gris-500 dark:text-gris-200">
					{description}
				</p>

				<ProjectFacts project={project} className="mt-4" />
				<ProjectStack project={project} className="mt-4" />
				<ProjectLinks project={project} className="mt-4" />
			</div>
		</article>
	);
}

export default WorkItem;
