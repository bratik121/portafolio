type TextSliderProps = {
	list: string[];
	index: number;
	setIndex: (index: number) => void;
	label: string;
};

function TextSlider({ list, index, setIndex, label }: TextSliderProps) {
	const current = list[index] ?? "";

	return (
		<div className="flex flex-col items-start gap-1 md:items-end">
			<span
				aria-live="polite"
				className="text-sm text-gris-500 dark:text-gris-200"
			>
				{current}
			</span>
			<div className="flex items-center gap-1" role="group" aria-label={label}>
				{list.map((item, itemIndex) => (
					<button
						key={item}
						type="button"
						aria-label={item}
						aria-pressed={itemIndex === index}
						onClick={() => setIndex(itemIndex)}
						className="flex h-8 w-8 items-center justify-center"
					>
						<span
							className={`block h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
								itemIndex === index
									? "w-5 bg-rojo-200 dark:bg-naranja-200"
									: "w-1.5 bg-negro-500/25 dark:bg-blanco/25"
							}`}
						/>
					</button>
				))}
			</div>
		</div>
	);
}

export default TextSlider;
