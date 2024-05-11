"use client"

import { FC } from "react"
import classes from "./AppHeader.module.scss"
import NavLink from "./UI/NavLink"

const Header: FC = () => {
	return (
		<header className={classes.header}>
			<div className={`wrapper ${classes.wrapper}`}>
				<h1 className={classes.logo}>Qaddis</h1>

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
