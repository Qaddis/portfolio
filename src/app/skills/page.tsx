import type { Metadata } from "next"

import SkillsPage from "@/pages/SkillsPage"
import getPageMetadata from "@/utils/getPageMetadata"

export const metadata: Metadata = getPageMetadata(
	"Skills",
	"On this page you can learn about the technologies I use."
)

export default function Blog() {
	return <SkillsPage />
}
