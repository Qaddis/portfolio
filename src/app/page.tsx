import type { Metadata } from "next"
import MainPage from "./MainPage"

export const metadata: Metadata = {
	title: "Home | Portfolio by Qaddis",
	description:
		"Hi! I'm Qaddis, a front-end web developer. Check out my web development projects and skills on my portfolio site!",
	openGraph: {
		type: "website",
		title: "Portfolio by Qaddis",
		description:
			"Hi! I'm Qaddis, a front-end web developer. Check out my web development projects and skills on my portfolio site!",
		url: "https://qaddis.vercel.app/"
	}
}

export default function Main() {
	return <MainPage />
}
