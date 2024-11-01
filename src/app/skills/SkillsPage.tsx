"use client"

import History from "@/components/Blog/History"
import styles from "./skills.module.scss"

export default function SkillsPage() {
	return (
		<>
			<section className="skills">
				<h2 className={styles["main-heading"]}>Блог</h2>

				<History />
			</section>
		</>
	)
}
