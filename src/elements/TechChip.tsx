import { useTranslation } from "react-i18next";
import type { Technology } from "../data/experience";

type TechChipProps = {
	technology: Technology;
};

function TechChip({ technology }: TechChipProps) {
	const { t } = useTranslation();
	const Icon = technology.icon;
	const label = technology.labelKey ? t(technology.labelKey) : technology.label;

	return (
		<span className="inline-flex items-center gap-2 whitespace-nowrap rounded-[2px] border border-negro-500/15 bg-negro-500/[0.03] px-3 py-2 text-xs leading-none text-gris-500 dark:border-blanco/15 dark:bg-blanco/[0.04] dark:text-gris-200">
			{Icon ? (
				<Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
			) : null}
			{label}
		</span>
	);
}

export default TechChip;
