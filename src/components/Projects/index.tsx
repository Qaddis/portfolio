"use client"

import type { SetActiveType, SetModalTargetType } from "@/app/page"
import { projects } from "@/data"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Heading from "../ui/Heading"
import styles from "./projects.module.scss"

interface IProps {
	setActive: SetActiveType
	setModalTarget: SetModalTargetType
}

export default function Projects({ setActive, setModalTarget }: IProps) {
	const [widget, setWidget] = useState<number>(0)

	const handleButtonClick = (direction: "left" | "right"): void => {
		if (direction === "right") {
			if (widget + 1 > projects.length - 1) setWidget(0)
			else setWidget(widget + 1)
		} else {
			if (widget - 1 < 0) setWidget(projects.length - 1)
			else setWidget(widget - 1)
		}
	}

	const projectsRef = useRef<HTMLDivElement>(null)
	const projectsInView = useInView(projectsRef, { amount: 0.8 })

	useEffect(() => {
		if (projectsInView) setActive("projects")
	}, [projectsInView])

	return (
		<section id="projects" ref={projectsRef} className={styles.projects}>
			<Heading>Проекты</Heading>

			<div className={styles.carousel}>
				<button
					onClick={() => handleButtonClick("left")}
					className={styles.carousel__btn}
				>
					&lt;
				</button>

				<div className={styles.window}>
					<motion.div
						initial={false}
						animate={{ x: `-${widget * 100}%` }}
						transition={{ duration: 0.25 }}
						className={styles.cards}
					>
						{projects.map((item, index) => (
							<motion.article
								onClick={() => setModalTarget(item.title)}
								initial={false}
								animate={widget === index ? "show" : "hidden"}
								variants={{
									show: { scale: 1 },
									hidden: { scale: 0.75 }
								}}
								transition={{
									delay: widget === index ? 0.3 : 0,
									duration: 0.2
								}}
								key={item.repo}
								className={styles.carousel__card}
							>
								<img src={item.img} />
								<motion.div
									initial={false}
									variants={{
										show: {
											opacity: 1
										},
										hidden: {
											opacity: 0
										}
									}}
									transition={{
										delay: widget === index ? 0.3 : 0,
										duration: 0.2
									}}
								>
									<motion.h3
										initial={false}
										variants={{
											show: { y: 0 },
											hidden: { y: "150%" }
										}}
										transition={{
											delay: widget === index ? 0.3 : 0,
											duration: 0.2
										}}
									>
										{item.title}
									</motion.h3>
									<hr />
									<motion.p
										initial={false}
										variants={{ show: { y: 0 }, hidden: { y: "150%" } }}
										transition={{
											delay: widget === index ? 0.3 : 0,
											duration: 0.2
										}}
									>
										{item.description.split(". ")[0]}
									</motion.p>
								</motion.div>
							</motion.article>
						))}
					</motion.div>
				</div>

				<button
					onClick={() => handleButtonClick("right")}
					className={styles.carousel__btn}
				>
					&gt;
				</button>
			</div>
		</section>
	)
}
