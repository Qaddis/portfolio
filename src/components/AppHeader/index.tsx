"use client"

import type { SectionsType } from "@/app/page"
import NavLink from "../ui/NavLink"
import styles from "./header.module.scss"

interface IProps {
	active: SectionsType
}

export default function Header({ active }: IProps) {
	const logoClick = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<h1 onClick={logoClick} className={styles.logo}>
					Qaddis
				</h1>

				<nav className={styles.nav}>
					<NavLink to="about" active={active}>
						Обо мне
					</NavLink>
					<NavLink to="skills" active={active}>
						Навыки
					</NavLink>
					<NavLink to="projects" active={active}>
						Проекты
					</NavLink>
					<NavLink to="contacts" active={active}>
						Контакты
					</NavLink>
				</nav>
			</div>
		</header>
	)
}
