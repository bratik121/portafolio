import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
	motion,
	useMotionValueEvent,
	useReducedMotion,
	useScroll,
	useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/portafolio";
import ProjectFacts from "../../elements/ProjectFacts";
import ProjectLinks from "../../elements/ProjectLinks";
import ProjectStack from "../../elements/ProjectStack";

const IMAGE_HEIGHT = "min(40vh, 21rem)";
const IMAGE_TRAVEL = 360;

function projectTitleKey(id: string) {
	return `projects.items.${id}.title`;
}

function projectDescriptionKey(id: string) {
	return `projects.items.${id}.description`;
}

type ProjectsDeckProps = {
	projects: Project[];
};

type DeckImageProps = {
	project: Project;
	title: string;
	index: number;
	position: MotionValue<number>;
	total: number;
	onSelect: (index: number) => void;
};

function DeckImage({ project, title, index, position, total, onSelect }: DeckImageProps) {
	const { t } = useTranslation();
	const distance = useTransform<number, number>(position, (value) => value - index);
	const y = useTransform<number, number>(distance, (value) => value * -IMAGE_TRAVEL);
	const scale = useTransform<number, number>(distance, [-1, 0, 1], [0.78, 1, 0.84]);
	const opacity = useTransform<number, number>(
		distance,
		[-2, -0.55, 0, 0.55, 2],
		[0, 0.55, 1, 0.55, 0]
	);
	const zIndex = useTransform<number, number>(distance, (value) =>
		Math.max(0, total - Math.abs(value))
	);
	const blur = useTransform<number, string>(
		distance,
		(value) => `blur(${Math.min(Math.abs(value) * 2.5, 5).toFixed(1)}px)`
	);

	return (
		<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
			<motion.button
				type="button"
				onClick={() => onSelect(index)}
				aria-label={t("projects.viewProject", { title })}
				className="arch-soft pointer-events-auto relative aspect-[4/5] w-full max-w-[calc(var(--deck-image-height)*0.82)] overflow-hidden bg-negro-500/5 dark:bg-blanco/5"
				style={{
					zIndex,
					y,
					scale,
					opacity,
					filter: blur,
				}}
			>
				<img
					src={project.image}
					alt=""
					loading={index < 2 ? "eager" : "lazy"}
					className="h-full w-full object-cover"
				/>
			</motion.button>
		</div>
	);
}

type DeckTitleProps = {
	title: string;
	index: number;
	position: MotionValue<number>;
	active: boolean;
	onSelect: (index: number) => void;
};

function DeckTitle({ title, index, position, active, onSelect }: DeckTitleProps) {
	const distance = useTransform<number, number>(position, (value) => value - index);
	const opacity = useTransform<number, number>(
		distance,
		[-1.8, -0.5, 0, 0.5, 1.8],
		[0.45, 0.45, 1, 0.45, 0.45]
	);

	return (
		<motion.li style={{ opacity }}>
			<button
				type="button"
				onClick={() => onSelect(index)}
				aria-pressed={active}
				className={`relative block w-full py-1 pl-5 text-left text-[clamp(1.375rem,2vw,2rem)] font-medium leading-[1.05] tracking-[-0.02em] transition-colors duration-300 ${
					active ? "text-negro-500 dark:text-blanco" : ""
				}`}
			>
				<span
					aria-hidden="true"
					className={`absolute left-0 top-1/2 h-4 w-px -translate-y-1/2 bg-rojo-200 transition-opacity duration-300 dark:bg-naranja-200 ${
						active ? "opacity-100" : "opacity-0"
					}`}
				/>
				{title}
			</button>
		</motion.li>
	);
}

type DeckDescriptionProps = {
	description: string;
	index: number;
	position: MotionValue<number>;
};

function DeckDescription({ description, index, position }: DeckDescriptionProps) {
	const distance = useTransform<number, number>(position, (value) => value - index);
	const opacity = useTransform<number, number>(distance, [-0.6, 0, 0.6], [0, 1, 0]);

	return (
		<motion.div style={{ opacity }} className="absolute inset-x-0 top-0">
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

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	const position = useTransform<number, number>(
		scrollYProgress,
		(value) => value * Math.max(projects.length - 1, 0)
	);
	const roundedPosition = useTransform<number, number>(position, (value) => Math.round(value));

	useMotionValueEvent(roundedPosition, "change", (value) => {
		setActiveIndex((current) => (current === value ? current : value));
	});

	if (projects.length === 0) {
		return null;
	}

	const activeProject = projects[Math.min(activeIndex, projects.length - 1)] ?? projects[0];
	const current = activeIndex + 1;
	const total = projects.length;

	const goTo = (index: number) => {
		const section = sectionRef.current;
		if (!section) return;

		const sectionTop = section.getBoundingClientRect().top + window.scrollY;
		const scrollLength = section.offsetHeight - window.innerHeight;
		const target =
			sectionTop + (scrollLength * index) / Math.max(projects.length - 1, 1);

		window.scrollTo({
			top: target,
			behavior: reduceMotion ? "auto" : "smooth",
		});
	};

	return (
		<div
			ref={sectionRef}
			style={
				{
					"--deck-image-height": IMAGE_HEIGHT,
					height: `calc(100vh + ${projects.length} * 90vh)`,
				} as CSSProperties
			}
			className="relative"
		>
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<div className="shell grid w-full grid-cols-12 items-center gap-x-12">
					{/* Left: section title, progress and the active project's facts. */}
					<div className="col-span-3 flex flex-col gap-8">
						<div>
							<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-negro-500/15 pt-4 dark:border-blanco/15">
								<h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[0.95] tracking-[-0.03em]">
									{t("projects.title")}
								</h2>
								<p
									className="tabular-nums text-sm text-gris-500 dark:text-gris-200"
									aria-label={t("projects.progress", { current, total })}
								>
									{String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
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
							<div className="relative h-28">
								{projects.map((project, index) => (
									<DeckDescription
										key={project.id}
										description={t(projectDescriptionKey(project.id))}
										index={index}
										position={position}
									/>
								))}
							</div>
							<ProjectLinks project={activeProject} className="mt-2" />
						</div>
					</div>

					{/* Right: vertical image deck plus the project index. */}
					<div className="col-span-9 grid grid-cols-12 items-center gap-x-8">
						<div className="relative col-span-6 h-[62vh] overflow-hidden">
							{projects.map((project, index) => (
								<DeckImage
									key={project.id}
									project={project}
									title={t(projectTitleKey(project.id))}
									index={index}
									position={position}
									total={total}
									onSelect={goTo}
								/>
							))}
						</div>

						<div className="col-span-6 border-l border-negro-500/10 pl-6 dark:border-blanco/10">
							<ul className="flex flex-col gap-2">
								{projects.map((project, index) => (
									<DeckTitle
										key={project.id}
										title={t(projectTitleKey(project.id))}
										index={index}
										position={position}
										active={index === activeIndex}
										onSelect={goTo}
									/>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectsDeck;
