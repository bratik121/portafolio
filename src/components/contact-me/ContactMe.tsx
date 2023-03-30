import "./contact-me.css";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import Tittles from "../../elements/Tittles";
import { FaTelegramPlane } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import Form from "./Form";
import { langContext } from "../../App";
const pillVariant = {
	hidden: {
		opacity: 0,
		x: -250,
	},
	show: {
		opacity: 1,
		x: 0,
	},
};

const formVariant = {
	hidden: {
		opacity: 0,
		x: 250,
	},
	show: {
		opacity: 1,
		x: 0,
	},
};

function ContactMe({ modalSateSetter }: { modalSateSetter: any }) {
	const { lang } = useContext(langContext);
	return (
		<section
			className="md:h-screen w-[75%] mx-auto flex flex-col items-center"
			id="contact-me"
		>
			<Tittles main={lang === "Es" ? "Contacta conmigo" : "Contact me"} />
			<div className="contact__container grid grid-cols-1 md:grid-cols-[length:var(--colsSize2)] gap-8 md:gap-[5%] w-full">
				{/* Otras redes */}
				<m.div
					className="apps flex justify-center flex-col items-center"
					variants={pillVariant}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{/* Pildora - Telegram */}
					<div className="semi-c-t flex items-center justify-center bg-gradient-to-b from-rojo-200 dark:from-naranja-200  to-transparent  ">
						<a
							href="https://t.me/DimeBrii"
							target={"_blank"}
							className="w-[60%]"
						>
							<div className="link__container w-full aspect-square bg-blanco dark:bg-negro-200 flex items-center justify-center">
								<FaTelegramPlane className="z-30 text-4xl" />
							</div>
						</a>
					</div>
					{/* Pildora - Whatsapp */}
					<div className="semi-c-b flex items-center justify-center bg-gradient-to-b from-transparent dark:to-naranja-200  to-rojo-200  ">
						<a
							href="https://wa.me/+584242883068"
							target={"_blank"}
							className="w-[60%]"
						>
							<div className="link__container w-full aspect-square bg-blanco dark:bg-negro-200 flex items-center justify-center">
								<ImWhatsapp className="z-30 text-4xl" />
							</div>
						</a>
					</div>
				</m.div>
				{/* Escribir correo */}
				<m.div
					variants={formVariant}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<Form modalSateSetter={modalSateSetter} lang={lang} />
				</m.div>
			</div>
		</section>
	);
}

export default ContactMe;
