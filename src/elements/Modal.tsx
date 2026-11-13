import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const EASE = [0.16, 1, 0.3, 1] as const;

type ModalProps = {
	onClose: () => void;
};

function Modal({ onClose }: ModalProps) {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const closeButton = useRef<HTMLButtonElement>(null);
	const dialog = useRef<HTMLDivElement>(null);
	const previousFocus = useRef<HTMLElement | null>(null);
	const onCloseRef = useRef(onClose);

	useEffect(() => {
		onCloseRef.current = onClose;
	}, [onClose]);

	useEffect(() => {
		previousFocus.current = document.activeElement as HTMLElement | null;
		closeButton.current?.focus();

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				event.preventDefault();
				onCloseRef.current();
				return;
			}

			if (event.key !== "Tab") return;

			const focusable = dialog.current?.querySelectorAll<HTMLElement>(
				'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
			);

			if (!focusable || focusable.length === 0) return;

			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = previousOverflow;
			previousFocus.current?.focus();
		};
	}, []);

	return (
		<motion.div
			className="fixed inset-0 z-40 flex items-center justify-center bg-negro-500/40 px-5 backdrop-blur-sm dark:bg-negro-500/70"
			initial={reduceMotion ? false : { opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={reduceMotion ? undefined : { opacity: 0 }}
			transition={{ duration: reduceMotion ? 0 : 0.25 }}
			onClick={onClose}
		>
			<motion.div
				role="dialog"
				aria-modal="true"
				aria-labelledby="success-title"
				ref={dialog}
				className="w-full max-w-sm border border-negro-500/15 bg-blanco p-6 dark:border-blanco/15 dark:bg-negro-200"
				initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: 8 }}
				transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE }}
				onClick={(event) => event.stopPropagation()}
			>
				<div className="flex justify-end">
					<button
						ref={closeButton}
						type="button"
						aria-label={t("modal.close")}
						onClick={onClose}
						className="text-2xl text-gris-500 transition-colors hover:text-rojo-200 dark:text-gris-200 dark:hover:text-naranja-200"
					>
						<AiOutlineClose />
					</button>
				</div>
				<div className="mt-4 flex flex-col items-center gap-5 text-center">
					<AiOutlineCheckCircle className="text-6xl text-rojo-200 dark:text-naranja-200" />
					<h2 id="success-title" className="text-2xl font-medium tracking-tight">
						{t("modal.successTitle")}
					</h2>
					<Button
						label={t("modal.understood")}
						variant="primary"
						onClick={onClose}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default Modal;
