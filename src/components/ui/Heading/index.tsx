"use client"

import type { Transition, Variants } from "framer-motion"
import { motion, useInView } from "framer-motion"
import type { PropsWithChildren } from "react"
import { useRef } from "react"
import styles from "./heading.module.scss"

export default function Heading({ children }: PropsWithChildren) {
	const variants: Variants = {
		show: { y: 0, opacity: 1 },
		hidden: { y: "100%", opacity: 0 }
	}

	const transition: Transition = {
		duration: 0.25,
		type: "spring",
		damping: 6
	}

	const headingRef = useRef<HTMLHeadingElement>(null)
	const headingInView = useInView(headingRef, {
		margin: "10px 0px 0px 0px",
		once: true
	})

	return (
		<motion.h2
			initial={false}
			animate={headingInView ? "show" : "hidden"}
			variants={variants}
			transition={transition}
			ref={headingRef}
			className={styles.heading}
		>
			{children}
		</motion.h2>
	)
}
