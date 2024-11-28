"use client"

import dynamic from "next/dynamic"

import Landing from "@/components/MainPage/Landing"
import Heading from "@/components/ui/Heading"

const About = dynamic(() => import("@/components/MainPage/About"))
const History = dynamic(() => import("@/components/MainPage/History"))

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
