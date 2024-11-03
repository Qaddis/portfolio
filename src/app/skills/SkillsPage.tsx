"use client"

import { motion, useInView } from "framer-motion"
import { Fragment, useRef, useState, type ReactElement } from "react"

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
							.map((item, index) => (
								<SkillsArticle
									key={item.title}
									title={item.title}
									delay={index / 10}
								/>
							))}
					</div>
				</Fragment>
			))}
		</section>
	)
}

export const SkillsArticle = ({
	title,
	delay
}: {
	title: string
	delay: number
}): ReactElement => {
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

	const cardRef = useRef(null)
	const cardInView = useInView(cardRef, {
		once: true,
		amount: 0.2,
		margin: "30% 0px 0px 0px"
	})

	return (
		<motion.div
			ref={cardRef}
			animate={cardInView ? { y: 0, opacity: 1 } : { y: "10%", opacity: 0 }}
			transition={{ delay: delay, duration: 0.25, ease: "easeOut" }}
		>
			<motion.article
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
				className={styles.card}
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
