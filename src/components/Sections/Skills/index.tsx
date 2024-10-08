"use client"

import Heading from "@/components/ui/Heading"
import { skills } from "@/data"
import { useActions } from "@/redux/hooks"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import styles from "./skills.module.scss"

interface IArticleProps {
	img: string
	title: string
	color: string
	inView: boolean
}

export default function Skills() {
	const { setActiveSect } = useActions()

	const articlesRef = useRef<HTMLDivElement>(null)
	const articlesInView = useInView(articlesRef, { amount: 0.2, once: true })

	const skillsRef = useRef<HTMLDivElement>(null)
	const skillsInView = useInView(skillsRef, { amount: 0.8 })

	useEffect(() => {
		if (skillsInView) setActiveSect("skills")
	}, [skillsInView])

	return (
		<section id="skills" ref={skillsRef} className={styles.skills}>
			<Heading>Навыки</Heading>

			<div ref={articlesRef} className={styles.articles}>
				{skills.map(item => (
					<Article
						key={item.title}
						img={item.image}
						title={item.title}
						color={item.color}
						inView={articlesInView}
					/>
				))}
			</div>
		</section>
	)
}

const Article = ({ img, title, color, inView }: IArticleProps) => {
	return (
		<motion.article
			initial="calm"
			animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.35 }}
			transition={{ duration: 0.25 }}
			whileHover="hover"
			variants={{
				calm: {
					borderColor: "var(--spec)"
				},
				hover: {
					borderColor: "var(--add)"
				}
			}}
			className={styles.article}
		>
			<motion.img
				variants={{
					calm: {
						filter: `drop-shadow(0 0 0 ${color})`
					},
					hover: {
						filter: `drop-shadow(0 0 8px ${color})`
					}
				}}
				className={styles.article__img}
				transition={{ duration: 0.25 }}
				width={50}
				height={50}
				src={img}
				alt={`${title} Logo`}
			/>
			<h4 className={styles.article__title}>{title}</h4>
		</motion.article>
	)
}
