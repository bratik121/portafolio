export const notEmpty = (text: string): boolean => text != "";
export const validEmail = (email: string) =>
	!email.match(
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	);

export const validText = (text: string) => !text.match(/^[a-z]+$/i);
