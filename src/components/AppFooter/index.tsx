import { type FC } from "react"
import { FaGithub, FaTelegramPlane } from "react-icons/fa"
import { SlSocialVkontakte } from "react-icons/sl"
import NavLink from "../UI/NavLink"
import classes from "./AppFooter.module.scss"

const Footer: FC = () => {
	return (
		<footer className={classes.footer}>
			<div className={`wrapper ${classes.wrapper}`}>
				<ul className={classes.socials}>
					<a
						className={classes.link}
						href="https://github.com/qaddis/"
						target="_blank"
					>
						<FaGithub size="60" color="var(--light)" />
					</a>
					<a
						className={classes.link}
						href="https://t.me/qaddis/"
						target="_blank"
					>
						<FaTelegramPlane size="60" color="var(--light)" />
					</a>
					<a
						className={classes.link}
						href="https://vk.com/qaddis/"
						target="_blank"
					>
						<SlSocialVkontakte size="60" color="var(--light)" />
					</a>
				</ul>

				<nav className={classes.nav}>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/contacts">Contacts</NavLink>
				</nav>
			</div>

			<p className={classes.copyright}>
				Made with ❤️ by <i>Qaddis</i>
			</p>
		</footer>
	)
}

export default Footer
