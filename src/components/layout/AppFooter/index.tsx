import { footerLinks } from "@/data/footer.data"

import styles from "./AppFooter.module.scss"

export default function Footer() {
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

				<p className={styles.copyright}>© 2025 Святослав "Qaddis" Барсуков</p>
			</div>
		</footer>
	)
}
