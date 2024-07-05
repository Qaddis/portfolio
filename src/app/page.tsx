"use client"

import Footer from "@/components/AppFooter"
import Header from "@/components/AppHeader"
import Landing from "@/components/Landing"

export default function Home() {
	return (
		<>
			<Header />

			<main>
				<Landing />
			</main>

			<Footer />
		</>
	)
}
