import styles from "./footer.module.scss"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<ul className={styles.socials}>
					<li>
						<a
							title="Мой профиль в ВКонтакте"
							href="https://vk.com/qaddis"
							target="_blank"
						>
							<svg>
								<use xlinkHref="#vk-logo"></use>
							</svg>
						</a>
					</li>
					<li>
						<a
							title="Мой профиль в Telegram"
							href="https://t.me/qaddis"
							target="_blank"
						>
							<svg>
								<use xlinkHref="#telegram-logo"></use>
							</svg>
						</a>
					</li>
					<li>
						<a
							title="Репозиторий проекта на Github"
							href="https://github.com/Qaddis/portfolio"
							target="_blank"
						>
							<svg>
								<use xlinkHref="#github-logo"></use>
							</svg>
						</a>
					</li>
				</ul>
				<p className={styles.copyright}>© 2024 Святослав "Qaddis" Барсуков</p>
			</div>
		</footer>
	)
}
