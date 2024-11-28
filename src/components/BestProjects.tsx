"use client"

import type { PanInfo, Transition } from "framer-motion"
import { motion, useInView } from "framer-motion"
import { useSetAtom } from "jotai"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

import { projects } from "@/constants/data"
import { PagesEnum } from "@/constants/navigation"
import { getSlug } from "@/functions/getSlug"
import sleep from "@/functions/sleep"
import { isTransitionAtom } from "@/store/store"
import styles from "./carousel.module.scss"

export default function BestProjects() {
	const favorites = projects.filter(item => item.isFavorite)

	const [widget, setWidget] = useState<number>(0)
	const [dragStart, setDragStart] = useState<number>()

	const router = useRouter()
	const setTransition = useSetAtom(isTransitionAtom)

	const handleBannerClick = async (project: string): Promise<void> => {
		setTransition(true)
		await sleep(550)
		router.push(PagesEnum.PROJECTS + `/${getSlug(project)}`)
	}

	const handleButtonClick = (direction: "left" | "right"): void => {
		if (direction === "right") {
			if (widget + 1 > favorites.length - 1) setWidget(0)
			else setWidget(widget + 1)
		} else {
			if (widget - 1 < 0) setWidget(favorites.length - 1)
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
			if (dragDistance > 0 && widget + 1 <= favorites.length - 1)
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
		<div className={styles["carousel-section"]}>
			<div className={styles.carousel}>
				<motion.button
					ref={buttonsRef}
					className={styles.carousel__btn}
					onClick={() => handleButtonClick("left")}
					title="Перелистнуть назад"
					aria-label="Перелистнуть назад"
					initial={false}
					animate={{ opacity: buttonsInView ? 1 : 0 }}
					transition={transition}
				>
					&lt;
				</motion.button>

				<motion.div
					ref={sliderRef}
					className={styles.window}
					onKeyDown={e => {
						if (e.key === "Enter") handleBannerClick(projects[widget].title)
					}}
					tabIndex={0}
					initial={false}
					animate={
						sliderInView
							? { scale: 1, filter: "none" }
							: { scale: 0.82, filter: "blur(8px)" }
					}
					transition={transition}
				>
					<motion.div
						className={styles.cards}
						initial={false}
						animate={{ x: `-${widget * 100}%` }}
						transition={{ duration: 0.25 }}
					>
						{favorites.map((item, index) => (
							<motion.article
								key={item.repo}
								className={styles.best__card}
								onClick={() => handleBannerClick(item.title)}
								title={`Перейти на страницу проекта ${item.title}`}
								aria-label={`Перейти на страницу проекта ${item.title}`}
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
									src={item.preview}
									alt={`${item.title} banner`}
									width={1920}
									height={1080}
									quality={100}
								/>

								<motion.section
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
									<header>
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
									</header>

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
								</motion.section>
							</motion.article>
						))}
					</motion.div>
				</motion.div>

				<motion.button
					className={styles.carousel__btn}
					onClick={() => handleButtonClick("right")}
					title="Перелистнуть дальше"
					aria-label="Перелистнуть дальше"
					initial={false}
					animate={{ opacity: buttonsInView ? 1 : 0 }}
					transition={transition}
				>
					&gt;
				</motion.button>
			</div>

			<div className={styles.minimap}>
				{favorites.map((_, index) => (
					<button
						key={`Button ${index + 1}`}
						className={
							index === widget
								? `${styles["minimap__btn"]} ${styles["--active"]}`
								: styles["minimap__btn"]
						}
						onClick={() => setWidget(index)}
						title={`Перелистнуть к проекту №${index + 1}`}
						aria-label={`Перелистнуть к проекту №${index + 1}`}
					></button>
				))}
			</div>

			<p className={styles.clue}>
				Нажмите на баннер, чтобы узнать о проекте больше
			</p>
		</div>
	)
}
