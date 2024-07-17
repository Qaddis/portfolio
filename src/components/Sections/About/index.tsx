"use client"

import type { SetActiveType } from "@/app/page"
import type { Transition } from "framer-motion"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"

import styles from "./about.module.scss"
import img from "/public/face.jpg"

interface IProps {
	setActive: SetActiveType
}

export default function About({ setActive }: IProps) {
	const transition: Transition = {
		delay: 0.12,
		duration: 0.35,
		type: "spring",
		damping: 8
	}

	const layerTransition: Transition = {
		duration: 0.85,
		repeat: Infinity,
		ease: "easeInOut",
		repeatType: "mirror"
	}

	const imageRef = useRef<HTMLDivElement>(null)
	const infoRef = useRef<HTMLDivElement>(null)

	const imageInView = useInView(imageRef, { once: true, amount: 0.45 })
	const infoInView = useInView(infoRef, { once: true, amount: 0.45 })

	const aboutRef = useRef<HTMLDivElement>(null)
	const aboutInView = useInView(aboutRef, { once: false, amount: 1 })

	useEffect(() => {
		if (aboutInView) setActive("about")
	}, [aboutInView])

	return (
		<section id="about" ref={aboutRef} className={styles.about}>
			<div ref={infoRef} className={styles.info}>
				<motion.h2
					initial={false}
					animate={
						infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }
					}
					transition={transition}
					className={styles.heading}
				>
					<span>Молодой</span>, но <span>амбициозный</span>.
				</motion.h2>

				<motion.p
					initial={false}
					animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "50%" }}
					transition={transition}
					className={styles.description}
				>
					В свои 17 лет я обладаю набором разнообразных навыков для создания
					современных, удобных для пользователя веб сайтов и веб приложений. Моя
					страсть быть в тренде заставляет меня постоянно изучать что-то новое и
					создавать более сложные и интересные проекты.
				</motion.p>
			</div>

			<motion.div
				initial={false}
				animate={
					imageInView ? { rotateZ: 0, scale: 1 } : { rotateZ: 135, scale: 0.6 }
				}
				transition={transition}
				ref={imageRef}
				className={styles.portrait}
			>
				<Image
					src={img}
					alt="Portrait"
					quality={100}
					priority
					className={styles.image}
				/>

				<motion.div
					style={{ zIndex: 1 }}
					initial={{ x: "3%" }}
					animate={{ x: "-3%" }}
					transition={{ ...layerTransition, delay: 0.2 }}
					className={styles.back_layer}
				/>

				<motion.div
					initial={{ y: "-3%" }}
					animate={{ y: "3%" }}
					transition={layerTransition}
					style={{ zIndex: 2 }}
					className={styles.back_layer}
				/>
			</motion.div>
		</section>
	)
}
