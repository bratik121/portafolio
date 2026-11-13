import { useTranslation } from "react-i18next";
import type { Project } from "../data/portafolio";

type ProjectFactsProps = {
	project: Project;
	className?: string;
};

/**
 * Optional metadata for a project. Every field is optional, so a project
 * without a year or a role renders nothing instead of leaving empty slots.
 */
function ProjectFacts({ project, className }: ProjectFactsProps) {
	const { t } = useTranslation();

	if (!project.year && !project.role) {
		return null;
	}

	return (
		<dl
			className={`flex flex-wrap items-baseline gap-x-6 gap-y-1 text-sm ${
				className ?? ""
			}`}
		>
			{project.year ? (
				<div className="flex items-baseline gap-2">
					<dt className="text-xs uppercase tracking-[0.14em] text-gris-500 dark:text-gris-200">
						{t("projects.yearLabel")}
					</dt>
					<dd className="tabular-nums">{project.year}</dd>
				</div>
			) : null}
			{project.role ? (
				<div className="flex items-baseline gap-2">
					<dt className="text-xs uppercase tracking-[0.14em] text-gris-500 dark:text-gris-200">
						{t("projects.roleLabel")}
					</dt>
					<dd>{project.role}</dd>
				</div>
			) : null}
		</dl>
	);
}

export default ProjectFacts;
