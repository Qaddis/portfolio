"use client"

import { motion, useInView } from "motion/react"
import { useRef, useState, type ReactElement } from "react"

import Heading from "@/components/ui/Heading"
import {
	backendSkillsCategories,
	frontendSkillsCategories
} from "@/constants/skills.constants"
import { backendSkills, frontendSkills } from "@/data/skills.data"

import styles from "./Skills.module.scss"

export default function SkillsPage() {
	return (
		<div className="skills-page">
			<Heading>Навыки</Heading>

			<section className={styles["skill-group"]}>
				<h3 className={styles["skills-group-heading"]}>Frontend</h3>

				{frontendSkillsCategories.map(category => (
					<div key={category}>
						<h4 className={styles.heading}>{category}</h4>

						<div className={styles.container}>
							{frontendSkills
								.filter(item => item.category === category)
								.map((item, index) => (
									<SkillsArticle
										key={item.title}
										title={item.title}
										delay={index / 10}
									/>
								))}
						</div>
					</div>
				))}
			</section>

			<section className={styles["skill-group"]}>
				<h3 className={styles["skills-group-heading"]}>Backend</h3>

				{backendSkillsCategories.map(category => (
					<div key={category}>
						<h4 className={styles.heading}>{category}</h4>

						<div className={styles.container}>
							{backendSkills
								.filter(item => item.category === category)
								.map((item, index) => (
									<SkillsArticle
										key={item.title}
										title={item.title}
										delay={index / 10}
									/>
								))}
						</div>
					</div>
				))}
			</section>
		</div>
	)
}

export const SkillsArticle = ({
	title,
	delay
}: {
	title: string
	delay: number
}): ReactElement => {
	const getImageLink = (): string =>
		title.replace(".", "").replace(" ", "_").toLowerCase()

	const [isAnimating, setIsAnimating] = useState<boolean>(false)

	const handleAnimationStart = () => {
		if (!isAnimating) {
			setIsAnimating(true)
		}
	}

	const handleAnimationComplete = () => {
		setIsAnimating(false)
	}

	const cardRef = useRef(null)
	const cardInView = useInView(cardRef, {
		once: true,
		amount: 0.2,
		margin: "30% 0px 0px 0px"
	})

	return (
		<motion.div
			ref={cardRef}
			className={styles["card-wrapper"]}
			initial={false}
			animate={cardInView ? { y: 0, opacity: 1 } : { y: "10%", opacity: 0 }}
			transition={{ delay: delay, duration: 0.25, ease: "easeOut" }}
		>
			<motion.article
				className={styles.card}
				onMouseEnter={handleAnimationStart}
				initial={{ backgroundPositionX: "-150%" }}
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
								transition: {
									duration: 0
								}
						  }
				}
				transition={{ delay: 0 }}
				onAnimationComplete={handleAnimationComplete}
			>
				<img
					className={styles.card__img}
					src={`/icons/${getImageLink()}.svg`}
					alt={`${title} Logo`}
				/>

				<h4 className={styles.card__title}>{title}</h4>
			</motion.article>
		</motion.div>
	)
}
