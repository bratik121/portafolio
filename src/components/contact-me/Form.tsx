import ContactInputs from "./Contact-inputs";
import Button from "../../elements/Button";
import { useRef, useState } from "react";
import { notEmpty, validText, validEmail } from "../../data/validations";
import emailjs from "@emailjs/browser";
function Form(props: any) {
	const nombre = useRef() as React.MutableRefObject<HTMLInputElement>;
	const correo = useRef() as React.MutableRefObject<HTMLInputElement>;
	const texto = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
	const form = useRef() as React.MutableRefObject<HTMLFormElement>;

	const sendEmail = (e: any) => {
		emailjs
			.sendForm(
				"service_rkve5ig",
				"template_n8lks8i",
				form.current,
				"IjTyyX0CCUOWFBfr2"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const [errorNombre, setErrorNombre] = useState<string>("");
	const [errorCorreo, setErrorCorreo] = useState<string>("");
	const [errorTexto, setErrorTexto] = useState<string>("");

	const truncateInputs = (element: any) => {
		element.current.value = "";
	};
	const validateName = (): number => {
		if (notEmpty(nombre.current.value)) {
			if (validText(nombre.current.value)) {
				setErrorNombre("Caracteres invalidos");
				return 0;
			} else {
				setErrorNombre("");
				return 1;
			}
		} else {
			setErrorNombre("Introduzca un nombre!");
			return 0;
		}
	};
	const validateEmail = (): number => {
		if (notEmpty(correo.current.value)) {
			if (validEmail(correo.current.value)) {
				setErrorCorreo("Correo invalido");
				return 0;
			} else {
				setErrorCorreo("");

				return 1;
			}
		} else {
			setErrorCorreo("Introduzca un correo!");
			return 0;
		}
	};
	const validateText = (): number => {
		if (notEmpty(texto.current.value)) {
			setErrorTexto("");
			return 1;
		} else {
			setErrorTexto("Introduza un Contenido");
			return 0;
		}
	};
	const sendMessage = (e: any) => {
		e.preventDefault();
		let flags = 0;
		flags += validateName();
		flags += validateEmail();
		flags += validateText();
		if (flags === 3) {
			sendEmail(e);
			props.modalSateSetter(true);
			truncateInputs(nombre);
			truncateInputs(correo);
			truncateInputs(texto);
		}
	};

	return (
		<form className="p-4 flex flex-col gap-3" ref={form} onSubmit={sendMessage}>
			<ContactInputs
				type="text"
				label="Nombre"
				refers={nombre}
				error={errorNombre}
				nombre="nombre"
			/>
			<ContactInputs
				type="text"
				label="Correo"
				refers={correo}
				error={errorCorreo}
				nombre="correo"
			/>
			<textarea
				className="cotact-area w-[full] bg-blanco dark:bg-negro-200 border border-rojo-200 dark:border-naranja-200 p-3 placeholder:text-gris-500 dark:placeholder:text-gris-200"
				name="message"
				id=""
				cols={30}
				rows={7}
				placeholder="Contenido"
				ref={texto}
			></textarea>
			<p>{errorTexto}</p>
			<Button label="Enviar" clase="primary" type="submit" />
		</form>
	);
}

export default Form;
