"use client"

import NavButton from "@/components/ui/NavButton"
import { projects } from "@/constants/data"
import { PagesEnum } from "@/constants/navigation"
import { getSlug } from "@/functions/getSlug"
import { useState } from "react"
import styles from "./project.module.scss"

export default function ProjectPage({ target }: { target: string }) {
	const [project] = useState(
		projects.find(item => getSlug(item.title) === target)
	)

	return project ? (
		<section className="project-page">
			<NavButton href={PagesEnum.PROJECTS}>Назад</NavButton>
			<h2 className={styles.heading}>{project.title}</h2>
		</section>
	) : (
		<section className={`project-page ${styles["not-found"]}`}>
			<h2 className={styles.heading}>
				<span>Проект</span> не найден
			</h2>
			<NavButton href={PagesEnum.PROJECTS}>Назад</NavButton>
		</section>
	)
}
