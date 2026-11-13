import { AiOutlineEye } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import type { Project } from "../data/portafolio";

type ProjectLinksProps = {
	project: Project;
	className?: string;
};

const linkClass =
	"link-underline inline-flex items-center gap-2 text-rojo-200 hover:text-rojo-500 dark:text-naranja-200 dark:hover:text-naranja-500";

function ProjectLinks({ project, className }: ProjectLinksProps) {
	const { t } = useTranslation();

	if (!project.url && !project.repository) {
		return null;
	}

	return (
		<div
			className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-sm ${
				className ?? ""
			}`}
		>
			{project.url ? (
				<a href={project.url} target="_blank" rel="noreferrer" className={linkClass}>
					<AiOutlineEye aria-hidden="true" />
					{t("projects.visit")}
				</a>
			) : null}
			{project.repository ? (
				<a
					href={project.repository}
					target="_blank"
					rel="noreferrer"
					className={linkClass}
				>
					<RiGitRepositoryLine aria-hidden="true" />
					{t("projects.repository")}
				</a>
			) : null}
		</div>
	);
}

export default ProjectLinks;
