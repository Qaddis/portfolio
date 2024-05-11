import type { Metadata } from "next"
import { Josefin_Sans, Poppins } from "next/font/google"
import "./globals.scss"

const josefinSans = Josefin_Sans({
	subsets: ["latin"],
	weight: "700",
	style: "normal",
	variable: "--josefin-font"
})

const poppins = Poppins({
	weight: ["400", "700"],
	style: "normal",
	variable: "--poppins-font"
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
				{children}
			</body>
		</html>
	)
}
