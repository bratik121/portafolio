import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Button from "../../elements/Button";
import { notEmpty, validEmail, validText } from "../../data/validations";
import ContactInputs from "./Contact-inputs";

type FormProps = {
	onSuccess: () => void;
};

function Form({ onSuccess }: FormProps) {
	const { t } = useTranslation();
	const nombre = useRef<HTMLInputElement>(null);
	const correo = useRef<HTMLInputElement>(null);
	const texto = useRef<HTMLTextAreaElement>(null);
	const form = useRef<HTMLFormElement>(null);

	const [inputName, setInputName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [errorNombre, setErrorNombre] = useState("");
	const [errorCorreo, setErrorCorreo] = useState("");
	const [errorTexto, setErrorTexto] = useState("");

	const sendEmail = () =>
		emailjs.sendForm(
			"service_rkve5ig",
			"template_n8lks8i",
			form.current as HTMLFormElement,
			"IjTyyX0CCUOWFBfr2"
		);

	const truncateInputs = (element: { current: HTMLInputElement | HTMLTextAreaElement | null }) => {
		if (element.current) element.current.value = "";
	};

	const validateName = (): number => {
		if (!notEmpty(nombre.current?.value ?? "")) {
			setErrorNombre(t("contact.errors.nameRequired"));
			return 0;
		}

		if (validText(nombre.current?.value ?? "")) {
			setErrorNombre(t("contact.errors.invalidName"));
			return 0;
		}

		setErrorNombre("");
		return 1;
	};

	const validateEmail = (): number => {
		if (!notEmpty(correo.current?.value ?? "")) {
			setErrorCorreo(t("contact.errors.emailRequired"));
			return 0;
		}

		if (validEmail(correo.current?.value ?? "")) {
			setErrorCorreo(t("contact.errors.invalidEmail"));
			return 0;
		}

		setErrorCorreo("");
		return 1;
	};

	const validateText = (): number => {
		if (!notEmpty(texto.current?.value ?? "")) {
			setErrorTexto(t("contact.errors.messageRequired"));
			return 0;
		}

		setErrorTexto("");
		return 1;
	};

	const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const flags = validateName() + validateEmail() + validateText();

		if (flags !== 3) {
			requestAnimationFrame(() => {
				form.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
			});
			return;
		}

		sendEmail()
			.then(() => {
				onSuccess();
				truncateInputs(nombre);
				truncateInputs(correo);
				truncateInputs(texto);
				setInputName("");
				setInputEmail("");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<form
			ref={form}
			onSubmit={sendMessage}
			noValidate
			className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2"
		>
			<ContactInputs
				type="text"
				label={t("contact.form.name")}
				refers={nombre as React.MutableRefObject<HTMLInputElement>}
				error={errorNombre}
				nombre="nombre"
				inputText={inputName}
				setInputText={setInputName}
				autoComplete="name"
			/>
			<ContactInputs
				type="email"
				label={t("contact.form.email")}
				refers={correo as React.MutableRefObject<HTMLInputElement>}
				error={errorCorreo}
				nombre="correo"
				inputText={inputEmail}
				setInputText={setInputEmail}
				autoComplete="email"
			/>

			<div className="sm:col-span-2">
				<label
					htmlFor="contact-message"
					className="block text-xs font-medium text-gris-500 dark:text-gris-200"
				>
					{t("contact.form.message")}
				</label>
				<textarea
					id="contact-message"
					name="message"
					rows={5}
					ref={texto}
					aria-invalid={Boolean(errorTexto)}
					aria-describedby={errorTexto ? "contact-message-error" : undefined}
					className={`mt-1 w-full resize-y border-b bg-transparent py-2 text-base outline-none transition-colors duration-200 ${
						errorTexto
							? "border-rojo-200 dark:border-naranja-200"
							: "border-negro-500/25 focus:border-rojo-200 dark:border-blanco/25 dark:focus:border-naranja-200"
					}`}
				/>
				{errorTexto ? (
					<p
						id="contact-message-error"
						role="alert"
						className="mt-2 text-xs text-rojo-200 dark:text-naranja-200"
					>
						{errorTexto}
					</p>
				) : null}
			</div>

			<div className="sm:col-span-2">
				<Button
					type="submit"
					label={t("contact.form.send")}
					variant="primary"
					className="w-full sm:w-auto"
				/>
			</div>
		</form>
	);
}

export default Form;
