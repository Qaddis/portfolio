"use client"

import type { SetActiveType, SetModalTargetType } from "@/app/page"
import Heading from "@/components/ui/Heading"
import { projects } from "@/data"
import type { Transition } from "framer-motion"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
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

	const sliderRef = useRef<HTMLDivElement>(null)
	const sliderInView = useInView(sliderRef, { amount: 0.5, once: true })

	const buttonsRef = useRef<HTMLButtonElement>(null)
	const buttonsInView = useInView(buttonsRef, {
		amount: 0.5,
		once: true,
		margin: "100% 0px 0px 0px"
	})

	const transition: Transition = {
		duration: 0.25,
		ease: "easeIn"
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
				<motion.button
					ref={buttonsRef}
					initial={false}
					animate={
						buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }
					}
					transition={transition}
					title="Перейти к предыдущему проекту"
					onClick={() => handleButtonClick("left")}
					className={styles.carousel__btn}
				>
					&lt;
				</motion.button>

				<motion.div
					ref={sliderRef}
					initial={false}
					animate={
						sliderInView
							? { scale: 1, filter: "none" }
							: { scale: 0.82, filter: "blur(8px)" }
					}
					transition={transition}
					className={styles.window}
				>
					<motion.div
						initial={false}
						animate={{ x: `-${widget * 100}%` }}
						transition={{ duration: 0.25 }}
						className={styles.cards}
					>
						{projects.map((item, index) => (
							<motion.article
								title={`Подробнее о ${item.title}`}
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
								<Image
									src={item.img}
									alt={`${item.title} Banner`}
									width={900}
									height={535}
									quality={100}
								/>
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
				</motion.div>

				<motion.button
					initial={false}
					animate={
						buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }
					}
					transition={transition}
					title="Перейти к следующему проекту"
					onClick={() => handleButtonClick("right")}
					className={styles.carousel__btn}
				>
					&gt;
				</motion.button>
			</div>
		</section>
	)
}
