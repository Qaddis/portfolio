"use client"

import ProjectModal from "@/components/Modals/Projects"
import Projects from "@/components/Projects/Projects"
import Heading from "@/components/ui/Heading"

export default function ProjectsPage() {
	return (
		<section className="projects-page">
			<Heading>Проекты</Heading>

			<Projects />

			<ProjectModal />
		</section>
	)
}
