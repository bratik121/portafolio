import type { MutableRefObject } from "react";

type ContactInputsProps = {
	type: "text" | "email";
	label: string;
	refers: MutableRefObject<HTMLInputElement>;
	error: string;
	nombre: string;
	inputText: string;
	setInputText: (value: string) => void;
	autoComplete: string;
};

function ContactInputs({
	type,
	label,
	refers,
	error,
	nombre,
	inputText,
	setInputText,
	autoComplete,
}: ContactInputsProps) {
	const inputId = `contact-${nombre}`;
	const errorId = `${inputId}-error`;

	return (
		<div>
			<label
				htmlFor={inputId}
				className="text-xs text-gris-500 dark:text-gris-200"
			>
				{label}
			</label>
			<input
				id={inputId}
				type={type}
				name={nombre}
				ref={refers}
				value={inputText}
				autoComplete={autoComplete}
				onChange={(event) => setInputText(event.target.value)}
				aria-invalid={Boolean(error)}
				aria-describedby={error ? errorId : undefined}
				className={`mt-1 w-full border-b bg-transparent py-2 text-base outline-none transition-colors duration-200 ${
					error
						? "border-rojo-200 dark:border-naranja-200"
						: "border-negro-500/25 focus:border-rojo-200 dark:border-blanco/25 dark:focus:border-naranja-200"
				}`}
			/>
			{error ? (
				<p
					id={errorId}
					role="alert"
					className="mt-2 text-xs text-rojo-200 dark:text-naranja-200"
				>
					{error}
				</p>
			) : null}
		</div>
	);
}

export default ContactInputs;
