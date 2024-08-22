"use client"

import Footer from "@/components/AppFooter"
import Button from "@/components/ui/Button"
import { useRouter } from "next/navigation"
import styles from "./blog.module.scss"

export default function Blog() {
	const router = useRouter()

	const logoClick = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}

	return (
		<section className={styles.blog}>
			<header className={styles.header}>
				<div className={styles.wrapper}>
					<button onClick={logoClick} className={styles.logo}>
						<h1>Qaddis</h1>
					</button>

					<Button onClick={() => router.push("/")} title="Вернуться на главную">
						Вернуться
					</Button>
				</div>
			</header>

			<div className={styles.wrapper}></div>

			<Footer />
		</section>
	)
}
