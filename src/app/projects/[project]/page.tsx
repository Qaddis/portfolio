import type { Metadata } from "next"

import { projects } from "@/data/projects.data"
import getPageMetadata from "@/utils/getPageMetadata"
import { getSlug } from "@/utils/getSlug"

import ProjectPage from "@/pages/ProjectPage"

interface IParams {
	params: { project: string }
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
	const resolveParams = await params
	const project = projects.find(
		item => getSlug(item.title) === resolveParams.project
	)

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

export default async function Product({ params }: IParams) {
	const resolveParams = await params

	return <ProjectPage target={resolveParams.project} />
}
