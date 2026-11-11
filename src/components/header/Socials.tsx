import { BsGithub, BsLinkedin } from "react-icons/bs";

function Socials() {
	return (
		<div className="pointer-events-auto flex items-center gap-4 md:flex-col md:items-start">
			<span
				aria-hidden="true"
				className="hidden h-16 w-px bg-negro-500/15 dark:bg-blanco/15 md:block"
			/>
			<a
				aria-label="LinkedIn"
				className="text-lg text-gris-500 transition-colors hover:text-rojo-200 dark:text-gris-200 dark:hover:text-naranja-200"
				href="https://www.linkedin.com/in/bryant-mckale-mitchell-cisneros-a59717204/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a
				aria-label="GitHub"
				className="text-lg text-gris-500 transition-colors hover:text-rojo-200 dark:text-gris-200 dark:hover:text-naranja-200"
				href="https://github.com/bratik121"
				target="_blank"
				rel="noreferrer"
			>
				<BsGithub />
			</a>
		</div>
	);
}

export default Socials;
