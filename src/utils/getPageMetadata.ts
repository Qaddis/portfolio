import type { Metadata } from "next"

export default function getPageMetadata(
	title: string,
	description: string,
	other?: Omit<Metadata, "title" | "description" | "openGraph">
): Metadata {
	const generalDescription: string =
		"Hi! I'm Qaddis, a full-stack web developer. " + description

	return {
		title: title,
		description: generalDescription,
		openGraph: {
			type: "website",
			title: `${title} | Portfolio by Qaddis`,
			description: generalDescription,
			url: `https://qaddis.vercel.app/${title.toLowerCase()}`
		},
		...other
	}
}
