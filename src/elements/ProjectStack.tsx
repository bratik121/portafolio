import { useTranslation } from "react-i18next";
import TechChip from "./TechChip";
import { technologyById } from "../data/experience";
import type { Project } from "../data/portafolio";

type ProjectStackProps = {
	project: Project;
	className?: string;
};

function ProjectStack({ project, className }: ProjectStackProps) {
	const { t } = useTranslation();

	if (!project.stack || project.stack.length === 0) {
		return null;
	}

	return (
		<ul
			aria-label={t("projects.stackLabel")}
			className={`flex flex-wrap gap-2 ${className ?? ""}`}
		>
			{project.stack.map((technologyId) => {
				const technology = technologyById.get(technologyId);

				return technology ? (
					<li key={technologyId}>
						<TechChip technology={technology} />
					</li>
				) : null;
			})}
		</ul>
	);
}

export default ProjectStack;
