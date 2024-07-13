"use client"

import type { SetModalTargetType } from "@/app/page"
import type { IProject } from "@/data"
import { projects } from "@/data"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./modal.module.scss"

interface IProps {
	target: string
	setModalTarget: SetModalTargetType
}

export default function ProjectModal({ target, setModalTarget }: IProps) {
	const [isActive, setIsActive] = useState<boolean>(false)
	const [project, setProject] = useState<IProject>()

	useEffect(() => {
		const data = projects.find(item => item.title === target)

		if (data) {
			setIsActive(true)
			setProject(data)
			document.body.style.overflowY = "hidden"
		} else {
			setIsActive(false)
			document.body.style.overflowY = "scroll"
		}
	}, [target])

	const closeModal = (): void => {
		setModalTarget("none")
	}

	return (
		<AnimatePresence>
			{isActive && (
				<motion.div
					initial="hidden"
					animate="show"
					exit="hidden"
					variants={{
						show: { opacity: 1 },
						hidden: { opacity: 0 }
					}}
					transition={{ delay: target !== "none" ? 0 : 0.25, duration: 0.15 }}
					className={styles.overlay}
					onClick={closeModal}
				>
					<motion.section
						variants={{
							show: { scaleY: 1 },
							hidden: { scaleY: 0 }
						}}
						transition={{ delay: target !== "none" ? 0.2 : 0, duration: 0.2 }}
						className={styles.modal}
						onClick={e => e.stopPropagation()}
					>
						<Image
							className={styles.image}
							src={project!.img}
							alt={`${project!.title} Banner`}
							width={900}
							height={535}
						/>

						<div className={styles["tech-sect"]}>
							<h3>Технологии:</h3>
							<ul className={styles["tech-list"]}>
								{project?.techs.map((item, index) => (
									<li key={index}>
										<span>{index + 1}.</span> {item}
									</li>
								))}
							</ul>
						</div>

						<div className={styles["info-sect"]}>
							<h3>{project?.title}</h3>
							<p>{project?.description}</p>
						</div>

						<div className={styles["links-sect"]}>
							<a
								target="_blank"
								href={`https://github.com/Qaddis/${project?.repo}`}
							>
								<svg>
									<use xlinkHref="#github-logo"></use>
								</svg>
								Репозиторий
							</a>
						</div>
					</motion.section>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
