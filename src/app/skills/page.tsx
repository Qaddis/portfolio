import getPageMetadata from "@/functions/getPageMetadata"
import type { Metadata } from "next"
import SkillsPage from "./SkillsPage"

export const metadata: Metadata = getPageMetadata(
	"Skills",
	"On this page you can learn about the technologies I use."
)

export default function Blog() {
	return <SkillsPage />
}
