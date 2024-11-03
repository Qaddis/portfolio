"use client"

import { motion } from "framer-motion"
import { Fragment, useState, type ReactElement } from "react"

import Heading from "@/components/ui/Heading"
import { skills, skillsCategories } from "@/constants/data"
import styles from "./skills.module.scss"

export default function SkillsPage() {
	return (
		<section className="skills-page">
			<Heading>Навыки</Heading>

			{skillsCategories.map(category => (
				<Fragment key={category}>
					<h3 className={styles.heading}>{category}</h3>
					<div className={styles.container}>
						{skills
							.filter(item => item.category === category)
							.map(item => (
								<SkillsArticle key={item.title} title={item.title} />
							))}
					</div>
				</Fragment>
			))}
		</section>
	)
}

export const SkillsArticle = ({ title }: { title: string }): ReactElement => {
	const getImageLink = (): string => title.replace(".", "").toLowerCase()

	const [isAnimating, setIsAnimating] = useState<boolean>(false)

	const handleAnimationStart = () => {
		if (!isAnimating) {
			setIsAnimating(true)
		}
	}

	const handleAnimationComplete = () => {
		setIsAnimating(false)
	}

	return (
		<motion.article
			onMouseEnter={handleAnimationStart}
			animate={
				isAnimating
					? {
							backgroundPositionX: ["150%", "-150%"],
							transition: {
								duration: 0.65,
								ease: "linear"
							}
						}
					: {
							backgroundPositionX: "-150%",
							transition: {
								duration: 0
							}
						}
			}
			onAnimationComplete={handleAnimationComplete}
			className={styles.card}
		>
			<img
				className={styles.card__img}
				src={`/icons/${getImageLink()}.svg`}
				alt={`${title} Logo`}
			/>
			<h4 className={styles.card__title}>{title}</h4>
		</motion.article>
	)
}
