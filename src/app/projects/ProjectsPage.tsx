"use client"

import { useInView } from "framer-motion"
import { article as MotionArticle } from "framer-motion/client"
import { useRef, type FC } from "react"

import Projects from "@/components/Projects/Projects"
import Heading from "@/components/ui/Heading"
import NavButton from "@/components/ui/NavButton"
import { projects } from "@/constants/data"
import { PagesEnum } from "@/constants/navigation"
import { getSlug } from "@/functions/getSlug"
import styles from "./projects.module.scss"

export default function ProjectsPage() {
	return (
		<section className="projects-page">
			<Heading>Проекты</Heading>

			<div className={styles["best-projects"]}>
				<h3 className={styles.heading}>Моя гордость</h3>

				<Projects />
			</div>

			<div className={styles["all-projects"]}>
				<h3 className={styles.heading}>Все проекты</h3>

				<div className={styles.container}>
					{projects.map(project => (
						<ProjectsArticle
							key={project.title}
							img={project.img}
							title={project.title}
							description={project.description}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

interface IArticleProps {
	img: string
	title: string
	description: string
}

export const ProjectsArticle: FC<IArticleProps> = ({
	img,
	title,
	description
}) => {
	const articleRef = useRef<HTMLDivElement>(null)
	const articleInView = useInView(articleRef, { amount: 0.6, once: true })

	return (
		<MotionArticle
			ref={articleRef}
			initial={false}
			animate={
				articleInView
					? { filter: "none", scale: 1 }
					: { filter: "blur(10px)", scale: 0.75 }
			}
			transition={{ duration: 0.35 }}
			className={styles.article}
		>
			<img className={styles.article__img} src={img} alt={`${title} Banner`} />

			<div className={styles.wrapper}>
				<div>
					<h4 className={styles.article__title}>{title}</h4>
					<p className={styles.article__description}>
						{description.split(".")[0]}
					</p>
				</div>

				<NavButton href={PagesEnum.PROJECTS} param={getSlug(title)}>
					Подробнее
				</NavButton>
			</div>
		</MotionArticle>
	)
}
