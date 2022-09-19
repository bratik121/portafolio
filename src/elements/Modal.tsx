import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";
import Button from "./Button";
function Modal(props: any) {
	return (
		<div
			className={`modal-bg w-screen h-screen bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(100,100,100,0.3)] absolute z-40 flex items-center justify-center`}
		>
			<div className="modal h-[21rem] w-[17rem] bg-blanco dark:bg-negro-200 flex flex-col p-3 rounded-lg justify-between">
				<div className="w-full flex justify-end">
					<AiOutlineClose
						className="text-3xl hover:text-rojo-500 dark:hover:text-naranja-500 hover:cursor-pointer"
						onClick={() => {
							props.modalSateSetter(false);
						}}
					/>
				</div>
				<div className="title w-full text-center">
					<h1 className="text-2xl">{props.tittle}</h1>
				</div>
				<div className="body w-full flex justify-center">
					<AiOutlineCheckCircle className="text-[6rem]" />
				</div>
				<div className="footer w-full flex justify-center">
					<Button
						label="Entendido"
						clase="primary"
						clickHandler={() => {
							props.modalSateSetter(false);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Modal;
