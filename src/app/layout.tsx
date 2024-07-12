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
	metadataBase: new URL("https://qaddis.vercel.app/"),
	title: "Portfolio | by Qaddis",
	description:
		"Hi! I'm Qaddis, a full-stack web developer. Check out my web development projects and skills on my portfolio site!",
	creator: 'Svyatoslav "Qaddis" Barsukov',
	openGraph: {
		type: "website",
		title: "Portfolio | By Qaddis",
		description:
			"Hi! I'm Qaddis, a full-stack web developer. Check out my web development projects and skills on my portfolio site!",
		url: "https://qaddis.vercel.app/"
	},
	twitter: {
		card: "summary_large_image"
	},
	robots: {
		follow: false,
		index: true
	}
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
				<svg display="none">
					<symbol id="email-logo" viewBox="0 0 512 512">
						<path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
					</symbol>
					<symbol id="vk-logo" viewBox="0 0 512 512">
						<path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM392.363,342.9H359.878a23.41,23.41,0,0,1-18.318-8.8c-9.742-12.231-28.934-33.918-49.085-43.233a7.666,7.666,0,0,0-10.916,6.928v32.128A12.974,12.974,0,0,1,268.585,342.9H253.564c-19.534,0-61.6-11.891-95.119-60.719-28.56-41.6-41.291-73.84-48.715-99.98a10.3,10.3,0,0,1,9.922-13.093h32.862a15.226,15.226,0,0,1,14.6,10.861c6.111,20.439,21.939,64.53,49.917,86.486a5.788,5.788,0,0,0,9.371-4.54V210.449c0-10.171-4.408-20.347-11.288-28.3a7.878,7.878,0,0,1,5.946-13.046h50.666a9.838,9.838,0,0,1,9.838,9.837v69.325a5.468,5.468,0,0,0,8.636,4.456c9.3-6.62,17.265-16.4,24.591-27.393,9.22-13.828,20.471-36.686,26.115-48.549A13.457,13.457,0,0,1,353.06,169.1H388.9a8.788,8.788,0,0,1,7.873,12.7c-9.044,18.14-26.659,51.418-43.235,70.942a13.877,13.877,0,0,0,1.623,19.54c10.805,9.232,27.673,26.3,45.859,54.729A10.305,10.305,0,0,1,392.363,342.9Z" />
					</symbol>
					<symbol id="telegram-logo" viewBox="0 0 512 512">
						<path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM389.059,161.936,343.591,379a16.007,16.007,0,0,1-25.177,9.593l-66.136-48.861-40.068,37.8a5.429,5.429,0,0,1-7.74-.294l-.861-.946,6.962-67.375L336.055,194.266a3.358,3.358,0,0,0-4.061-5.317L171.515,290.519,102.4,267.307a9.393,9.393,0,0,1-.32-17.694L372.5,147.744A12.441,12.441,0,0,1,389.059,161.936Z" />
					</symbol>
					<symbol id="github-logo" viewBox="0 0 32 32">
						<path
							clipRule="evenodd"
							d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
							fillRule="evenodd"
						/>
					</symbol>
				</svg>

				{children}
			</body>
		</html>
	)
}
