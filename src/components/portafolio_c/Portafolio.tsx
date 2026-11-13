import { proyects } from "../../data/portafolio";
import ProjectsDeck from "./ProjectsDeck";

function Portafolio() {
	return <ProjectsDeck projects={proyects} />;
}

export default Portafolio;
