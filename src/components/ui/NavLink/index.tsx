import type { MouseEvent, PropsWithChildren } from "react"
import styles from "./link.module.scss"

interface IProps extends PropsWithChildren {
	to: string
	active: string
}

type HCType = (evt: MouseEvent<HTMLAnchorElement>) => void

export default function NavLink({ children, to, active }: IProps) {
	const getClasses = (): string => {
		return active === to ? `${styles.link} ${styles.active}` : styles.link
	}

	const handleClick: HCType = evt => {
		evt.preventDefault()

		if (to !== active) {
			if (to === "about") {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				})
			} else {
				const target = document.getElementById(to)
				target?.scrollIntoView({
					behavior: "smooth",
					block: "center"
				})
			}
		}
	}

	return (
		<a href={to} onClick={handleClick} className={getClasses()}>
			{children}
		</a>
	)
}
