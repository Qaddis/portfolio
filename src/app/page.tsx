import About from "@/components/AboutMe"
import Landing from "@/components/Landing"
import Skills from "@/components/Skills"
import { type NextPage } from "next"
import classes from "./home.module.scss"

const HomePage: NextPage = () => {
	return (
		<>
			<Landing />

			<About />

			<Skills />

			<section className={classes.projects}></section>
		</>
	)
}

export default HomePage
