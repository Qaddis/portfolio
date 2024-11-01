import { blog } from "@/data"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import styles from "./history.module.scss"

export default function History() {
	const historyRef = useRef<HTMLDivElement>(null)
	const historyInView = useInView(historyRef, { once: true, amount: 0.25 })

	return (
		<section ref={historyRef} className={styles.history}>
			<h3 className={styles.heading}>
				Как я стал <b>web разработчиком</b>?
			</h3>

			<div className={styles["history__container"]}>
				{blog.map((item, index) => (
					<motion.article
						initial={false}
						animate={historyInView ? "show" : "hide"}
						className={
							index % 2 === 0
								? styles["history__card"]
								: `${styles["history__card"]} ${styles["--right"]}`
						}
						key={index + 1}
					>
						<motion.h4
							variants={{
								hide: { scale: 0.3, opacity: 0 },
								show: { scale: 1, opacity: 1 }
							}}
							transition={{ duration: 0.35, delay: index / 2 }}
						>
							<motion.span
								initial={{ y: "-15%" }}
								animate={{ y: "15%" }}
								transition={{
									duration: 1,
									repeat: Infinity,
									repeatType: "reverse",
									ease: "easeInOut",
									delay: (index + 1) / 4
								}}
							>
								{index + 1}
							</motion.span>
						</motion.h4>

						<motion.p
							variants={{
								hide: { y: "25%", opacity: 0 },
								show: { y: 0, opacity: 1 }
							}}
							transition={{
								duration: 0.25,
								ease: "easeIn",
								delay: 0.175 + index / 2
							}}
							dangerouslySetInnerHTML={{ __html: item }}
						/>
					</motion.article>
				))}
			</div>
		</section>
	)
}
