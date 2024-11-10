"use client"

import { motion, type PanInfo } from "framer-motion"
import { useState } from "react"
import styles from "./carousel.module.scss"

interface IProps {
	images: string[]
}

export default function Carousel({ images }: IProps) {
	const [widget, setWidget] = useState<number>(0)
	const [dragStart, setDragStart] = useState<number>(0)

	const handleButtonClick = (direction: "left" | "right"): void => {
		if (direction === "left") {
			if (widget - 1 < 0) setWidget(images.length - 1)
			else setWidget(widget - 1)
		} else {
			if (widget + 1 > images.length - 1) setWidget(0)
			else setWidget(widget + 1)
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
		const dragDistance = dragStart - info.point.x
		const threshold = 50

		if (Math.abs(dragDistance) > threshold) {
			if (dragDistance > 0 && widget + 1 <= images.length - 1)
				handleButtonClick("right")
			else if (dragDistance < 0 && widget - 1 >= 0) handleButtonClick("left")
		}

		setDragStart(0)
	}

	return (
		<section className={styles["carousel-section"]}>
			<div className={styles.carousel}>
				<button
					onClick={() => handleButtonClick("left")}
					className={styles.carousel__btn}
				>
					&lt;
				</button>

				<div className={styles.window}>
					<motion.div
						className={styles.cards}
						initial={false}
						animate={{ x: `-${widget * 100}%` }}
						transition={{ duration: 0.25 }}
					>
						{images.map((img, index) => (
							<motion.img
								key={`Image ${index + 1}`}
								className={styles.carousel__card}
								src={img}
								alt={`Image №${index + 1}`}
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0.2}
								onDragStart={handleDragStart}
								onDragEnd={handleDragEnd}
							/>
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

			<div className={styles.minimap}>
				{images.map((_, index) => (
					<button
						className={
							index === widget
								? `${styles["minimap__btn"]} ${styles["--active"]}`
								: styles["minimap__btn"]
						}
						onClick={() => setWidget(index)}
						key={`Button ${index + 1}`}
					></button>
				))}
			</div>
		</section>
	)
}
