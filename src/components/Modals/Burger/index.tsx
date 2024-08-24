"use client"

import type { SectionsType, SetBurgerType } from "@/app/MainPage"
import NavLink from "@/components/ui/NavLink"
import { links } from "@/data"
import { AnimatePresence, motion } from "framer-motion"
import styles from "./burger.module.scss"

interface IProps {
	active: SectionsType
	isBurgerVisible: boolean
	setBurgerVisible: SetBurgerType
}

export default function BurgerMenu({
	active,
	isBurgerVisible,
	setBurgerVisible
}: IProps) {
	const closeModal = () => {
		setBurgerVisible(false)
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
							<NavLink
								key={item.to}
								to={item.to}
								active={active}
								setBurgerVisible={setBurgerVisible}
								tabIndex={index}
							>
								{item.text}
							</NavLink>
						))}
					</motion.nav>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
