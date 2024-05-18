"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState, type FC } from "react"
import NavLink from "../UI/NavLink"
import classes from "./AppHeader.module.scss"

const Header: FC = () => {
	const router = useRouter()
	const { scrollY } = useScroll()

	const [isShow, setIsShow] = useState<boolean>(true)

	useMotionValueEvent(scrollY, "change", latest => {
		const previously = scrollY.getPrevious()

		if (previously) {
			if (latest > 100 && latest > previously) setIsShow(false)
			else setIsShow(true)
		}
	})

	const logoClick = (): void => {
		router.push("/")
	}

	return (
		<motion.header
			initial={false}
			animate={isShow ? "show" : "hidden"}
			variants={{
				show: {
					y: 0
				},
				hidden: {
					y: "-100%"
				}
			}}
			transition={{
				duration: 0.35,
				ease: "easeInOut"
			}}
			className={classes.header}
		>
			<div className={`wrapper ${classes.wrapper}`}>
				<h1 onClick={logoClick} className={classes.logo}>
					Qaddis
				</h1>

				<nav className={classes.nav}>
					<NavLink to="/">About</NavLink>
					<NavLink to="/skills">Skills</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/contacts">Contacts</NavLink>
				</nav>
			</div>
		</motion.header>
	)
}

export default Header
