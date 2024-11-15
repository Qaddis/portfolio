import styles from "./footer.module.scss"

interface IFooterLink {
	title: string
	href: string
	svg: string
}

export default function Footer() {
	const footerLinks: IFooterLink[] = [
		{
			title: "Перейти в мой профиль в ВКонтакте",
			href: "https://vk.com/qaddis",
			svg: "#vk-logo"
		},
		{
			title: "Перейти в мой профиль в Telegram",
			href: "https://t.me/qaddis",
			svg: "#telegram-logo"
		},
		{
			title: "Перейти в мой профиль на Github",
			href: "https://github.com/Qaddis",
			svg: "#github-logo"
		}
	]

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<ul className={styles.socials}>
					{footerLinks.map(item => (
						<li key={item.svg}>
							<a
								href={item.href}
								target="_blank"
								title={item.title}
								aria-label={item.title}
								rel="noopener noreferrer"
							>
								<svg>
									<use xlinkHref={item.svg}></use>
								</svg>
							</a>
						</li>
					))}
				</ul>

				<p className={styles.copyright}>© 2024 Святослав "Qaddis" Барсуков</p>
			</div>
		</footer>
	)
}
