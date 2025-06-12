"use client"

import type { Transition } from "framer-motion"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

import { PagesEnum } from "@/constants/navigation"
import NavButton from "../ui/NavButton"
import styles from "./about.module.scss"
import img from "/public/face.webp"

export default function About() {
	const transition: Transition = {
		delay: 0.12,
		duration: 0.35,
		type: "spring"
	}

	const imageRef = useRef<HTMLDivElement>(null)
	const infoRef = useRef<HTMLDivElement>(null)

	const imageInView = useInView(imageRef, { once: true, amount: 0.45 })
	const infoInView = useInView(infoRef, { once: true, amount: 0.15 })

	return (
		<section className={styles.about}>
			<motion.div
				ref={infoRef}
				className={styles.info}
				initial={false}
				animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "50%" }}
				transition={{ ...transition, damping: 10 }}
			>
				<h2 className={styles.heading}>
					<span>Молодой</span>, но <span>амбициозный</span>.
				</h2>

				<p>
					В свои 18 лет я обладаю набором разнообразных навыков для создания
					современных, удобных для пользователя веб сайтов и веб приложений. Моя
					страсть быть в тренде заставляет меня постоянно изучать что-то новое и
					создавать более сложные и интересные проекты.
				</p>

				<nav className={styles["buttons-wrapper"]}>
					<NavButton
						href={PagesEnum.SKILLS}
						title='Перейти на страницу "Навыки"'
						aria-label='Перейти на страницу "Навыки"'
					>
						Навыки
					</NavButton>

					<NavButton
						href={PagesEnum.PROJECTS}
						title='Перейти на страницу "Проекты"'
						aria-label='Перейти на страницу "Проекты"'
					>
						Проекты
					</NavButton>

					<NavButton
						className={styles["with-icon"]}
						href={PagesEnum.CONTACTS}
						title='Перейти на страницу "Контакты"'
						aria-label='Перейти на страницу "Контакты"'
					>
						<svg fill="var(--light)">
							<use xlinkHref="#contacts-logo"></use>
						</svg>
					</NavButton>

					<NavButton
						className={styles["for-mobile"]}
						href={PagesEnum.CONTACTS}
						title='Перейти на страницу "Контакты"'
						aria-label='Перейти на страницу "Контакты"'
					>
						Контакты
					</NavButton>
				</nav>
			</motion.div>

			<motion.div
				ref={imageRef}
				className={styles.portrait}
				initial={false}
				animate={
					imageInView ? { rotateZ: 0, scale: 1 } : { rotateZ: 135, scale: 0.6 }
				}
				transition={{ ...transition, damping: 5 }}
			>
				<Image
					className={styles.image}
					src={img}
					alt="Portrait"
					quality={100}
					priority
				/>

				<div className={styles.back_layer}></div>

				<div className={styles.back_layer}></div>
			</motion.div>
		</section>
	)
}
