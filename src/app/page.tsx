import { type NextPage } from "next"
import classes from "./home.module.scss"

const HomePage: NextPage = () => {
	return (
		<>
			<section className={classes.landing}>
				<div className={`wrapper ${classes.wrapper}`}>
					<span className={classes.first_tag}>section</span>
					<span className={`${classes.single_tag} ${classes.single_tab}`}>
						Heading <i>title</i>
						<em>=</em>
						<b>"Hello!"</b>
					</span>
					<div className={classes.space}></div>
					<span className={`${classes.first_tag} ${classes.single_tab}`}>
						p
					</span>
					<p className={`${classes.double_tab} ${classes.inner}`}>
						My name is Svyatoslav.
						<br />I am a full-stack web developer.
					</p>
					<span className={`${classes.close_tag} ${classes.single_tab}`}>
						p
					</span>
					<span className={classes.close_tag}>section</span>
				</div>
			</section>

			<section className={classes.about}></section>

			<section className={classes.skills}></section>
		</>
	)
}

export default HomePage
