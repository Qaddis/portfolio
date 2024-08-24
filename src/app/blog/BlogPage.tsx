"use client"

import Footer from "@/components/AppFooter"
import PageLink from "@/components/ui/Buttons/PageLink"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import styles from "./blog.module.scss"

import { blog } from "@/data"

export default function BlogPage() {
	const router = useRouter()

	const logoClick = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}

	return (
		<section className={styles.blog}>
			<header className={styles.header}>
				<div className={styles.wrapper}>
					<button onClick={logoClick} className={styles.logo}>
						<h1>Qaddis</h1>
					</button>

					<PageLink href="/" title="Перейти на главную страницу">
						На главную
					</PageLink>
				</div>
			</header>

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
