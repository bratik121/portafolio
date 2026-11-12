import { useTranslation } from "react-i18next";
import Reveal from "../../elements/Reveal";
import SectionTitle from "../../elements/SectionTitle";
import TechMarquee from "./TechMarquee";

function Experience() {
	const { t } = useTranslation();

	return (
		<section id="experience" className="py-24 md:py-32">
			<div className="shell">
				<Reveal>
					<SectionTitle title={t("experience.title")} />
				</Reveal>

				<Reveal delay={0.08} className="mt-10 md:mt-12">
					<TechMarquee />
				</Reveal>
			</div>
		</section>
	);
}

export default Experience;
