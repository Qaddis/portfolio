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
					<h2></h2>
				</div>

				<div className={classes.portrait}>
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
							ease: "easeInOut",
							repeat: Infinity,
							repeatType: "mirror"
						}}
						className={classes.back_layer}
					></motion.div>
				</div>
			</div>
		</section>
	)
}

export default About
