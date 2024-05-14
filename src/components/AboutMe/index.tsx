"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { type FC } from "react"
import classes from "./About.module.scss"

const About: FC = () => {
	return (
		<section className={classes.about}>
			<div className={`wrapper ${classes.wrapper}`}>
				<div className={classes.info}>
					<motion.h2
						initial={{ translateY: "200%" }}
						whileInView={{ translateY: 0 }}
						transition={{
							delay: 0.12,
							duration: 0.35,
							type: "spring",
							damping: 6
						}}
						className={classes.heading}
					>
						Too <span>young</span>, but <span>ambitious</span>
					</motion.h2>

					<motion.p
						initial={{ translateY: "100%" }}
						whileInView={{ translateY: 0 }}
						transition={{
							delay: 0.12,
							duration: 0.35,
							type: "spring",
							damping: 6
						}}
						className={classes.description}
					>
						At just 17, I possess a diverse skill set in developing
						contemporary, user-friendly websites and web applications. My
						passion for staying abreast of the latest trends drives me to
						continuously innovate and deliver compelling projects.
					</motion.p>
				</div>

				<motion.div
					initial={{ rotateZ: 135, scale: 0.6 }}
					whileInView={{ rotateZ: 0, scale: 1 }}
					transition={{
						damping: 8,
						delay: 0.12,
						duration: 0.35,
						type: "spring"
					}}
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
							delay: 0.2,
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
