"use client"

import { projectAtom } from "@/store/store"
import type { PanInfo, Transition } from "framer-motion"
import { motion, useInView } from "framer-motion"
import { useSetAtom } from "jotai"
import Image from "next/image"
import { useRef, useState } from "react"

import Heading from "@/components/ui/Heading"
import { projects } from "@/data"
import styles from "./scss/projects.module.scss"

export default function Projects() {
	const setProject = useSetAtom(projectAtom)

	const [widget, setWidget] = useState<number>(0)
	const [dragStart, setDragStart] = useState<number>()

	const handleButtonClick = (direction: "left" | "right"): void => {
		if (direction === "right") {
			if (widget + 1 > projects.length - 1) setWidget(0)
			else setWidget(widget + 1)
		} else {
			if (widget - 1 < 0) setWidget(projects.length - 1)
			else setWidget(widget - 1)
		}
	}

	const handleDragStart = (
		evt: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	): void => {
		setDragStart(info.point.x)
	}

	const handleDragEnd = (
		evt: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	): void => {
		const dragDistance = dragStart! - info.point.x
		const threshold = 50

		if (Math.abs(dragDistance) > threshold) {
			if (dragDistance > 0 && widget + 1 <= projects.length - 1)
				handleButtonClick("right")
			else if (dragDistance < 0 && widget - 1 >= 0) handleButtonClick("left")
		}

		setDragStart(0)
	}

	const sliderRef = useRef<HTMLDivElement>(null)
	const sliderInView = useInView(sliderRef, { amount: 0.5, once: true })

	const buttonsRef = useRef<HTMLButtonElement>(null)
	const buttonsInView = useInView(buttonsRef, {
		amount: 0.5,
		once: true
	})

	const transition: Transition = {
		duration: 0.25,
		ease: "easeIn"
	}

	return (
		<section className={styles.projects}>
			<Heading>Проекты</Heading>

			<div className={styles.carousel}>
				<motion.button
					ref={buttonsRef}
					initial={false}
					animate={{ opacity: buttonsInView ? 1 : 0 }}
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
								key={item.repo}
								className={styles.carousel__card}
								onClick={() => setProject(item.title)}
								title={`Подробнее о ${item.title}`}
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
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0.2}
								onDragStart={handleDragStart}
								onDragEnd={handleDragEnd}
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
					animate={{ opacity: buttonsInView ? 1 : 0 }}
					transition={transition}
					title="Перейти к следующему проекту"
					onClick={() => handleButtonClick("right")}
					className={styles.carousel__btn}
				>
					&gt;
				</motion.button>
			</div>

			<p className={styles.clue}>
				Нажмите на баннер, чтобы узнать о проекте больше
			</p>

			<div className={styles["mobile-controls"]}>
				<button
					title="Перейти к предыдущему проекту"
					onClick={() => handleButtonClick("left")}
				>
					&lt;
				</button>

				<button
					title="Перейти к следующему проекту"
					onClick={() => handleButtonClick("right")}
				>
					&gt;
				</button>
			</div>
		</section>
	)
}
