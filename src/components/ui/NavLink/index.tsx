import type { SectionsType } from "@/app/page"
import type { MouseEvent, PropsWithChildren } from "react"
import styles from "./link.module.scss"

interface IProps extends PropsWithChildren {
	to: SectionsType
	active: SectionsType
}

type HCType = (evt: MouseEvent<HTMLAnchorElement>) => void

export default function NavLink({ children, to, active }: IProps) {
	const handleClick: HCType = evt => {
		evt.preventDefault()

		if (to !== active) {
			const target = document.getElementById(to)
			target?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			})
		}
	}

	return (
		<a
			href={to}
			onClick={handleClick}
			className={
				active === to ? `${styles.link} ${styles.active}` : styles.link
			}
		>
			{children}
		</a>
	)
}
