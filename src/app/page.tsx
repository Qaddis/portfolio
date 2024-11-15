import getPageMetadata from "@/functions/getPageMetadata"
import type { Metadata } from "next"
import MainPage from "./MainPage"

export const metadata: Metadata = getPageMetadata(
	"About me | Portfolio by Qaddis",
	"Check out my web development projects and skills on my portfolio site!"
)

export default function Main() {
	return <MainPage />
}
