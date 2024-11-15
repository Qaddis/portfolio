"use client"

import { motion } from "framer-motion"
import { useAtom } from "jotai"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { isTransitionAtom } from "@/store/store"
import styles from "./overlay.module.scss"

export default function Overlay() {
	const [isTransition, setTransition] = useAtom(isTransitionAtom)
	const [isAnimate, setIsAnimate] = useState<boolean>(false)
	const path = usePathname()

	const blocks: string[] = ["w", "a", "i", "t"]

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

	useEffect(() => {
		setTransition(false)
	}, [path])

	const [isMobile, setIsMobile] = useState<boolean>(false)

	useEffect(() => {
		if (window.screen.width <= 768) setIsMobile(true)
	})

	return (
		<motion.div
			className={
				isMobile ? `${styles.overlay} ${styles.mobile}` : styles.overlay
			}
			style={{ display: isAnimate ? "grid" : "none" }}
			initial={false}
			animate={isTransition ? "show" : "hide"}
		>
			{blocks.map((item, index) => (
				<motion.div
					key={index}
					className={styles.block}
					variants={
						isMobile
							? {
									hide:
										index % 2 === 0
											? { x: "-100%", y: 0 }
											: { x: "100%", y: 0 },
									show: { x: 0, y: 0 }
							  }
							: {
									hide: { y: "100%", x: 0 },
									show: { y: 0, x: 0 }
							  }
					}
					transition={{ duration: 0.25, delay: index / 10, ease: "easeInOut" }}
				>
					{item}
				</motion.div>
			))}
		</motion.div>
	)
}
