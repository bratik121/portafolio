import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useReducedMotion,
	useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/portafolio";
import ProjectLinks from "../../elements/ProjectLinks";
import ProjectStack from "../../elements/ProjectStack";

/**
 * Ajustes del canvas y del índice. Cambia estos valores para probar la
 * composición sin tocar la lógica de animación.
 */
const DECK_CONFIG = {
	/**
	 * Tramo (0-0.5) del recorrido en el que cada proyecto queda "imantado".
	 * 0 = transición continua sin pausa.
	 */
	SNAP_WINDOW: 0.2,
	/** Escala a la que se va la imagen saliente. 1 = sin zoom. */
	OUTGOING_SCALE: 0.965,
	/** Desplazamiento vertical de la imagen saliente, en %. */
	OUTGOING_SHIFT: 1.2,
	/** Blur máximo de la imagen saliente, en px. 0 = sin blur. */
	OUTGOING_BLUR: 2.5,
	/** Tamaño del título activo en el índice. */
	ACTIVE_TITLE_SIZE: "clamp(1.5rem, 2.1vw, 2rem)",
	/** Tamaño de los títulos inactivos en el índice. */
	INACTIVE_TITLE_SIZE: "clamp(0.95rem, 1.05vw, 1.05rem)",
};

const projectTitleKey = (id: string) => `projects.items.${id}.title`;
const projectDescriptionKey = (id: string) =>
	`projects.items.${id}.description`;
const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

type ProjectsDeckProps = {
	projects: Project[];
};

type CanvasImageProps = {
	project: Project;
	index: number;
	position: MotionValue<number>;
};

/**
 * Una sola imagen visible a la vez. La entrante sube desde el borde inferior
 * y cubre a la anterior dentro del mismo canvas; no hay mezcla de dos
 * capturas ni cartas descentradas.
 */
function CanvasImage({ project, index, position }: CanvasImageProps) {
	const distance = useTransform<number, number>(
		position,
		(value) => value - index
	);
	const y = useTransform<number, string>(distance, (value) => {
		if (value >= 0) return "0%";
		return `${Math.abs(value) ** 1.15 * 100}%`;
	});
	// Las tarjetas futuras van por encima y suben para cubrir a la actual;
	// las pasadas quedan debajo.
	const zIndex = index + 1;

	return (
		<motion.div
			className="absolute inset-0"
			style={{ zIndex, y }}
			aria-hidden="true"
		>
			<img
				src={project.image}
				alt=""
				loading={index < 2 ? "eager" : "lazy"}
				decoding="async"
				className="h-full w-full object-cover"
			/>
			{/* Sombra del borde de entrada: solo se ve mientras la placa se mueve. */}
			<span
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 -top-12 h-12"
				style={{
					background:
						"linear-gradient(to top, rgba(7, 2, 13, 0.45), rgba(7, 2, 13, 0))",
				}}
			/>
		</motion.div>
	);
}

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
							? DECK_CONFIG.ACTIVE_TITLE_SIZE
							: DECK_CONFIG.INACTIVE_TITLE_SIZE,
					}}
				>
					{title}
				</span>
			</button>
		</li>
	);
}

type DeckDescriptionProps = {
	description: string;
};

function DeckDescription({ description }: DeckDescriptionProps) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			initial={reduceMotion ? false : { opacity: 0, y: 4 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
		>
			<p className="measure text-sm leading-relaxed text-gris-500 dark:text-gris-200">
				{description}
			</p>
		</motion.div>
	);
}

