"use client"

import { useRouter } from "next/navigation"
import { type FC } from "react"
import NavLink from "../UI/NavLink"
import classes from "./AppHeader.module.scss"

const Header: FC = () => {
	const router = useRouter()

	const logoClick = (): void => {
		router.push("/")
	}

	return (
		<header className={classes.header}>
			<div className={`wrapper ${classes.wrapper}`}>
				<h1 onClick={logoClick} className={classes.logo}>
					Qaddis
				</h1>

				<nav className={classes.nav}>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/contacts">Contacts</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header
