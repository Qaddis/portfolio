"use client"

import type { SectionsType } from "@/app/page"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import NavLink from "../NavLink"
import styles from "./header.module.scss"

interface IProps {
	active: SectionsType
}

export default function Header({ active }: IProps) {
	const logoClick = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}

	const [isShow, setIsShow] = useState<boolean>(true)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, "change", latest => {
		const previously = scrollY.getPrevious()

		if (previously) {
			if (latest > 100 && latest > previously) {
				if (latest - previously > 5) setIsShow(false)
			} else {
				if (previously - latest > 5) setIsShow(true)
			}
		}
	})

	return (
		<motion.header
			initial={false}
			animate={isShow ? "show" : "hide"}
			variants={{
				hide: { y: "-100%" },
				show: { y: 0 }
			}}
			transition={{
				delay: isShow ? 0 : 0.25,
				duration: 0.25,
				ease: "easeOut"
			}}
			className={styles.header}
		>
			<div className={styles.wrapper}>
				<motion.h1
					variants={{ show: { x: 0 }, hide: { x: "-300%" } }}
					transition={{
						delay: isShow ? 0.25 : 0,
						duration: 0.25,
						ease: "easeOut"
					}}
					onClick={logoClick}
					className={styles.logo}
				>
					Qaddis
				</motion.h1>

				<motion.nav
					variants={{ show: { x: 0 }, hide: { x: "150%" } }}
					transition={{
						delay: isShow ? 0.25 : 0,
						duration: 0.25,
						ease: "easeOut"
					}}
					className={styles.nav}
				>
					<NavLink to="about" active={active}>
						Обо мне
					</NavLink>
					<NavLink to="skills" active={active}>
						Навыки
					</NavLink>
					<NavLink to="projects" active={active}>
						Проекты
					</NavLink>
					<NavLink to="contacts" active={active}>
						Контакты
					</NavLink>
				</motion.nav>
			</div>
		</motion.header>
	)
}
