"use client"

import About from "@/components/Main/About"
import Contacts from "@/components/Main/Contacts"
import Header from "@/components/Main/Header"
import Landing from "@/components/Main/Landing"
import Projects from "@/components/Main/Projects"
import Skills from "@/components/Main/Skills"
import BurgerMenu from "@/components/Modals/BurgerMenu"
import ProjectModal from "@/components/Modals/Projects"

export default function MainPage() {
	return (
		<>
			<Header />

			<BurgerMenu />

			<main>
				<div className="wrapper">
					<Landing />

					<About />

					<Skills />

					<Projects />

					<ProjectModal />

					<Contacts />
				</div>
			</main>
		</>
	)
}
