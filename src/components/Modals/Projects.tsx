"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useAtom } from "jotai"
import Image from "next/image"
import { useEffect, useState } from "react"

import type { IProject } from "@/constants/data"
import { projects } from "@/constants/data"
import { projectAtom } from "@/store/store"
import styles from "./modal.module.scss"

export default function ProjectModal() {
	const [target, setProjectTarget] = useAtom(projectAtom)
	const [project, setProject] = useState<IProject>()

	useEffect(() => {
		const data = projects.find(item => item.title === target)

		if (data) {
			setProject(data)
			document.body.style.overflowY = "hidden"
		} else {
			setProject(undefined)
			document.body.style.overflowY = "scroll"
		}
	}, [target])

	const closeModal = (): void => {
		setProjectTarget("none")
	}

	return (
		<AnimatePresence>
			{project != undefined && (
				<motion.section
					initial="hidden"
					animate="show"
					exit="hidden"
					variants={{
						show: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 }
					}}
					transition={{ duration: 0.35 }}
					className={styles.modal}
				>
					<button
						title="Вернуться назад"
						onClick={closeModal}
						className={styles["close-btn"]}
					>
						✕
					</button>

					<div className={styles.wrapper}>
						<div className={styles.row}>
							<Image
								className={styles.image}
								src={project!.img}
								alt={`${project!.title} Banner`}
								width={900}
								height={535}
								quality={100}
							/>

							<div className={styles["info-sect"]}>
								<h3>Технологии:</h3>
								<ul className={styles["tech-list"]}>
									{project?.techs.map((item, index) => (
										<li key={index}>
											<span>{index + 1}.</span> {item}
										</li>
									))}
								</ul>

								<a
									title="Перейти в репозиторий проекта"
									className={styles.link}
									tabIndex={0}
									target="_blank"
									href={`https://github.com/Qaddis/${project?.repo}`}
								>
									<svg>
										<use xlinkHref="#github-logo"></use>
									</svg>
									Репозиторий
								</a>
							</div>
						</div>

						<div className={styles["about-sect"]}>
							<h3>{project?.title}</h3>
							<p>{project?.description}</p>
						</div>

						<div className={styles.mobile}>
							<h3>Технологии</h3>

							<ul>
								{project?.techs.map((item, index) => (
									<li key={index}>
										<span>{index + 1}.</span> {item}
									</li>
								))}
							</ul>

							<a
								title="Перейти в репозиторий проекта"
								className={styles.link}
								tabIndex={0}
								target="_blank"
								href={`https://github.com/Qaddis/${project?.repo}`}
							>
								<svg>
									<use xlinkHref="#github-logo"></use>
								</svg>
								Репозиторий
							</a>
						</div>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	)
}
