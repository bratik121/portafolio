import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CV from "../../assets/CURRICULUM BRYANT MITCHELL.pdf";
import me from "../../assets/final.png";
import AssembleText from "../../elements/AssembleText";
import ButtonLink from "../../elements/ButtonLink";
import Socials from "./Socials";

const EASE = [0.16, 1, 0.3, 1] as const;

function Header() {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();

	return (
		<header
			id="top"
			className="relative flex min-h-[100svh] flex-col justify-between pt-8 md:pt-12"
		>
			<div className="shell flex justify-end md:hidden">
				<Socials />
			</div>

			<div className="shell grid flex-1 grid-cols-12 items-center gap-x-6 gap-y-6 pb-16 pt-6 md:gap-y-12 md:pb-24">
				<div className="col-span-12 md:col-span-8">
					<motion.p
						className="text-sm text-gris-500 dark:text-gris-200"
						initial={reduceMotion ? false : { opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: EASE }}
					>
						{t("header.first")}
					</motion.p>

					<h1 className="mt-3 text-[clamp(3.25rem,9vw,6rem)] font-medium leading-[0.88] tracking-[-0.04em]">
						<span className="block">
							<AssembleText text={t("header.name.first")} delay={0.08} />
						</span>
						<span className="block md:pl-[12%]">
							<AssembleText text={t("header.name.last")} delay={0.28} />
						</span>
					</h1>

					<motion.div
						className="mt-8 flex items-center gap-4"
						initial={reduceMotion ? false : { opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
					>
						<span
							aria-hidden="true"
							className="h-px w-12 bg-rojo-200 dark:bg-naranja-200 md:w-16"
						/>
						<p className="text-lg md:text-xl">{t("header.role")}</p>
					</motion.div>

					<motion.div
						className="mt-8 flex flex-col gap-3 sm:flex-row"
						initial={reduceMotion ? false : { opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1, ease: EASE }}
					>
						<ButtonLink
							label={t("header.downloadCV")}
							href={CV}
							variant="secondary"
						/>
						<ButtonLink
							label={t("header.talk")}
							href="#contact-me"
							variant="primary"
						/>
					</motion.div>
				</div>

				<div className="col-span-12 md:col-span-4">
					<motion.div
						className="relative mx-auto w-[min(64vw,18rem)] md:ml-auto md:mr-0 md:w-full md:max-w-[23rem]"
						initial={reduceMotion ? false : { opacity: 0, y: 28 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
					>
						<div
							aria-hidden="true"
							className="arch absolute inset-0 translate-x-3 translate-y-3 bg-rojo-200 dark:bg-naranja-200"
						/>
						<motion.div
							className="arch relative overflow-hidden bg-negro-500/5 dark:bg-blanco/5"
							initial={
								reduceMotion
									? false
									: { clipPath: "inset(100% 0% 0% 0%)" }
							}
							animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
							transition={{ duration: 1, delay: 0.3, ease: EASE }}
						>
							<motion.img
								src={me}
								alt={t("header.portraitAlt")}
								className="aspect-[4/5] w-full object-cover object-top"
								initial={reduceMotion ? false : { scale: 1.08 }}
								animate={{ scale: 1 }}
								transition={{ duration: 1.3, delay: 0.3, ease: EASE }}
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-x-0 bottom-8 hidden md:block">
				<div className="shell flex items-end justify-between">
					<Socials />
				</div>
			</div>
		</header>
	);
}

export default Header;
