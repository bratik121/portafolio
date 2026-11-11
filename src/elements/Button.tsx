import type { MouseEventHandler } from "react";

type ButtonProps = {
	label: string;
	variant?: "primary" | "secondary";
	type?: "button" | "submit";
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
};

function Button({
	label,
	variant = "primary",
	type = "button",
	onClick,
	className = "",
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`inline-flex items-center justify-center rounded-[2px] border px-5 py-3 text-sm font-medium transition-colors duration-300 ${
				variant === "primary"
					? "border-rojo-200 bg-rojo-200 text-blanco hover:bg-transparent hover:text-rojo-200 dark:border-naranja-200 dark:bg-naranja-200 dark:text-negro-500 dark:hover:bg-transparent dark:hover:text-naranja-200"
					: "border-negro-500/30 text-negro-500 hover:border-rojo-200 hover:text-rojo-200 dark:border-blanco/30 dark:text-blanco dark:hover:border-naranja-200 dark:hover:text-naranja-200"
			} ${className}`}
		>
			{label}
		</button>
	);
}

export default Button;
