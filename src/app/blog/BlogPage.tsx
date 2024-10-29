"use client"

import Footer from "@/components/AppFooter"
import Header from "@/components/Blog/Header"
import History from "@/components/Blog/History"
import styles from "./blog.module.scss"

export default function BlogPage() {
	return (
		<>
			<Header />

			<main className={styles.main}>
				<div className={styles.wrapper}>
					<h2 className={styles["main-heading"]}>Блог</h2>

					<History />
				</div>
			</main>

			<Footer />
		</>
	)
}
