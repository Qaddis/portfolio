"use client"

import Footer from "@/components/AppFooter"
import Header from "@/components/AppHeader"
import BurgerMenu from "@/components/Modals/Burger"
import ProjectModal from "@/components/Modals/Project"
import About from "@/components/Sections/About"
import Contacts from "@/components/Sections/Contacts"
import Landing from "@/components/Sections/Landing"
import Projects from "@/components/Sections/Projects"
import Skills from "@/components/Sections/Skills"

import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"

export type SectionsType = "about" | "skills" | "projects" | "contacts"
export type SetActiveType = Dispatch<SetStateAction<SectionsType>>
export type SetModalTargetType = Dispatch<SetStateAction<string>>
export type SetBurgerType = Dispatch<SetStateAction<boolean>>

export default function Home() {
	const [active, setActive] = useState<SectionsType>("about")
	const [modalTarget, setModalTarget] = useState<string>("none")
	const [isBurgerVisible, setBurgerVisible] = useState<boolean>(false)

	return (
		<>
			<Header active={active} setBurgerVisible={setBurgerVisible} />

			<BurgerMenu
				active={active}
				isBurgerVisible={isBurgerVisible}
				setBurgerVisible={setBurgerVisible}
			/>

			<main>
				<div className="wrapper">
					<Landing />

					<About setActive={setActive} />

					<Skills setActive={setActive} />

					<Projects setActive={setActive} setModalTarget={setModalTarget} />

					<ProjectModal target={modalTarget} setModalTarget={setModalTarget} />

					<Contacts setActive={setActive} />
				</div>
			</main>

			<Footer />
		</>
	)
}
