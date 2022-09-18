import "./nav.css";
import { AiOutlineHome, AiOutlineTool } from "react-icons/ai";
import { BiBook, BiBriefcaseAlt, BiMessageDetail } from "react-icons/bi";
import Switch from "./Switch";
import { useState } from "react";

function Nav(props: any) {
	const [navActive, setNavActive] = useState("#");
	return (
		<nav
			className="nav flex w-max py-3 px-6 gap-3 rounded-3xl z-30 fixed  bottom-[3rem] 
		 md:bottom-8 bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] "
		>
			{/* Navegation Links */}
			<a
				className={`hover:text-rojo-500 dark:hover:text-naranja-500 transition duration-500 ${
					navActive == "#" ? "active" : ""
				}`}
				href="#"
				onClick={() => {
					setNavActive("#");
				}}
			>
				<AiOutlineHome />
			</a>
			<a
				className={`hover:text-rojo-500 dark:hover:text-naranja-500 transition duration-500 ${
					navActive == "#about" ? "active" : ""
				}`}
				href="#about"
				onClick={() => {
					setNavActive("#about");
				}}
			>
				<BiBook />
			</a>
			<a
				className={`hover:text-rojo-500 dark:hover:text-naranja-500 transition duration-500 ${
					navActive == "#experience" ? "active" : ""
				}`}
				href="#experience"
				onClick={() => {
					setNavActive("#experience");
				}}
			>
				<AiOutlineTool />
			</a>
			<a
				className={`hover:text-rojo-500 dark:hover:text-naranja-500 transition duration-500 ${
					navActive == "#portafolio" ? "active" : ""
				}`}
				href="#portafolio"
				onClick={() => {
					setNavActive("#portafolio");
				}}
			>
				<BiBriefcaseAlt />
			</a>
			<a
				className={`hover:text-rojo-500 dark:hover:text-naranja-500 transition duration-500 ${
					navActive == "#contact-me" ? "active" : ""
				}`}
				href="#contact-me"
				onClick={() => {
					setNavActive("#contact-me");
				}}
			>
				<BiMessageDetail />
			</a>
			{/* Theme Switch */}
			<Switch setTheme={props.setTheme} />
		</nav>
	);
}

export default Nav;
