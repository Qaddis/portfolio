"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useSetAtom } from "jotai"
import { useState } from "react"

import { links } from "@/data"
import { burgerAtom } from "@/store/store"
import styles from "./header.module.scss"
import NavLink from "./ui/NavLink"

export default function Header() {
	const logoClick = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}

	const setBurger = useSetAtom(burgerAtom)

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
				<motion.button
					variants={{ show: { x: 0 }, hide: { x: "-60vw" } }}
					transition={{
						delay: isShow ? 0.25 : 0,
						duration: 0.25,
						ease: "easeOut"
					}}
					onClick={logoClick}
					onFocus={() => {
						setIsShow(true)
					}}
					className={styles.logo}
				>
					<h1>Qaddis</h1>
				</motion.button>

				<motion.nav
					variants={{ show: { x: 0 }, hide: { x: "60vw" } }}
					transition={{
						delay: isShow ? 0.25 : 0,
						duration: 0.25,
						ease: "easeOut"
					}}
					className={styles.nav}
				>
					{links.map(item => (
						<NavLink key={item.to} href={item.to} setHeader={setIsShow}>
							{item.text}
						</NavLink>
					))}
				</motion.nav>

				<motion.button
					variants={{
						show: { x: 0 },
						hide: { x: "420%" }
					}}
					transition={{
						delay: isShow ? 0.25 : 0,
						duration: 0.25,
						ease: "easeOut"
					}}
					onClick={() => setBurger(true)}
					className={styles["burger-btn"]}
				>
					<svg>
						<use xlinkHref="#burger-logo"></use>
					</svg>
				</motion.button>
			</div>
		</motion.header>
	)
}
