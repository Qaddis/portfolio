"use client"

import NavButton from "@/components/ui/NavButton"
import { motion, type Transition } from "framer-motion"

export default function NotFoundPage() {
	const transition: Transition = {
		duration: 2,
		repeat: Infinity,
		ease: "easeInOut"
	}

	return (
		<section className="not-found">
			<motion.h1
				initial={{ scale: 1, color: "var(--spec)" }}
				animate={{
					scale: [1, 1.2, 1],
					color: ["var(--spec)", "var(--violet)", "var(--spec)"]
				}}
				transition={transition}
			>
				Упс... Ошибка 404
			</motion.h1>
			<p>
				Страница не найдена <b>┐(‘～` )┌</b>
			</p>

			<NavButton href="/" title="Перейти на главную страницу">
				На главную!
			</NavButton>
		</section>
	)
}
