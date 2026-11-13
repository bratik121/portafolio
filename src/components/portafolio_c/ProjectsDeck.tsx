import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
	AnimatePresence,
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
import DeckTitle from "./components/DeckTile";
import DeckDescription from "./components/DeckDescription";

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
};

/** Margen para considerar que hemos llegado al final (floats). */
const END_EPSILON = 0.999;

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

function ProjectsDeck({ projects }: ProjectsDeckProps) {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const sectionRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	// Lightbox
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

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

	/**
	 * Cierra el lightbox al llegar al final del recorrido.
	 * `useMotionValueEvent` reacciona a cada cambio de `progress` (el scroll),
	 * no a un re-render, así que funciona con el modal abierto.
	 */
	useMotionValueEvent(progress, "change", (value) => {
		if (value >= END_EPSILON) {
			setLightboxOpen((open) => (open ? false : open));
		}
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

	/**
	 * El lightbox NO bloquea el scroll: queremos seguir scrolleando para ver
	 * el resto de fotos. Solo gestionamos Escape y el foco.
	 */
	useEffect(() => {
		if (!lightboxOpen) return;

		const previouslyFocused =
			document.activeElement instanceof HTMLElement
				? document.activeElement
				: null;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				event.preventDefault();
				setLightboxOpen(false);
			}
		};

		document.addEventListener("keydown", onKeyDown);
		closeButtonRef.current?.focus();

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			(previouslyFocused ?? triggerRef.current)?.focus();
		};
	}, [lightboxOpen]);

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
	const activeTitle = t(projectTitleKey(activeProject.id));

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
					<div className="relative mx-auto aspect-square w-full max-w-[min(100%,36vh)] rounded-[2px] bg-negro-500/[0.03] p-2 ring-1 ring-rojo-200 dark:bg-blanco/[0.03] dark:ring-naranja-200 xl:col-span-6 xl:max-w-[min(100%,calc(100vh-9rem))] xl:p-3">
						<div className="relative h-full w-full overflow-hidden rounded-[1px] bg-negro-500/5 dark:bg-blanco/5">
							{projects.map((project, index) => (
								<CanvasImage
									key={project.id}
									project={project}
									index={index}
									position={deckPosition}
								/>
							))}
							{/* Overlay clicable: abre el lightbox con la imagen activa. */}
							<button
								ref={triggerRef}
								type="button"
								onClick={() => {
									if (progress.get() >= END_EPSILON) return;
									setLightboxOpen(true);
								}}
								className="absolute inset-0 z-[999] cursor-zoom-in rounded-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blanco"
								aria-label={t("projects.openImage", "Ver imagen completa")}
							/>
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

			{/* Lightbox: solo la imagen, fondo oscuro semitransparente.
			    No bloquea el scroll → la imagen cambia sola al scrollear. */}
			<AnimatePresence>
				{lightboxOpen && (
					<motion.div
						key="project-lightbox"
						className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: reduceMotion ? 0 : 0.2 }}
						onClick={() => setLightboxOpen(false)}
						role="dialog"
						aria-modal="true"
						aria-label={activeTitle}
					>
						{/* La key hace que la imagen haga un fade al pasar de proyecto
						    mientras se scrollea con el modal abierto. */}
						<motion.img
							key={activeProject.id}
							src={activeProject.image}
							alt={activeTitle}
							className="relative max-h-full max-w-full rounded-[2px] object-contain shadow-2xl"
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: reduceMotion ? 0 : 0.18,
								ease: "easeOut",
							}}
							onClick={(event) => event.stopPropagation()}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default ProjectsDeck;
