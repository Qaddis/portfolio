import ProjectPage from "./ProjectPage"

export default function Product({ params }: { params: { project: string } }) {
	return <ProjectPage target={params.project} />
}
