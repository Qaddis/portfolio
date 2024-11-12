"use client"

import About from "@/components/Main/About"
import History from "@/components/Main/History"
import Landing from "@/components/Main/Landing"
import Heading from "@/components/ui/Heading"

export default function MainPage() {
	return (
		<section className="main-page">
			<Landing />

			<About />

			<Heading>Блог</Heading>

			<History />
		</section>
	)
}
