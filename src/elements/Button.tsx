function Button(props: any) {
	return (
		<button
			className={`${
				props.clase == "primary"
					? "bg-rojo-200 text-blanco dark:bg-naranja-200 dark:text-negro-200"
					: "border border-rojo-200 text-rojo-200 dark:border-naranja-200 dark:text-naranja-200"
			}
			p-2 md:p-3 hover:cursor-pointer hover:border-negro-200 hover:bg-negro-200 hover:text-blanco
		  dark:hover:bg-blanco dark:hover:text-naranja-200 dark:hover:border-blanco
			rounded-md transition duration-[0.3s] `}
			onClick={props.clickHandler}
			type={props.type}
		>
			{props.label}
		</button>
	);
}

export default Button;
