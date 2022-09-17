import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Socials() {
	return (
		<div className="header__socials hidden md:flex flex-col gap-4 absolute left-0 bottom-[2rem] after:bg-rojo-200 dark:after:bg-naranja-200">
			<a
				className="hover:text-rojo-500 dark:hover:text-naranja-500"
				href="https://www.linkedin.com/in/bryant-mckale-mitchell-cisneros-a59717204/"
				target="_blank"
			>
				<BsLinkedin />
			</a>
			<a
				className="hover:text-rojo-500 dark:hover:text-naranja-500"
				href="https://github.com/bratik121"
				target="_blank"
			>
				<BsGithub />
			</a>
		</div>
	);
}

export default Socials;
