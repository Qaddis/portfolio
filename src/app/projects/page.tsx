import getPageMetadata from "@/functions/getPageMetadata"
import type { Metadata } from "next"
import ProjectsPage from "./ProjectsPage"

export const metadata: Metadata = getPageMetadata(
	"Skills",
	"On this page you can see what projects I have completed."
)

export default function Projects() {
	return <ProjectsPage />
}
