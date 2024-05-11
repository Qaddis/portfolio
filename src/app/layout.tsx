import Footer from "@/components/AppFooter"
import Header from "@/components/AppHeader"
import type { Metadata } from "next"
import { Josefin_Sans, Poppins } from "next/font/google"
import "./globals.scss"

const josefinSans = Josefin_Sans({
	subsets: ["latin"],
	weight: "700",
	style: "normal",
	variable: "--jsf-font"
})

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: "normal",
	variable: "--pop-font"
})

export const metadata: Metadata = {
	title: {
		default: "Qaddis Portfolio",
		template: "%s | Qaddis Portfolio"
	},
	description: "On Next.js with TypeScript"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${josefinSans.variable} ${poppins.variable}`}>
				<Header />

				<main className="main">{children}</main>

				<Footer />
			</body>
		</html>
	)
}
