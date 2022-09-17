import { useState, useRef } from "react";
function TextSlider(props: any) {
	const [text, setText] = useState<string>(props.list[0]);
	const label = useRef<HTMLDivElement>(null);
	const clickHandler = (index: number) => {
		setText(props.list[index]);
	};
	return (
		<div className="flex flex-col items-center">
			<small
				className="actual active-anim text-gris-500 dark:text-gris-200"
				ref={label}
			>
				{text}
			</small>
			<div className="flex justify-around">
				{props.list.map((element: string, index: number) => {
					return (
						<span
							className={`text__slider__button w-[16px] h-[16px] text-2xl p-2 realtive
                            ${
															text == element
																? "after:bg-rojo-200 dark:after:bg-naranja-200"
																: "after:bg-gris-500 dark:after:bg-gris-200"
														}
                            `}
							key={index}
							onClick={() => {
								label.current?.classList.remove("active-anim");
								clickHandler(index);
								setTimeout(() => {
									label.current?.classList.add("active-anim");
								}, 100);
							}}
						></span>
					);
				})}
			</div>
		</div>
	);
}

export default TextSlider;
