type DeckTitleProps = {
	title: string;
	index: number;
	active: boolean;
	onSelect: (index: number) => void;
};

function DeckTitle({ title, index, active, onSelect }: DeckTitleProps) {
	return (
		<li>
			<button
				type="button"
				onClick={() => onSelect(index)}
				aria-pressed={active}
				className="group flex w-full items-start gap-3 py-1 text-left"
			>
				<span
					aria-hidden="true"
					className={`mt-[0.55em] h-px shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
						active
							? "w-6 bg-rojo-200 dark:bg-naranja-200"
							: "w-3 bg-negro-500/25 dark:bg-blanco/25"
					}`}
				/>
				<span
					className={`block [text-wrap:balance] font-medium leading-[1.08] tracking-[-0.02em] transition-[font-size,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
						active
							? "text-negro-500 dark:text-blanco"
							: "text-gris-500 group-hover:text-negro-500 dark:text-gris-200 dark:group-hover:text-blanco"
					}`}
					style={{
						fontSize: active
							? "clamp(1.5rem, 2.1vw, 2rem)"
							: "clamp(0.95rem, 1.05vw, 1.05rem)",
					}}
				>
					{title}
				</span>
			</button>
		</li>
	);
}

export default DeckTitle;
