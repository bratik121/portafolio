import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
function Switch(props: any) {
	return (
		<button
			className="switch flex bg-[rgba(22,25,37,0.7)] dark:bg-[rgba(253,255,252,0.75)] 
			relative cursor-pointer px-1 items-center
            after:left-0  dark:after:translate-x-[138%] after:bg-blanco dark:after:bg-negro-200"
			onClick={props.setTheme}
		>
			<span className="switch__span w-7 h-7 ">
				<BsSunFill />
			</span>
			<span className="switch__span w-7 h-7 ">
				<BsFillMoonFill />
			</span>
		</button>
	);
}

export default Switch;
