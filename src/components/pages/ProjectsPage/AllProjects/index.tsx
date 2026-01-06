import { useSetAtom } from "jotai"
import { useInView } from "motion/react"
import { article as MotionArticle } from "motion/react-client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { memo, useRef, type FC } from "react"

import NavButton from "@/components/ui/buttons/NavButton"
import { PagesEnum } from "@/constants/navigation.constants"
import { projects } from "@/data/projects.data"
import { isTransitionAtom } from "@/stores/transitionState.store"
import { getSlug } from "@/utils/getSlug"
import sleep from "@/utils/sleep"

import styles from "./AllProjects.module.scss"

interface IArticleProps {
	img: string
	title: string
	description: string
}

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
