"use client"

import About from "@/components/About"
import Footer from "@/components/AppFooter"
import Header from "@/components/AppHeader"
import Landing from "@/components/Landing"

import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"

export type SectionsType = "about" | "skills" | "projects" | "contacts"
export type SetSActiveType = Dispatch<SetStateAction<SectionsType>>

export default function Home() {
	const [active, setActive] = useState<SectionsType>("about")

	return (
		<>
			<Header active={active} />

			<main>
				<Landing />

				<About setActive={setActive} />
			</main>

			<Footer />
		</>
	)
}
