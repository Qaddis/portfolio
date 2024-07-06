import type { SectionsType } from "@/app/page"
import type { PropsWithChildren } from "react"
import styles from "./link.module.scss"

interface IProps extends PropsWithChildren {
	to: SectionsType
	active: SectionsType
	title?: string
}

export default function NavLink({ children, to, active, title }: IProps) {
	const handleClick = (): void => {
		if (to !== active) {
			const target = document.getElementById(to)
			target?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			})
		}
	}

	return (
		<button
			title={title}
			onClick={handleClick}
			className={
				active === to ? `${styles.link} ${styles.active}` : styles.link
			}
		>
			{children}
		</button>
	)
}
