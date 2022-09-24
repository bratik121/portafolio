import "./contact-me.css";
import Tittles from "../../elements/Tittles";
import { FaTelegramPlane } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import Form from "./Form";

function ContactMe({ modalSateSetter }: { modalSateSetter: any }) {
	return (
		<section
			className="md:h-screen w-[75%] mx-auto flex flex-col items-center"
			id="contact-me"
		>
			<Tittles main="Contacta conmigo" />
			<div className="contact__container grid grid-cols-1 md:grid-cols-[length:var(--colsSize2)] gap-8 md:gap-[5%] w-full">
				{/* Otras redes */}
				<div className="apps flex justify-center flex-col items-center">
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
				</div>
				{/* Escribir correo */}
				<Form modalSateSetter={modalSateSetter} />
			</div>
		</section>
	);
}

export default ContactMe;
