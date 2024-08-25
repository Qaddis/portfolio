import { useActions, useAppSelector } from "@/redux/hooks"
import type { Dispatch, PropsWithChildren } from "react"
import styles from "./link.module.scss"

interface IProps extends PropsWithChildren {
	to: string
	burger?: boolean
	tabIndex?: number
	setHeader?: Dispatch<boolean>
}

export default function NavLink({
	children,
	to,
	burger,
	setHeader,
	tabIndex
}: IProps) {
	const activeSect = useAppSelector(state => state.system.activeSection)
	const { setBurger } = useActions()

	const handleClick = (): void => {
		if (to !== activeSect) {
			const target = document.getElementById(to)
			target?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			})
			if (burger) setBurger(false)
		}
	}

	return (
		<button
			title={`Перейти к разделу "${children}"`}
			onClick={handleClick}
			className={
				activeSect === to ? `${styles.link} ${styles.active}` : styles.link
			}
			onFocus={() => setHeader && setHeader(true)}
			tabIndex={tabIndex}
		>
			{children}
		</button>
	)
}
