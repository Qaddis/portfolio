import type { Metadata } from "next"
import SkillsPage from "./SkillsPage"

const description: string =
	"Hi! I'm Qaddis, a front-end web developer. On this page you can learn about the technologies I use."

export const metadata: Metadata = {
	title: "Skills",
	description: description,
	openGraph: {
		type: "website",
		title: "Skills | By Qaddis",
		description: description,
		url: "https://qaddis.vercel.app/skills"
	}
}

export default function Blog() {
	return <SkillsPage />
}
