"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type FC } from "react"
import classes from "./Skills.module.scss"

type TypeTransition = {
	duration: number
	type: string
	damping: number
}

const Skills: FC = () => {
	const transition: TypeTransition = {
		duration: 0.35,
		type: "spring",
		damping: 10
	}

	const titleRef = useRef(null)
	const titleInView = useInView(titleRef, { once: true, amount: 1 })

	return (
		<section className={classes.skills}>
			<div className={`wrapper ${classes.wrapper}`}>
				<h2 ref={titleRef} className={classes.heading}>
					<motion.span
						animate={{ y: titleInView ? 0 : "100%" }}
						transition={{ ...transition, delay: 0.12 }}
					>
						S
					</motion.span>
					<motion.span
						animate={{ y: titleInView ? 0 : "100%" }}
						transition={{ ...transition, delay: 0.17 }}
					>
						k
					</motion.span>
					<motion.span
						animate={{ y: titleInView ? 0 : "100%" }}
						transition={{ ...transition, delay: 0.22 }}
					>
						i
					</motion.span>
					<motion.span
						animate={{ y: titleInView ? 0 : "100%" }}
						transition={{ ...transition, delay: 0.27 }}
					>
						l
					</motion.span>
					<motion.span
						animate={{ y: titleInView ? 0 : "100%" }}
						transition={{ ...transition, delay: 0.32 }}
					>
						l
					</motion.span>
					<motion.span
						animate={{ y: titleInView ? 0 : "100%" }}
						transition={{ ...transition, delay: 0.37 }}
					>
						s
					</motion.span>
				</h2>
			</div>
		</section>
	)
}

export default Skills
