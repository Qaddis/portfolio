"use client"

import Carousel from "@/components/Carousel"
import Heading from "@/components/ui/Heading"
import NavButton from "@/components/ui/NavButton"
import { projects } from "@/constants/data"
import { PagesEnum } from "@/constants/navigation"
import { getSlug } from "@/functions/getSlug"
import styles from "./project.module.scss"

export default function ProjectPage({ target }: { target: string }) {
	const project = projects.find(item => getSlug(item.title) === target)
	const images: string[] = []

	if (project && project.images > 0) {
		for (let i = 1; i <= project.images; i++)
			images.push(`/projects/${project.repo}/${i}.png`)
	}

	return project ? (
		<section className="project-page">
			<div>
				<NavButton href={PagesEnum.PROJECTS}>Назад</NavButton>
				<Heading>{project.title}</Heading>
			</div>

			{project.images > 0 ? (
				<Carousel images={images} />
			) : (
				<img
					className={styles.screenshot}
					src={project.preview}
					alt={`${project.title} Screenshot`}
				/>
			)}

			<h3 className={styles.heading}>
				<span>Подробнее о проекте</span>
			</h3>

			<p className={styles.description}>{project.description}</p>

			<div className={styles.info}>
				<ul className={styles.technologies}>
					{project.techs.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>

				<div className={styles["link-wrapper"]}>
					<a
						className={styles.link}
						href={`https://github.com/Qaddis/${project.repo}`}
						target="_blank"
					>
						<svg>
							<use xlinkHref="#github-logo"></use>
						</svg>

						<span>Репозиторий проекта</span>
					</a>
				</div>
			</div>
		</section>
	) : (
		<section className={`project-page ${styles["not-found"]}`}>
			<h3 className={styles.heading}>
				<span>Проект</span> не найден
			</h3>
			<NavButton href={PagesEnum.PROJECTS}>Назад</NavButton>
		</section>
	)
}
