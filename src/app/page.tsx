import About from "@/components/AboutMe"
import Landing from "@/components/Landing"
import { type NextPage } from "next"
import classes from "./home.module.scss"

const HomePage: NextPage = () => {
	return (
		<>
			<Landing />

			<About />

			<section className={classes.skills}></section>
		</>
	)
}

export default HomePage
