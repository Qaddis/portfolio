"use client"

import dynamic from "next/dynamic"

import Landing from "@/components/pages/MainPage/LandingSect"
import Heading from "@/components/ui/Heading"

const About = dynamic(() => import("../../components/pages/MainPage/AboutSect"))
const History = dynamic(
	() => import("../../components/pages/MainPage/HistorySect")
)

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
