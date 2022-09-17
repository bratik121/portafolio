function ProgressCard(props: any) {
	let percent: number = 440 - (props.percent * 440) / 100;
	const style_p = {
		"--num": percent,
		"--percent": props.percent,
	} as React.CSSProperties;

	return (
		<div className="experience-card relative w-[220px] h-[250px] flex justify-center items-center rounded-lg shadow-[inset_0_0_14px_-5px_#161925] dark:shadow-[inset_0_0_14px_-1px_#FDFFFC]">
			<div
				className="percent w-[150px] aspect-square relative "
				style={style_p}
			>
				<div className="dot  before:bg-rojo-200 before:dark:bg-naranja-200 before:shadow-[0_0_10px_rgb(153,13,53)] dark:before:shadow-[0_0_10px_rgb(254,144,60)]"></div>
				<svg className="w-[150px] aspect-square relative  rotate-[270deg]">
					<circle
						cx="70"
						cy="70"
						r="70"
						className="w-full h-full fill-transparent stroke-2 stroke-[rgba(22,25,37,0.7)] dark:stroke-[rgba(253,255,252,0.66)]   translate-x-[5px] translate-y-[5px] "
					></circle>
					<circle
						cx="70"
						cy="70"
						r="70"
						className="circle-2 -full h-full fill-transparent stroke-2 stroke-rojo-200 dark:stroke-naranja-200  translate-x-[5px] translate-y-[5px]  "
					></circle>
				</svg>
			</div>
			<div className="experience__card__label absolute inset-0 flex justify-center items-center flex-col">
				<h2 className="text-xl flex items-center gap-1 ">
					{props.percent}
					<span className="text-sm">%</span>
				</h2>
				<p className="capitalize text-center tracking-widest  ">{props.area}</p>
			</div>
			<p className="absolute bottom-0 -translate-y-4">{props.description}</p>
		</div>
	);
}

export default ProgressCard;
