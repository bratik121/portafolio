import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiPause, BiPlay } from "react-icons/bi";
import TechChip from "../../elements/TechChip";
import {
	techCategories,
	technologies,
	type TechCategory,
} from "../../data/experience";

const rows: TechCategory[][] = [
	["languages", "frontend"],
	[
		"backend",
		"databases",
		"messaging",
		"ml",
		"devops",
		"tooling",
		"architecture",
	],
];

function CategoryGroup({ category }: { category: TechCategory }) {
	const { t } = useTranslation();
	const items = technologies.filter(
		(technology) => technology.category === category
	);

	return (
		<div className="flex items-center gap-3 border-r border-negro-500/15 pr-6 dark:border-blanco/15">
			<span className="shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-gris-500 dark:text-gris-200 pl-1.5 ">
				{t(`experience.categories.${category}`)}
			</span>
			<div role="list" className="flex items-center gap-2">
				{items.map((technology) => (
					<div key={technology.id} role="listitem">
						<TechChip technology={technology} />
					</div>
				))}
			</div>
		</div>
	);
}

function MarqueeRow({
	categories,
	reverse,
	paused,
}: {
	categories: TechCategory[];
	reverse?: boolean;
	paused: boolean;
}) {
	const content = (hidden: boolean) => (
		<div
			aria-hidden={hidden ? "true" : undefined}
			className="flex shrink-0 items-center"
		>
			{categories.map((category) => (
				<CategoryGroup key={category} category={category} />
			))}
		</div>
	);

	return (
		<div className="marquee-mask overflow-hidden">
			<div
				className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
				data-paused={paused ? "true" : "false"}
			>
				{content(false)}
				{content(true)}
			</div>
		</div>
	);
}

function StaticGrid() {
	const { t } = useTranslation();

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{techCategories.map((category) => {
				const items = technologies.filter(
					(technology) => technology.category === category
				);

				return (
					<div key={category}>
						<h3 className="text-xs font-medium uppercase tracking-[0.18em] text-gris-500  dark:text-gris-200">
							{t(`experience.categories.${category}`)}
						</h3>
						<div role="list" className="mt-3 flex flex-wrap gap-2">
							{items.map((technology) => (
								<div key={technology.id} role="listitem">
									<TechChip technology={technology} />
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}

function TechMarquee() {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const [paused, setPaused] = useState(false);

	if (reduceMotion) {
		return (
			<div role="region" aria-label={t("experience.marqueeLabel")}>
				<StaticGrid />
			</div>
		);
	}

	return (
		<div
			role="region"
			aria-label={t("experience.marqueeLabel")}
			className="flex flex-col gap-4"
		>
			<div className="flex justify-end">
				<button
					type="button"
					onClick={() => setPaused((value) => !value)}
					className="link-underline inline-flex items-center gap-2 text-xs text-gris-500 transition-colors duration-200 hover:text-rojo-200 dark:text-gris-200 dark:hover:text-naranja-200"
				>
					{paused ? (
						<BiPlay aria-hidden="true" className="text-base" />
					) : (
						<BiPause aria-hidden="true" className="text-base" />
					)}
					{paused ? t("experience.resume") : t("experience.pause")}
				</button>
			</div>

			<div className="flex flex-col gap-2">
				{rows.map((categories, index) => (
					<MarqueeRow
						key={index}
						categories={categories}
						reverse={index === 1}
						paused={paused}
					/>
				))}
			</div>
		</div>
	);
}

export default TechMarquee;
