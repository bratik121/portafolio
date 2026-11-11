import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

type SwitchProps = {
	dark: boolean;
	setTheme: () => void;
};

function Switch({ dark, setTheme }: SwitchProps) {
	const { t } = useTranslation();

	return (
		<button
			type="button"
			role="switch"
			aria-checked={dark}
			aria-label={t("nav.toggleTheme")}
			onClick={setTheme}
			className="relative ml-1 flex h-8 w-14 shrink-0 items-center rounded-full border border-negro-500/15 bg-negro-500/5 transition-colors dark:border-blanco/15 dark:bg-blanco/10"
		>
			<span
				aria-hidden="true"
				className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 motion-reduce:transition-none ${
					dark
						? "translate-x-6 bg-naranja-200 text-negro-500"
						: "translate-x-0 bg-rojo-200 text-blanco"
				}`}
			>
				{dark ? (
					<BsFillMoonFill className="text-xs" />
				) : (
					<BsSunFill className="text-xs" />
				)}
			</span>
		</button>
	);
}

export default Switch;
