import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import PageLink from "../ui/PageLink"
import styles from "./scss/header.module.scss"

export default function Header() {
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
				ease: "easeInOut"
			}}
			className={styles.header}
		>
			<div className={styles.wrapper}>
				<motion.button
					variants={{
						show: { x: 0 },
						hide: { x: "-60vw" }
					}}
					transition={{
						delay: isShow ? 0.25 : 0,
						duration: 0.25,
						ease: "easeOut"
					}}
					onFocus={() => {
						setIsShow(true)
					}}
					onClick={logoClick}
					className={styles.logo}
				>
					<h1>Qaddis</h1>
				</motion.button>

				<motion.div
					variants={{ show: { x: 0 }, hide: { x: "60vw" } }}
					transition={{
						delay: isShow ? 0.25 : 0,
						duration: 0.25,
						ease: "easeInOut"
					}}
				>
					<PageLink
						href="/"
						onFocus={() => setIsShow(true)}
						title="Перейти на главную страницу"
					>
						На главную
					</PageLink>
				</motion.div>
			</div>
		</motion.header>
	)
}
