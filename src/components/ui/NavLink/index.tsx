import type { SectionsType, SetBurgerType } from "@/app/page"
import type { PropsWithChildren } from "react"
import styles from "./link.module.scss"

interface IProps extends PropsWithChildren {
	to: SectionsType
	active: SectionsType
	setBurgerVisible?: SetBurgerType
}

export default function NavLink({
	children,
	to,
	active,
	setBurgerVisible
}: IProps) {
	const handleClick = (): void => {
		if (to !== active) {
			const target = document.getElementById(to)
			target?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			})
			if (setBurgerVisible) setBurgerVisible(false)
		}
	}

	return (
		<button
			title={`Перейти к разделу "${children}"`}
			onClick={handleClick}
			className={
				active === to ? `${styles.link} ${styles.active}` : styles.link
			}
		>
			{children}
		</button>
	)
}
