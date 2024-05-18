"use client"

import { skills } from "@/skills"
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

				<ul className={classes.skills_list}>
					{skills.map(item => (
						<motion.li
							className={classes.item}
							key={item.title}
							initial={{
								rotateX: 90
							}}
							whileInView={{
								rotateX: 0
							}}
							animate="out"
							whileHover="over"
							transition={{
								duration: 0.2,
								delay: item.delay
							}}
						>
							<h3 className={classes.list_heading}>{item.title}</h3>
							<motion.img
								variants={{
									over: {
										filter: `drop-shadow(0 0 10px ${item.color})`
									},
									out: {
										filter: `drop-shadow(0 0 0 ${item.color})`
									}
								}}
								src={item.icon}
								alt={`${item.title} Logo`}
							/>
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Skills
