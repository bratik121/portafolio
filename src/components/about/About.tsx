import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutImage from "../../assets/Aboutme.png";
import Reveal from "../../elements/Reveal";
import SectionTitle from "../../elements/SectionTitle";
import AboutCards from "./AboutCards";
import InfoSlider from "./InfoSlider";

const EASE = [0.16, 1, 0.3, 1] as const;

function About() {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();

	return (
		<section id="about" className="py-24 md:py-32">
			<div className="shell">
				<Reveal>
					<SectionTitle title={t("about.title")} />
				</Reveal>

				<div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-16">
					<div className="col-span-12 md:col-span-4">
						<motion.div
							className="relative mx-auto w-[min(78vw,20rem)] md:mx-0 md:w-full"
							initial={reduceMotion ? false : { opacity: 0, y: 28 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.7, ease: EASE }}
						>
							<div
								aria-hidden="true"
								className="arch absolute inset-0 -translate-x-3 translate-y-3 bg-rojo-200/10 dark:bg-naranja-200/10"
							/>
							<div className="arch relative overflow-hidden bg-negro-500/5 dark:bg-blanco/5">
								<img
									src={aboutImage}
									alt={t("about.portraitAlt")}
									className="aspect-[4/5] w-full object-cover object-[85%_0%]"
									loading="lazy"
								/>
							</div>
						</motion.div>
					</div>

					<div className="col-span-12 md:col-span-7 md:col-start-6">
						<Reveal>
							<AboutCards />
						</Reveal>
						<Reveal delay={0.1} className="mt-10">
							<InfoSlider />
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
