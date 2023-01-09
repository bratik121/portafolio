import { AiOutlineEye } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useState } from "react";
function WorkItem(props: any) {
	return (
		<article className="work__item border w-[260px] h-[210px] border-rojo-200 dark:border-naranja-200 relative rounded-lg overflow-hidden ">
			<div className="item-image w-full h-[60%] overflow-hidden ">
				<img className="" src={props.image} alt={props.tittle} />
			</div>
			<div
				className={`item-content absolute  w-full h-[40%]  bg-blanco dark:bg-negro-200 overflow-hidden px-2 `}
			>
				<h3 className="item-tittle font-bold">{props.tittle}</h3>
				<p className="item-description text-xs text-negro-200 dark:text-blanco">
					{props.description}
				</p>
				<div className="item-buttons w-full flex justify-around items-center mt-2">
					<a
						href={props.url}
						target={"_blank"}
						className="flex items-center text-rojo-200 dark:text-naranja-200 hover:text-rojo-500 dark:hover:text-naranja-500"
					>
						<AiOutlineEye /> Visitar
					</a>
					<a
						href={props.repository}
						target={"_blank"}
						className="flex items-center text-rojo-200 dark:text-naranja-200 hover:text-rojo-500 dark:hover:text-naranja-500"
					>
						<RiGitRepositoryLine />
						Repositorio
					</a>
				</div>
			</div>
		</article>
	);
}

export default WorkItem;