function ProjectsDeck({ projects }: ProjectsDeckProps) {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const sectionRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const progress = useMotionValue(0);
	const position = useTransform<number, number>(
		progress,
		(value) => value * Math.max(projects.length - 1, 0)
	);
	/**
	 * La posición se "imanta" a cada proyecto para que el canvas se detenga
	 * nítido, y la transición ocurre en el tramo intermedio. Para un
	 * movimiento continuo, deja DECK_CONFIG.SNAP_WINDOW en 0.
	 */
	const smoothedPosition = useTransform<number, number>(position, (value) => {
		const nearest = Math.round(value);
		const delta = value - nearest;
		const snapWindow = DECK_CONFIG.SNAP_WINDOW;
		if (snapWindow <= 0 || Math.abs(delta) >= snapWindow) return value;
		const t = delta / snapWindow;
		const eased = Math.sign(t) * Math.abs(t) ** 1.6;
		return nearest + eased * snapWindow;
	});
	const roundedPosition = useTransform<number, number>(position, (value) =>
		Math.round(value)
	);
	const staticPosition = useMotionValue(0);

	useMotionValueEvent(roundedPosition, "change", (value) => {
		if (reduceMotion) return;
		setActiveIndex((current) => (current === value ? current : value));
	});

	useLayoutEffect(() => {
		if (reduceMotion) return;

		const section = sectionRef.current;
		if (!section) return;

		const update = () => {
			const rect = section.getBoundingClientRect();
			const scrollLength = section.offsetHeight - window.innerHeight;
			if (scrollLength <= 0) {
				progress.set(0);
				return;
			}
			progress.set(clamp(-rect.top / scrollLength, 0, 1));
		};

		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);

		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, [progress, reduceMotion]);

	if (projects.length === 0) {
		return null;
	}

	const activeProject =
		projects[Math.min(activeIndex, projects.length - 1)] ?? projects[0];
	const current = activeIndex + 1;
	const total = projects.length;
	const deckPosition = reduceMotion ? staticPosition : smoothedPosition;
	/** Cada proyecto aporta una pantalla de scroll; el último no deja hueco. */
	const scrollLength = Math.max(total - 1, 1) * 100;

	const goTo = (index: number) => {
		if (reduceMotion) {
			staticPosition.set(index);
			setActiveIndex(index);
			return;
		}

		const section = sectionRef.current;
		if (!section) return;

		const sectionTop = section.getBoundingClientRect().top + window.scrollY;
		const innerScroll = section.offsetHeight - window.innerHeight;
		const target =
			sectionTop + (innerScroll * index) / Math.max(projects.length - 1, 1);

		window.scrollTo({ top: target, behavior: "smooth" });
	};

	return (
		<div
			ref={sectionRef}
			id="portafolio"
			className="relative"
			style={
				{
					height: reduceMotion ? undefined : `calc(100vh + ${scrollLength}vh)`,
				} as CSSProperties
			}
		>
			<div
				className={`sticky top-0 min-h-screen xl:min-h-0 xl:h-screen ${
					reduceMotion ? "py-24 md:py-32" : "pb-24 pt-4 md:pt-8 xl:pb-0 xl:py-0"
				}`}
			>
				<div className="shell flex h-full flex-col justify-center gap-5 xl:grid xl:grid-cols-12 xl:items-center xl:gap-x-6">
					{/* Left: section title, progress and the active project's facts. */}
					<div className="hidden xl:col-span-3 xl:flex xl:flex-col xl:gap-8 xl:self-center">
						<div>
							<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-negro-500/15 pt-4 dark:border-blanco/15">
								<h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[0.95] tracking-[-0.03em]">
									{t("projects.title")}
								</h2>
								<p
									className="tabular-nums text-sm text-gris-500 dark:text-gris-200"
									aria-label={t("projects.progress", { current, total })}
								>
									{String(current).padStart(2, "0")} /{" "}
									{String(total).padStart(2, "0")}
								</p>
							</div>
						</div>

						<dl className="flex flex-col gap-5 text-sm">
							{activeProject.year ? (
								<div className="flex items-baseline gap-4">
									<dt className="w-20 shrink-0 text-[11px] uppercase tracking-[0.16em] text-gris-500 dark:text-gris-200">
										{t("projects.yearLabel")}
									</dt>
									<dd className="tabular-nums">{activeProject.year}</dd>
								</div>
							) : null}
							{activeProject.role ? (
								<div className="flex items-baseline gap-4">
									<dt className="w-20 shrink-0 text-[11px] uppercase tracking-[0.16em] text-gris-500 dark:text-gris-200">
										{t("projects.roleLabel")}
									</dt>
									<dd>{activeProject.role}</dd>
								</div>
							) : null}
							{activeProject.stack && activeProject.stack.length > 0 ? (
								<div className="flex flex-col gap-2">
									<dt className="text-[11px] uppercase tracking-[0.16em] text-gris-500 dark:text-gris-200">
										{t("projects.stackTitle")}
									</dt>
									<dd>
										<ProjectStack project={activeProject} />
									</dd>
								</div>
							) : null}
						</dl>

						<div>
							<div className="min-h-[8rem]">
								<DeckDescription
									key={activeProject.id}
									description={t(projectDescriptionKey(activeProject.id))}
								/>
							</div>
							<ProjectLinks project={activeProject} className="mt-2" />
						</div>
					</div>

					{/* Mobile header: section title and progress. */}
					<div className="flex items-baseline justify-between gap-4 border-t border-negro-500/15 pt-3 dark:border-blanco/15 xl:hidden">
						<h2 className="text-[clamp(2.5rem,5.5vw,2.75rem)] font-medium leading-[0.95] tracking-[-0.03em]">
							{t("projects.title")}
						</h2>
						<p
							className="tabular-nums text-sm text-gris-500 dark:text-gris-200"
							aria-label={t("projects.progress", { current, total })}
						>
							{String(current).padStart(2, "0")} /{" "}
							{String(total).padStart(2, "0")}
						</p>
					</div>

					{/* Canvas: the active project, with a hairline mat. */}
					<div className="relative mx-auto aspect-square w-full max-w-[min(100%,36vh)] rounded-[2px] bg-negro-500/[0.03] p-2 ring-1 ring-negro-500/15 dark:bg-blanco/[0.03] dark:ring-blanco/15 xl:col-span-6 xl:max-w-[min(100%,calc(100vh-9rem))] xl:p-3">
						<div
							className="relative h-full w-full overflow-hidden rounded-[1px] bg-negro-500/5 dark:bg-blanco/5"
							aria-hidden="true"
						>
							{projects.map((project, index) => (
								<CanvasImage
									key={project.id}
									project={project}
									index={index}
									position={deckPosition}
								/>
							))}
						</div>
					</div>

					{/* Index: the active title takes the lead. */}
					<div className="border-t border-negro-500/10 pt-4 dark:border-blanco/10 xl:col-span-3 xl:self-center xl:border-l xl:border-t-0 xl:pl-4 xl:pt-0">
						<ul className="flex flex-col gap-2.5">
							{projects.map((project, index) => (
								<DeckTitle
									key={project.id}
									title={t(projectTitleKey(project.id))}
									index={index}
									active={index === activeIndex}
									onSelect={goTo}
								/>
							))}
						</ul>
						<div className="mt-3 xl:hidden">
							<p className="measure text-sm leading-relaxed text-gris-500 dark:text-gris-200 [@media(max-height:720px)]:hidden">
								{t(projectDescriptionKey(activeProject.id))}
							</p>
							<ProjectLinks project={activeProject} className="mt-3" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectsDeck;
