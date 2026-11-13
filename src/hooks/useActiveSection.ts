import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[], defaultId: string) {
	const [active, setActive] = useState(defaultId);

	useEffect(() => {
		const elements = ids
			.map((id) => document.getElementById(id))
			.filter((element): element is HTMLElement => Boolean(element));

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]) setActive(`#${visible[0].target.id}`);
			},
			{ rootMargin: "-40% 0px -40% 0px", threshold: 0 }
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [ids]);

	return active;
}
