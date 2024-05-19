"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CSSProperties, FC, ReactNode, type MouseEvent } from "react"
import classes from "./NavLink.module.scss"

interface IProps {
	children: ReactNode
	to: string
	styles?: CSSProperties
}

type HCType = (evt: MouseEvent<HTMLAnchorElement>, to: string) => void

const NavLink: FC<IProps> = ({ children, to, styles }) => {
	const path = usePathname()

	const handleClick: HCType = (evt, to) => {
		evt.preventDefault()

		if (to === "about") {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
		} else {
			const content = document.getElementById(to)
			if (content)
				content.scrollIntoView({
					behavior: "smooth",
					block: "center",
					inline: "nearest"
				})
		}
	}

	return (
		<Link
			style={styles}
			className={
				path === to ? `${classes.link} ${classes.active}` : classes.link
			}
			href={to}
			onClick={evt => handleClick(evt, to)}
		>
			{children}
		</Link>
	)
}

export default NavLink
