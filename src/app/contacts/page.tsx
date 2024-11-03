import type { Metadata } from "next"
import ContactsPage from "./ContactsPage"

const description: string =
	"Hi! I'm Qaddis, a front-end web developer. On this page you can find links to my social networks"

export const metadata: Metadata = {
	title: "Contacts",
	description: description,
	openGraph: {
		type: "website",
		title: "Contacts | By Qaddis",
		description: description,
		url: "https://qaddis.vercel.app/contacts"
	}
}

export default function Contacts() {
	return <ContactsPage />
}
