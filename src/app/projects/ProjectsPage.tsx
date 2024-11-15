"use client"

import { useInView } from "framer-motion"
import { article as MotionArticle } from "framer-motion/client"
import { useSetAtom } from "jotai"
import { useRouter } from "next/navigation"
import { useEffect, useRef, type FC } from "react"

import BestProjects from "@/components/BestProjects"
import Heading from "@/components/ui/Heading"
import NavButton from "@/components/ui/NavButton"
import { projects } from "@/constants/data"
import { PagesEnum } from "@/constants/navigation"
import { getSlug } from "@/functions/getSlug"
import sleep from "@/functions/sleep"
import { isTransitionAtom } from "@/store/store"
import styles from "./projects.module.scss"

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

			<section className={styles["all-projects"]}>
				<h3 className={styles.heading}>Все проекты</h3>

				<div className={styles.container}>
					{projects.map(project => (
						<ProjectsArticle
							key={project.title}
							img={project.preview}
							title={project.title}
							description={project.description}
						/>
					))}
				</div>
			</section>
		</div>
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

	const setTransition = useSetAtom(isTransitionAtom)
	const router = useRouter()

	const handleClick = async (): Promise<void> => {
		setTransition(true)
		await sleep(550)
		router.push(`${PagesEnum.PROJECTS}/${getSlug(title)}`)
	}

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
			onClick={() => handleClick()}
		>
			<img className={styles.article__img} src={img} alt={`${title} banner`} />

			<div className={styles.wrapper}>
				<section className={styles.article__info}>
					<h4 className={styles.article__title}>{title}</h4>
					<p className={styles.article__description}>
						{description.split(".")[0]}
					</p>
				</section>

				<NavButton
					className={styles["more-info-btn"]}
					href={PagesEnum.PROJECTS}
					param={getSlug(title)}
					title={`Перейти на страницу проекта ${title}`}
					aria-label={`Перейти на страницу проекта ${title}`}
				>
					Подробнее
				</NavButton>
			</div>
		</MotionArticle>
	)
}
