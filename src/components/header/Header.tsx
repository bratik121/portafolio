import "./header.css";
import CV from "../../assets/CURRICULUM BRYANT MITCHELL.pdf";
import mirio from "../../assets/mirio.png";
import me from "../../assets/Brii.png";
import ButtonLink from "../../elements/ButtonLink";
import Tittles from "../../elements/Tittles";
import Socials from "./Socials";

function Header() {
	return (
		<header>
			<div className="header__container mx-auto w-[75%] h-[100vh] md:h-screen flex flex-col items-center pt-11 md:pt-11 relative ">
				{/* Titulos */}
				<Tittles
					first="Hello"
					main="Bryant Mitchell"
					last="Frontend Developer"
				/>
				<div className="gap-3 flex flex-col text-center justify-around mt-5	 md:mt-10 md:gap-5 md:flex-row  ">
					<ButtonLink label="Descargar CV" href={CV} clase="secondary" />
					<ButtonLink label="Hablemos" href="#contact-me" clase="primary" />
				</div>
				<div className="me w-[22rem] h-[36rem] md:h-[38rem] bg-gradient-to-b from-rojo-200 dark:from-naranja-200 to-transparent  transition duration-[0.4s] mt-7 overflow-hidden">
					<img src={me} alt="my picture" />
				</div>
				<Socials />
			</div>
		</header>
	);
}

export default Header;
