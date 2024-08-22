"use client"

import Button from "@/components/ui/Button"
import { motion, type Transition } from "framer-motion"
import { useRouter } from "next/navigation"

export default function NotFoundPage() {
	const router = useRouter()

	const handleClick = (): void => {
		router.replace("/")
	}

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
				<br />
				Более того - тут всего одна{" "}
				<span title="Перейти на главную страницу" onClick={handleClick}>
					страница
				</span>
				!
			</p>

			<Button title="Перейти на главную страницу" onClick={handleClick}>
				На главную!
			</Button>
		</section>
	)
}
