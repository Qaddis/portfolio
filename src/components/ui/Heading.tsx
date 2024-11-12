"use client"

import type { Transition } from "framer-motion"
import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"
import styles from "./heading.module.scss"

export default function Heading({ children }: PropsWithChildren) {
	const transition: Transition = {
		duration: 0.25,
		type: "spring",
		damping: 6,
		delay: 0.35
	}

	return (
		<motion.h2
			initial={{ y: "100%", opacity: 0 }}
			animate={{ y: "0", opacity: 1 }}
			transition={transition}
			className={styles.heading}
		>
			{children}
		</motion.h2>
	)
}
