"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef, type FC } from "react"
import classes from "./About.module.scss"

type TypeTransition = {
	delay: number
	duration: number
	type: string
	damping: number
}

const About: FC = () => {
	const transition: TypeTransition = {
		delay: 0.12,
		duration: 0.35,
		type: "spring",
		damping: 8
	}

	const infoRef = useRef(null)
	const imageRef = useRef(null)

	const infoInView = useInView(infoRef, { once: true, amount: 0.42 })
	const imageInView = useInView(imageRef, { once: true, amount: 0.42 })

	return (
		<section className={classes.about}>
			<div className={`wrapper ${classes.wrapper}`}>
				<div ref={infoRef} className={classes.info}>
					<motion.h2
						animate={{ translateY: infoInView ? 0 : "150%" }}
						transition={transition}
						className={classes.heading}
					>
						Too <span>young</span>, but <span>ambitious</span>
					</motion.h2>

					<motion.p
						animate={{ translateY: infoInView ? 0 : "100%" }}
						transition={transition}
						className={classes.description}
					>
						At just 17, I possess a diverse skill set in developing
						contemporary, user-friendly websites and web applications. My
						passion for staying abreast of the latest trends drives me to
						continuously innovate and deliver compelling projects.
					</motion.p>
				</div>

				<motion.div
					ref={imageRef}
					animate={
						imageInView
							? { rotateZ: 0, scale: 1 }
							: { rotateZ: 135, scale: 0.6 }
					}
					transition={transition}
					className={classes.portrait}
				>
					<Image
						className={classes.image}
						src="/face.jpg"
						alt="Portrait"
						width={320}
						height={320}
					/>

					<motion.div
						style={{ zIndex: 1, opacity: 0.6 }}
						initial={{ translateX: "3%" }}
						animate={{ translateX: "-3%" }}
						transition={{
							duration: 0.85,
							delay: 0.2,
							repeat: Infinity,
							ease: "easeInOut",
							repeatType: "mirror"
						}}
						className={classes.back_layer}
					></motion.div>

					<motion.div
						style={{ zIndex: 2 }}
						initial={{ translateY: "-3%" }}
						animate={{ translateY: "3%" }}
						transition={{
							duration: 0.85,
							repeat: Infinity,
							ease: "easeInOut",
							repeatType: "mirror"
						}}
						className={classes.back_layer}
					></motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default About
