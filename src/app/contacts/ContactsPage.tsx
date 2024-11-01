"use client"

import Contacts from "@/components/Contacts/Contacts"
import Heading from "@/components/ui/Heading"

export default function ContactsPage() {
	return (
		<section className="contacts-page">
			<Heading>Контакты</Heading>

			<Contacts />
		</section>
	)
}
