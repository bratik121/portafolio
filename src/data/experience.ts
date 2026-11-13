import type { IconType } from "react-icons";
import { FaDatabase, FaJava } from "react-icons/fa";
import {
	SiCss3,
	SiDjango,
	SiDocker,
	SiFramer,
	SiGit,
	SiGoogle,
	SiGunicorn,
	SiHtml5,
	SiI18Next,
	SiJavascript,
	SiJsonwebtokens,
	SiMongodb,
	SiNestjs,
	SiNodedotjs,
	SiNpm,
	SiNumpy,
	SiPandas,
	SiPostgresql,
	SiPowershell,
	SiPython,
	SiRabbitmq,
	SiReact,
	SiReactquery,
	SiReactrouter,
	SiRedis,
	SiRedux,
	SiScikitlearn,
	SiSvelte,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVite,
	SiVuedotjs,
} from "react-icons/si";

export type TechCategory =
	| "languages"
	| "frontend"
	| "backend"
	| "databases"
	| "messaging"
	| "ml"
	| "devops"
	| "tooling"
	| "architecture";

export type Technology = {
	id: string;
	label: string;
	labelKey?: string;
	category: TechCategory;
	icon?: IconType;
};

export const techCategories: TechCategory[] = [
	"languages",
	"frontend",
	"backend",
	"databases",
	"messaging",
	"ml",
	"devops",
	"tooling",
	"architecture",
];

export const technologies: Technology[] = [
	{ id: "html", label: "HTML", category: "languages", icon: SiHtml5 },
	{ id: "css", label: "CSS", category: "languages", icon: SiCss3 },
	{ id: "javascript", label: "JavaScript", category: "languages", icon: SiJavascript },
	{ id: "typescript", label: "TypeScript", category: "languages", icon: SiTypescript },
	{ id: "python", label: "Python", category: "languages", icon: SiPython },
	{ id: "sql", label: "SQL", category: "languages", icon: FaDatabase },
	{ id: "java", label: "Java", category: "languages", icon: FaJava },
	{ id: "plsql", label: "PL/SQL", category: "languages" },

	{ id: "react", label: "React 18", category: "frontend", icon: SiReact },
	{ id: "vite", label: "Vite", category: "frontend", icon: SiVite },
	{ id: "tailwind", label: "Tailwind CSS 4", category: "frontend", icon: SiTailwindcss },
	{ id: "redux", label: "Redux Toolkit", category: "frontend", icon: SiRedux },
	{ id: "tanstack", label: "TanStack Query", category: "frontend", icon: SiReactquery },
	{ id: "router", label: "React Router 7", category: "frontend", icon: SiReactrouter },
	{ id: "framer", label: "Framer Motion", category: "frontend", icon: SiFramer },
	{ id: "radix", label: "Radix UI / shadcn", category: "frontend" },
	{ id: "recharts", label: "Recharts", category: "frontend" },
	{ id: "i18next", label: "i18next", category: "frontend", icon: SiI18Next },
	{ id: "svelte", label: "Svelte", category: "frontend", icon: SiSvelte },
	{ id: "vue", label: "Vue", category: "frontend", icon: SiVuedotjs },

	{ id: "node", label: "Node.js", category: "backend", icon: SiNodedotjs },
	{ id: "nest", label: "NestJS", category: "backend", icon: SiNestjs },
	{ id: "django", label: "Django", category: "backend", icon: SiDjango },
	{ id: "drf", label: "Django REST Framework", category: "backend" },
	{ id: "gunicorn", label: "Gunicorn", category: "backend", icon: SiGunicorn },

	{ id: "postgresql", label: "PostgreSQL", category: "databases", icon: SiPostgresql },
	{ id: "mongodb", label: "MongoDB", category: "databases", icon: SiMongodb },
	{ id: "redis", label: "Redis", category: "databases", icon: SiRedis },

	{ id: "rabbitmq", label: "RabbitMQ", category: "messaging", icon: SiRabbitmq },

	{ id: "scikitlearn", label: "scikit-learn", category: "ml", icon: SiScikitlearn },
	{ id: "pandas", label: "pandas", category: "ml", icon: SiPandas },
	{ id: "numpy", label: "NumPy", category: "ml", icon: SiNumpy },
	{ id: "gemini", label: "Gemini", category: "ml", icon: SiGoogle },
	{ id: "rag", label: "RAG", category: "ml" },

	{ id: "docker", label: "Docker", category: "devops", icon: SiDocker },
	{ id: "compose", label: "Docker Compose", category: "devops" },
	{ id: "cloudinary", label: "Cloudinary", category: "devops" },
	{ id: "vercel", label: "Vercel", category: "devops", icon: SiVercel },
	{ id: "git", label: "Git / GitHub", category: "devops", icon: SiGit },

	{
		id: "django-tests",
		label: "Django Test Suite",
		labelKey: "experience.techLabels.django-tests",
		category: "tooling",
	},
	{ id: "npm", label: "npm", category: "tooling", icon: SiNpm },
	{ id: "pip-venv", label: "pip / venv", category: "tooling" },
	{ id: "powershell", label: "PowerShell CLI", category: "tooling", icon: SiPowershell },

	{ id: "jwt", label: "JWT", category: "architecture", icon: SiJsonwebtokens },
	{
		id: "token-auth",
		label: "Token Auth",
		labelKey: "experience.techLabels.token-auth",
		category: "architecture",
	},
	{ id: "cqrs", label: "CQRS", category: "architecture" },
	{ id: "ddd", label: "DDD", category: "architecture" },
	{
		id: "hexagonal",
		label: "Hexagonal Architecture",
		labelKey: "experience.techLabels.hexagonal",
		category: "architecture",
	},
	{
		id: "clean-architecture",
		label: "Clean Architecture",
		labelKey: "experience.techLabels.clean-architecture",
		category: "architecture",
	},
];

export const technologyById = new Map(
	technologies.map((technology) => [technology.id, technology])
);
