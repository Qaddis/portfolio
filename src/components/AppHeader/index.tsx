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
			if (latest > 100 && latest > previously) {
				if (latest - previously > 10) setIsShow(false)
			} else {
				if (previously - latest > 10) setIsShow(true)
			}
		}
	})

	const logoClick = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
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
				delay: isShow ? 0 : 0.25,
				duration: 0.35,
				ease: "easeOut"
			}}
			className={classes.header}
		>
			<div className={`wrapper ${classes.wrapper}`}>
				<motion.h1
					initial={false}
					variants={{
						show: {
							x: 0
						},
						hidden: {
							x: "-200%"
						}
					}}
					transition={{
						delay: isShow ? 0.35 : 0,
						duration: 0.25,
						ease: "easeOut"
					}}
					onClick={logoClick}
					className={classes.logo}
				>
					Qaddis
				</motion.h1>

				<motion.nav
					initial={false}
					variants={{
						show: {
							x: 0
						},
						hidden: {
							x: "200%"
						}
					}}
					transition={{
						delay: isShow ? 0.35 : 0,
						duration: 0.25,
						ease: "easeOut"
					}}
					className={classes.nav}
				>
					<NavLink to="about">About</NavLink>
					<NavLink to="skills">Skills</NavLink>
					<NavLink to="projects">Projects</NavLink>
					<NavLink to="contacts">Contacts</NavLink>
				</motion.nav>
			</div>
		</motion.header>
	)
}

export default Header
