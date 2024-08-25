"use client"

import Footer from "@/components/AppFooter"
import PageLink from "@/components/ui/Buttons/PageLink"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import styles from "./blog.module.scss"

import { blog } from "@/data"
import { useState } from "react"

export default function BlogPage() {
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
		<section className={styles.blog}>
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

			<main className={styles.main}>
				<div className={styles.wrapper}>
					<h2 className={styles["main-heading"]}>Блог</h2>

					<section className={styles.history}>
						<h3 className={styles.heading}>
							Как я стал <b>web разработчиком</b>?
						</h3>

						<div className={styles["history__container"]}>
							{blog.map((item, index) => (
								<article
									key={index + 1}
									className={
										index % 2 === 0
											? styles["history__card"]
											: `${styles["history__card"]} ${styles["--right"]}`
									}
								>
									<motion.h4
										initial={{ y: "-15%" }}
										animate={{ y: "15%" }}
										transition={{
											duration: 1,
											repeat: Infinity,
											repeatType: "reverse",
											ease: "easeInOut",
											delay: index / 5
										}}
									>
										{index + 1}
									</motion.h4>

									<p dangerouslySetInnerHTML={{ __html: item }} />
								</article>
							))}
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</section>
	)
}
