import { useReducedMotion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/portafolio";

type WorkItemProps = {
	project: Project;
};

function WorkItem({ project }: WorkItemProps) {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const title = t(`projects.items.${project.id}.title`);
	const description = t(`projects.items.${project.id}.description`);

	return (
		<article className="group">
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

			<div className="mt-5">
				<h3 className="text-2xl font-medium tracking-[-0.02em]">{title}</h3>
				<p className="measure mt-2 text-sm leading-relaxed text-gris-500 dark:text-gris-200">
					{description}
				</p>

				{project.url || project.repository ? (
					<div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
						{project.url ? (
							<a
								href={project.url}
								target="_blank"
								rel="noreferrer"
								className="link-underline inline-flex items-center gap-2 text-rojo-200 hover:text-rojo-500 dark:text-naranja-200 dark:hover:text-naranja-500"
							>
								<AiOutlineEye aria-hidden="true" />
								{t("projects.visit")}
							</a>
						) : null}
						{project.repository ? (
							<a
								href={project.repository}
								target="_blank"
								rel="noreferrer"
								className="link-underline inline-flex items-center gap-2 text-rojo-200 hover:text-rojo-500 dark:text-naranja-200 dark:hover:text-naranja-500"
							>
								<RiGitRepositoryLine aria-hidden="true" />
								{t("projects.repository")}
							</a>
						) : null}
					</div>
				) : null}
			</div>
		</article>
	);
}

export default WorkItem;
