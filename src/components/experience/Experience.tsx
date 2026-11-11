import { useTranslation } from "react-i18next";
import Reveal from "../../elements/Reveal";
import SectionTitle from "../../elements/SectionTitle";
import { experienciasD, experienciasP } from "../../data/experience";
import Carousel from "./Carousel";

function Experience() {
	const { t } = useTranslation();

	return (
		<section id="experience" className="py-24 md:py-32">
			<div className="shell">
				<Reveal>
					<SectionTitle title={t("experience.title")} />
				</Reveal>

				<Reveal delay={0.08} className="mt-12 md:mt-16">
					<Carousel experiencias={experienciasP} />
				</Reveal>

				<Reveal
					delay={0.12}
					className="mt-12 border-t border-negro-500/15 pt-12 dark:border-blanco/15 md:mt-14 md:pt-14"
				>
					<Carousel experiencias={experienciasD} />
				</Reveal>
			</div>
		</section>
	);
}

export default Experience;
