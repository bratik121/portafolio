import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import Reveal from "../../elements/Reveal";
import SectionTitle from "../../elements/SectionTitle";
import Form from "./Form";

const EASE = [0.16, 1, 0.3, 1] as const;

type ContactMeProps = {
	onSuccess: () => void;
};

function ContactMe({ onSuccess }: ContactMeProps) {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();

	const channels = [
		{
			name: t("contact.telegramName"),
			description: t("contact.directMessage"),
			label: t("contact.telegram"),
			href: "https://t.me/DimeBrii",
			icon: FaTelegramPlane,
		},
		{
			name: t("contact.whatsappName"),
			description: t("contact.directMessage"),
			label: t("contact.whatsapp"),
			href: "https://wa.me/584123109047",
			icon: ImWhatsapp,
		},
	];

	return (
		<section id="contact-me" className="py-24 md:py-32">
			<div className="shell">
				<Reveal>
					<SectionTitle title={t("contact.title")} />
				</Reveal>

				<div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-16">
					<motion.div
						className="col-span-12 md:col-span-4"
						initial={reduceMotion ? false : { opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, ease: EASE }}
					>
						<ul className="divide-y divide-negro-500/15 border-y border-negro-500/15 dark:divide-blanco/15 dark:border-blanco/15">
							{channels.map(
								({ name, description, label, href, icon: Icon }, index) => (
									<li key={name}>
										<a
											href={href}
											target="_blank"
											rel="noreferrer"
											aria-label={label}
											className="group flex items-center gap-4 py-4 sm:gap-5 md:py-5"
										>
											<span
												className={`${!index ? "arch" : "inverted-arch"} flex h-24 w-16 shrink-0 items-center justify-center border border-negro-500/25 text-rojo-200 transition-colors duration-300 group-hover:border-rojo-200 group-hover:bg-rojo-200 group-hover:text-blanco dark:border-blanco/25 dark:text-naranja-200 dark:group-hover:border-naranja-200 dark:group-hover:bg-naranja-200 dark:group-hover:text-negro-500 sm:h-28 sm:w-20`}
											>
												<Icon aria-hidden="true" className="text-2xl" />
											</span>
											<span className="min-w-0 flex-1">
												<span className="block text-2xl font-medium tracking-[-0.02em]">
													{name}
												</span>
												<span className="mt-1 block text-xs text-gris-500 dark:text-gris-200">
													{description}
												</span>
											</span>
											<FiArrowUpRight
												aria-hidden="true"
												className="shrink-0 text-xl text-gris-500 transition-colors duration-300 group-hover:text-rojo-200 dark:text-gris-200 dark:group-hover:text-naranja-200 md:hidden lg:block"
											/>
										</a>
									</li>
								)
							)}
						</ul>
					</motion.div>

					<div className="col-span-12 md:col-span-7 md:col-start-6">
						<motion.div
							initial={reduceMotion ? false : { opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
						>
							<Form onSuccess={onSuccess} />
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactMe;
