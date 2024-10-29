"use client"

import { useSystemStore } from "@/stores/systemStore"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./overlay.module.scss"

export default function Overlay() {
	const isTransition = useSystemStore(state => state.isTransition)
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

	const path = usePathname()
	const setTransition = useSystemStore(state => state.setTransition)

	useEffect(() => {
		setTransition(false)
	}, [path])

	const blocks: string[] = ["w", "a", "i", "t"]

	return (
		<motion.div
			initial={false}
			animate={isTransition ? "show" : "hide"}
			style={{ display: isAnimate ? "grid" : "none" }}
			className={styles.overlay}
		>
			{blocks.map((item, index) => (
				<motion.div
					key={index}
					variants={{
						hide: { y: "100%" },
						show: { y: 0 }
					}}
					transition={{ duration: 0.25, delay: index / 10, ease: "easeInOut" }}
					className={styles.block}
				>
					{item}
				</motion.div>
			))}
		</motion.div>
	)
}
