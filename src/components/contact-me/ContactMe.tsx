import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane } from "react-icons/fa";
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

	return (
		<section id="contact-me" className="py-24 md:py-32">
			<div className="shell">
				<Reveal>
					<SectionTitle title={t("contact.title")} />
				</Reveal>

				<div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-16">
					<motion.div
						className="col-span-12 flex gap-3 md:col-span-4"
						initial={reduceMotion ? false : { opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, ease: EASE }}
					>
						<a
							href="https://t.me/DimeBrii"
							target="_blank"
							rel="noreferrer"
							aria-label={t("contact.telegram")}
							className="arch flex h-40 w-24 items-center justify-center border border-rojo-200 bg-rojo-200 text-blanco transition-colors duration-300 hover:bg-transparent hover:text-rojo-200 dark:border-naranja-200 dark:bg-naranja-200 dark:text-negro-500 dark:hover:bg-transparent dark:hover:text-naranja-200"
						>
							<FaTelegramPlane aria-hidden="true" className="text-3xl" />
						</a>
						<a
							href="https://wa.me/+584242883068"
							target="_blank"
							rel="noreferrer"
							aria-label={t("contact.whatsapp")}
							className="arch flex h-40 w-24 items-center justify-center border border-rojo-200 text-rojo-200 transition-colors duration-300 hover:bg-rojo-200 hover:text-blanco dark:border-naranja-200 dark:text-naranja-200 dark:hover:bg-naranja-200 dark:hover:text-negro-500"
						>
							<ImWhatsapp aria-hidden="true" className="text-3xl" />
						</a>
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
