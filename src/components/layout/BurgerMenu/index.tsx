"use client"

import { useAtom } from "jotai"
import { AnimatePresence, motion } from "motion/react"

import NavLink from "@/components/ui/NavLink"
import { links } from "@/constants/navigation.constants"
import { burgerAtom } from "@/stores/burgerState.store"

import styles from "./Burger.module.scss"

export default function BurgerMenu() {
	const [isBurgerVisible, setBurger] = useAtom(burgerAtom)

	const closeModal = () => setBurger(false)

	return (
		<AnimatePresence>
			{isBurgerVisible && (
				<motion.div
					className={styles.overlay}
					onClick={closeModal}
					initial="hidden"
					animate="show"
					exit="hidden"
					variants={{
						show: { opacity: 1 },
						hidden: { opacity: 0 }
					}}
					transition={{ duration: 0.15 }}
				>
					<button
						onClick={closeModal}
						className={styles["close-btn"]}
						title="Закрыть меню"
						aria-label="Закрыть меню"
					>
						✕
					</button>

					<motion.nav
						className={styles.burger}
						onClick={e => e.stopPropagation()}
						variants={{
							show: { x: 0 },
							hidden: { x: "100%" }
						}}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						{links.map(item => (
							<NavLink key={item.to} href={item.to} isBurger>
								{item.text}
							</NavLink>
						))}
					</motion.nav>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
