"use client"

import About from "@/components/Main/About"
import Contacts from "@/components/Main/Contacts"
import Landing from "@/components/Main/Landing"
import Projects from "@/components/Main/Projects"
import Skills from "@/components/Main/Skills"
import ProjectModal from "@/components/Modals/Projects"

export default function MainPage() {
	return (
		<section className="home">
			<Landing />

			<About />

			<Skills />

			<Projects />

			<ProjectModal />

			<Contacts />
		</section>
	)
}
