import getPageMetadata from "@/functions/getPageMetadata"
import type { Metadata } from "next"
import ContactsPage from "./ContactsPage"

export const metadata: Metadata = getPageMetadata(
	"Contacts",
	"On this page you can find links to my social networks."
)

export default function Contacts() {
	return <ContactsPage />
}
