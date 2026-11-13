import { useState } from "react";
import { IoMdSchool } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import TextSlider from "./TextSlider";

const rowClass =
	"grid grid-cols-[1.5rem_1fr] items-center gap-4 border-b border-negro-500/15 py-5 dark:border-blanco/15 md:grid-cols-[4rem_1fr]";

function AboutCards() {
	const { t } = useTranslation();
	const [hobbyIndex, setHobbyIndex] = useState(0);
	const [skillIndex, setSkillIndex] = useState(0);
	const hobbies = t("about.hobbies", { returnObjects: true }) as unknown as string[];
	const skills = t("about.skills", { returnObjects: true }) as unknown as string[];

	return (
		<div className="border-t border-negro-500/15 dark:border-blanco/15">
			<div className={rowClass}>
				<IoMdSchool
					aria-hidden="true"
					className="text-xl text-rojo-200 dark:text-naranja-200"
				/>
				<div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
					<h3 className="text-sm font-medium">{t("about.cards.studies.title")}</h3>
					<p className="text-sm text-gris-500 dark:text-gris-200">
						{t("about.cards.studies.value")}
					</p>
				</div>
			</div>

			<div className={rowClass}>
				<RiComputerFill
					aria-hidden="true"
					className="text-xl text-rojo-200 dark:text-naranja-200"
				/>
				<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
					<h3 className="text-sm font-medium">{t("about.cards.hobbies.title")}</h3>
					<TextSlider
						list={hobbies}
						index={hobbyIndex}
						setIndex={setHobbyIndex}
						label={t("about.cards.hobbies.title")}
					/>
				</div>
			</div>

			<div className={rowClass}>
				<IoBarChartSharp
					aria-hidden="true"
					className="text-xl text-rojo-200 dark:text-naranja-200"
				/>
				<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
					<h3 className="text-sm font-medium">{t("about.cards.skills.title")}</h3>
					<TextSlider
						list={skills}
						index={skillIndex}
						setIndex={setSkillIndex}
						label={t("about.cards.skills.title")}
					/>
				</div>
			</div>
		</div>
	);
}

export default AboutCards;
