"use client"

import About from "@/components/About"
import Footer from "@/components/AppFooter"
import Header from "@/components/AppHeader"
import Landing from "@/components/Landing"
import Skills from "@/components/Skills"

import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"

export type SectionsType = "about" | "skills" | "projects" | "contacts"
export type SetActiveType = Dispatch<SetStateAction<SectionsType>>

export default function Home() {
	const [active, setActive] = useState<SectionsType>("about")

	return (
		<>
			<Header active={active} />

			<main>
				<div className="wrapper">
					<Landing />

					<About setActive={setActive} />

					<Skills setActive={setActive} />
				</div>
			</main>

			<Footer />
		</>
	)
}
