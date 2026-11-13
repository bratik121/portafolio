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

				<Reveal delay={0.08} className="mt-8 md:mt-10">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-span-12 lg:col-span-7 lg:col-start-6">
							<span
								aria-hidden="true"
								className="mb-5 block h-px w-12 bg-rojo-200 dark:bg-naranja-200"
							/>
							<p className="measure text-[clamp(1.4rem,2.2vw,1.875rem)] leading-[1.35] tracking-[-0.015em] text-gris-500 dark:text-gris-200">
								{t("statement.lead")}{" "}
								<span className="mt-3 block font-medium text-negro-500 dark:text-blanco">
									{t("statement.highlight")}
								</span>
							</p>
						</div>
					</div>
				</Reveal>

				<Reveal delay={0.16} className="mt-12 md:mt-16">
					<TechMarquee />
				</Reveal>
			</div>
		</section>
	);
}

export default Experience;
