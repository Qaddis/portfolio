export const enum PagesEnum {
	HOME = "/",
	SKILLS = "/skills",
	PROJECTS = "/projects",
	CONTACTS = "/contacts"
}

interface Link {
	to: PagesEnum
	text: string
}

export const links: Link[] = [
	{
		to: PagesEnum.HOME,
		text: "Обо мне"
	},
	{
		to: PagesEnum.SKILLS,
		text: "Навыки"
	},
	{
		to: PagesEnum.PROJECTS,
		text: "Проекты"
	},
	{
		to: PagesEnum.CONTACTS,
		text: "Контакты"
	}
]
