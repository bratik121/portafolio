type SectionTitleProps = {
	title: string;
	subtitle?: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
	return (
		<div className="border-t border-negro-500/15 pt-5 dark:border-blanco/15">
			<div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
				<h2 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.03em]">
					{title}
				</h2>
				{subtitle ? (
					<p className="text-sm text-gris-500 dark:text-gris-200">{subtitle}</p>
				) : null}
			</div>
		</div>
	);
}

export default SectionTitle;
