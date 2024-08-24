"use client"

import { useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import styles from "./overlay.module.scss"

export default function Overlay() {
	const isTransition = useAppSelector(state => state.system.isTransition)
	const [isAnimate, setIsAnimate] = useState<boolean>(false)

	useEffect(() => {
		if (isTransition) {
			document.body.style.overflowY = "hidden"
			setIsAnimate(true)
		} else {
			setTimeout(() => {
				setIsAnimate(false)
				document.body.style.overflowY = "scroll"
			}, 550)
		}
	}, [isTransition])

	const blocks: number[] = [0, 0.1, 0.2, 0.3]

	return (
		<motion.div
			initial={false}
			animate={isTransition ? "show" : "hide"}
			style={{ display: isAnimate ? "grid" : "none" }}
			className={styles.overlay}
		>
			{blocks.map(item => (
				<motion.div
					key={item}
					variants={{
						hide: { y: "100%" },
						show: { y: 0 }
					}}
					transition={{ duration: 0.25, delay: item, ease: "easeInOut" }}
					className={styles.block}
				></motion.div>
			))}
		</motion.div>
	)
}
