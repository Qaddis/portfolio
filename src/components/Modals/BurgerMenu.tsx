"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useAtom } from "jotai"

import NavLink from "@/components/ui/NavLink"
import { links } from "@/data"
import { burgerAtom } from "@/store/store"
import styles from "./burger.module.scss"

export default function BurgerMenu() {
	const [isBurgerVisible, setBurger] = useAtom(burgerAtom)

	const closeModal = () => {
		setBurger(false)
	}

	return (
		<AnimatePresence>
			{isBurgerVisible && (
				<motion.div
					initial="hidden"
					animate="show"
					exit="hidden"
					variants={{
						show: { opacity: 1 },
						hidden: { opacity: 0 }
					}}
					transition={{ duration: 0.15 }}
					onClick={closeModal}
					className={styles.overlay}
				>
					<button onClick={closeModal} className={styles["close-btn"]}>
						✕
					</button>

					<motion.nav
						variants={{
							show: { x: 0 },
							hidden: { x: "100%" }
						}}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						onClick={e => e.stopPropagation()}
						className={styles.burger}
					>
						{links.map((item, index) => (
							<NavLink key={item.to} href={item.to} tabIndex={index} isBurger>
								{item.text}
							</NavLink>
						))}
					</motion.nav>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
