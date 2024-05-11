"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CSSProperties, FC, ReactNode } from "react"
import classes from "./NavLink.module.scss"

interface IProps {
	children: ReactNode
	to: string
	styles?: CSSProperties
}

const NavLink: FC<IProps> = ({ children, to, styles }) => {
	const path = usePathname()

	return (
		<Link
			style={styles}
			className={
				path === to ? `${classes.link} ${classes.active}` : classes.link
			}
			href={to}
		>
			{children}
		</Link>
	)
}

export default NavLink
