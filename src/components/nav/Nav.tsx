import { AiOutlineHome, AiOutlineTool } from "react-icons/ai";
import { BiBook, BiBriefcaseAlt, BiMessageDetail } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useActiveSection } from "../../hooks/useActiveSection";
import Switch from "./Switch";

const sections = ["top", "about", "experience", "portafolio", "contact-me"] as const;

const navItems = [
	{ hash: "#top", icon: AiOutlineHome, label: "nav.home" },
	{ hash: "#about", icon: BiBook, label: "nav.about" },
	{ hash: "#experience", icon: AiOutlineTool, label: "nav.experience" },
	{ hash: "#portafolio", icon: BiBriefcaseAlt, label: "nav.projects" },
	{ hash: "#contact-me", icon: BiMessageDetail, label: "nav.contact" },
];

type NavProps = {
	dark: boolean;
	setTheme: () => void;
};

function Nav({ dark, setTheme }: NavProps) {
	const { t } = useTranslation();
	const active = useActiveSection(sections, "#top");

	return (
		<nav
			aria-label={t("nav.mainLabel")}
			className="fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 rounded-full border border-negro-500/15 bg-blanco/85 p-1.5 shadow-[0_12px_32px_-16px_rgba(7,2,13,0.45)] backdrop-blur-md dark:border-blanco/15 dark:bg-negro-200/85 md:bottom-8"
		>
			{navItems.map((item) => {
				const Icon = item.icon;
				const isActive = active === item.hash;

				return (
					<a
						key={item.hash}
						href={item.hash}
						aria-label={t(item.label)}
						aria-current={isActive ? "page" : undefined}
						className={`flex h-9 w-9 items-center justify-center rounded-full text-lg transition-colors duration-200 ${
							isActive
								? "bg-rojo-200/15 text-rojo-200 dark:bg-naranja-200/15 dark:text-naranja-200"
								: "text-gris-500 hover:text-negro-500 dark:text-gris-200 dark:hover:text-blanco"
						}`}
					>
						<Icon aria-hidden="true" />
					</a>
				);
			})}
			<Switch dark={dark} setTheme={setTheme} />
		</nav>
	);
}

export default Nav;
