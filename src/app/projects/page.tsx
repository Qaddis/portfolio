import type { Metadata } from "next"

import ProjectsPage from "@/pages/ProjectsPage"
import getPageMetadata from "@/utils/getPageMetadata"

export const metadata: Metadata = getPageMetadata(
	"Skills",
	"On this page you can see what projects I have completed."
)

export default function Projects() {
	return <ProjectsPage />
}
