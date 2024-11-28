"use client"

import { useEffect } from "react"

import BestProjects from "@/components/BestProjects"
import Heading from "@/components/ui/Heading"
import dynamic from "next/dynamic"
import styles from "./projects.module.scss"

const AllProjects = dynamic(() => import("./AllProjects"))

export default function ProjectsPage() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" })
	})

	return (
		<div className="projects-page">
			<Heading>Проекты</Heading>

			<section className={styles["best-projects"]}>
				<h3 className={styles.heading}>Моя гордость</h3>

				<BestProjects />
			</section>

			<AllProjects />
		</div>
	)
}
