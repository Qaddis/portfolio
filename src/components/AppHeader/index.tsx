import NavLink from "../ui/NavLink"
import styles from "./header.module.scss"

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<h1 className={styles.logo}>Qaddis</h1>

				<nav className={styles.nav}>
					<NavLink to="about" active="about">
						Обо мне
					</NavLink>
					<NavLink to="skills" active="about">
						Навыки
					</NavLink>
					<NavLink to="projects" active="about">
						Проекты
					</NavLink>
					<NavLink to="contacts" active="about">
						Контакты
					</NavLink>
				</nav>
			</div>
		</header>
	)
}
