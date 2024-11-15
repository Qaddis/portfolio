"use client"

import About from "@/components/MainPage/About"
import History from "@/components/MainPage/History"
import Landing from "@/components/MainPage/Landing"
import Heading from "@/components/ui/Heading"

export default function MainPage() {
	return (
		<div className="main-page">
			<Landing />

			<About />

			<Heading>Блог</Heading>

			<History />
		</div>
	)
}
