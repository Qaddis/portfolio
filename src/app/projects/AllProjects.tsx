import { useInView } from "framer-motion"
import { article as MotionArticle } from "framer-motion/client"
import { useSetAtom } from "jotai"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { memo, useRef, type FC } from "react"

import NavButton from "@/components/ui/NavButton"
import { projects } from "@/constants/data"
import { PagesEnum } from "@/constants/navigation"
import { getSlug } from "@/functions/getSlug"
import sleep from "@/functions/sleep"
import { isTransitionAtom } from "@/store/store"
import styles from "./projects.module.scss"

export default function AllProjects() {
	return (
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
	)
}

interface IArticleProps {
	img: string
	title: string
	description: string
}

export const ProjectsArticle: FC<IArticleProps> = memo(
	({ img, title, description }) => {
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
				<Image
					src={img}
					alt={`${title} banner`}
					className={styles.article__img}
					width={1920}
					height={1080}
				/>

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
)
