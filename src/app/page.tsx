"use client"

import About from "@/components/About"
import Footer from "@/components/AppFooter"
import Header from "@/components/AppHeader"
import Contacts from "@/components/Contacts"
import Landing from "@/components/Landing"
import ProjectModal from "@/components/ProjectModal"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"

export type SectionsType = "about" | "skills" | "projects" | "contacts"
export type SetActiveType = Dispatch<SetStateAction<SectionsType>>
export type SetModalTargetType = Dispatch<SetStateAction<string>>

export default function Home() {
	const [active, setActive] = useState<SectionsType>("about")
	const [modalTarget, setModalTarget] = useState<string>("none")

	return (
		<>
			<Header active={active} />

			<main>
				<div className="wrapper">
					<Landing />

					<About setActive={setActive} />

					<Skills setActive={setActive} />

					<Projects setActive={setActive} setModalTarget={setModalTarget} />

					<Contacts setActive={setActive} />
				</div>
			</main>

			<ProjectModal target={modalTarget} setModalTarget={setModalTarget} />

			<Footer />
		</>
	)
}
