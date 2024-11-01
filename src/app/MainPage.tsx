"use client"

import About from "@/components/Main/About"
import History from "@/components/Main/History"
import Landing from "@/components/Main/Landing"
import styles from "./main.module.scss"

export default function MainPage() {
	return (
		<section className="main-page">
			<Landing />

			<About />

			<div className={styles["heading-wrapper"]}>
				<h2 className={styles["blog-heading"]}>Блог</h2>
			</div>

			<History />
		</section>
	)
}
