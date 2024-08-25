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

			<Footer />
		</>
	)
}
