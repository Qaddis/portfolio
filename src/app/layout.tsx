import type { Metadata } from "next"
import { Inter, Josefin_Sans, Jost } from "next/font/google"
import "./globals.scss"

const josefin = Josefin_Sans({
	subsets: ["latin"],
	weight: "700",
	style: "normal",
	variable: "--jsf-font"
})

const jost = Jost({
	subsets: ["cyrillic"],
	weight: ["400", "600"],
	style: "normal",
	variable: "--jost-font"
})

const inter = Inter({
	subsets: ["cyrillic", "latin"],
	weight: ["400", "600"],
	style: "normal",
	variable: "--int-font"
})

export const metadata: Metadata = {
	title: "Portfolio | by Qaddis",
	description: "On Next.js"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body
				className={`${josefin.variable} ${jost.variable} ${inter.variable}`}
			>
				{children}
			</body>
		</html>
	)
}
