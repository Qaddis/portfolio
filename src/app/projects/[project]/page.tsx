import { projects } from "@/constants/data"
import getPageMetadata from "@/functions/getPageMetadata"
import { getSlug } from "@/functions/getSlug"
import type { Metadata } from "next"
import ProjectPage from "./ProjectPage"

interface IParams {
	params: { project: string }
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
	const project = projects.find(item => getSlug(item.title) === params.project)

	let metadata: Metadata

	if (project)
		metadata = getPageMetadata(
			project.title,
			"On this page you can find one of my projects.",
			{
				robots: {
					index: false,
					follow: false
				}
			}
		)
	else
		metadata = {
			title: "Project not found",
			description: null,
			openGraph: null,
			robots: {
				index: false,
				follow: false
			}
		}

	return metadata
}

export default function Product({ params }: IParams) {
	return <ProjectPage target={params.project} />
}
