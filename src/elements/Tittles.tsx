function Tittles(props: any) {
	return (
		<>
			<h5 className="text-center text-negro-200 dark:text-blanco">
				{props.first}
			</h5>
			<h1 className="section__tittle  w-max text-center relative after:bg-rojo-200 before:bg-rojo-200 dark:after:bg-naranja-200 dark:before:bg-naranja-200">
				{props.main}
			</h1>
			<h5 className="text-center text-negro-200 dark:text-blanco">
				{props.last}
			</h5>
		</>
	);
}

export default Tittles;
