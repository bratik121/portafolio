import { useState } from "react";
function ContactInputs(props: any) {
	return (
		<div className="inputBox bg-blanco dark:bg-negro-200">
			<input
				type={props.type}
				value={props.value}
				id={props.id}
				className={`bg-blanco dark:bg-negro-200 border border-rojo-200 dark:border-naranja-200 ${
					props.inputText === "" ? "" : "inUse"
				}`}
				ref={props.refers}
				name={props.nombre}
				onChange={(e) => {
					props.setInputText(e.target.value);
				}}
			/>
			<span className="text-gris-500 dark:text-gris-200">{props.label}</span>
			<p>{props.error}</p>
		</div>
	);
}

export default ContactInputs;
