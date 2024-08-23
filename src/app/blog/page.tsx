import type { Metadata } from "next"
import BlogPage from "./BlogPage"

export const metadata: Metadata = {
	description:
		"Hi! I'm Qaddis, a full-stack web developer. If you want to know more about me and my journey as a web developer, then welcome to my blog page!",
	title: "Blog",
	openGraph: {
		type: "website",
		title: "Blog | By Qaddis",
		description:
			"Hi! I'm Qaddis, a full-stack web developer. If you want to know more about me and my journey as a web developer, then welcome to my blog page!",
		url: "https://qaddis.vercel.app/blog"
	}
}

export default function Blog() {
	return <BlogPage />
}
