import { useTranslation } from "react-i18next";

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="border-t border-negro-500/15 dark:border-blanco/15">
			<div className="shell flex flex-col gap-3 pb-24 pt-8 text-sm text-gris-500 dark:text-gris-200 sm:flex-row sm:items-center sm:justify-between md:pb-28">
				<p>{t("footer.copyright")}</p>
				<a
					href="#top"
					className="link-underline w-fit text-rojo-200 hover:text-rojo-500 dark:text-naranja-200 dark:hover:text-naranja-500"
				>
					{t("footer.backToTop")}
				</a>
			</div>
		</footer>
	);
}

export default Footer;
