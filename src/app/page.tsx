import Landing from "@/components/Landing"
import { type NextPage } from "next"
import classes from "./home.module.scss"

const HomePage: NextPage = () => {
	return (
		<>
			<Landing />

			<section className={classes.about}></section>

			<section className={classes.skills}></section>
		</>
	)
}

export default HomePage
