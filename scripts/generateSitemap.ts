import { writeFileSync } from "fs"
import { join } from "path"

import { PagesEnum } from "../src/constants/navigation.constants"
import { projects } from "../src/data/projects.data"

import { getSlug } from "../src/utils/getSlug"

interface ISitemapUrl {
	path: string
	priority: `${number}.${number}`
	changefreq: "monthly" | "yearly"
}

const BASE_URL = "https://qaddis.tech"
const LAST_MOD = new Date().toISOString().split("T")[0]

const staticPaths: ISitemapUrl[] = [
	{
		path: PagesEnum.HOME,
		priority: "1.0",
		changefreq: "monthly"
	},
	{
		path: PagesEnum.SKILLS,
		priority: "0.8",
		changefreq: "monthly"
	},
	{
		path: PagesEnum.PROJECTS,
		priority: "0.9",
		changefreq: "monthly"
	},
	{
		path: PagesEnum.CONTACTS,
		priority: "0.6",
		changefreq: "yearly"
	}
]

function generateSitemap(): string {
	const urls: string[] = []

	for (const { path, priority, changefreq } of staticPaths) {
		urls.push(`<url>
	<loc>${BASE_URL}${path === "?" ? "" : path}</loc>
	<lastmod>${LAST_MOD}</lastmod>
	<changefreq>${changefreq}</changefreq>
	<priority>${priority}</priority>
</url>`)
	}

	for (const { title } of projects) {
		const slug = getSlug(title)

		urls.push(`<url>
	<loc>${BASE_URL}${PagesEnum.PROJECTS}/${slug}</loc>
	<lastmod>${LAST_MOD}</lastmod>
	<changefreq>yearly</changefreq>
	<priority>0.4</priority>
</url>`)
	}

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`
}

const sitemap = generateSitemap()
const outputPath = join(process.cwd(), "src", "app", "sitemap.xml")

writeFileSync(outputPath, sitemap)

console.log("sitemap.xml успешно сгенерирован в", outputPath)
