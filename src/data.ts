import type { SectionsType } from "./app/page"

interface ILink {
	to: SectionsType
	text: string
}

interface ISkill {
	title: string
	image: string
	color: `#${string}`
}

export interface IProject {
	title: string
	img: string
	description: string
	techs: string[]
	repo: string
}

export const links: ILink[] = [
	{ to: "about", text: "Обо мне" },
	{ to: "skills", text: "Навыки" },
	{ to: "projects", text: "Проекты" },
	{ to: "contacts", text: "Контакты" }
]

export const skills: ISkill[] = [
	{
		title: "HTML",
		image: "/icons/html.svg",
		color: "#ff6c39"
	},
	{
		title: "CSS",
		image: "/icons/css.svg",
		color: "#347dc6"
	},
	{
		title: "JavaScript",
		image: "/icons/javascript.svg",
		color: "#f0db4f"
	},
	{
		title: "Bootstrap",
		image: "/icons/bootstrap.svg",
		color: "#7910f2"
	},
	{
		title: "SASS",
		image: "/icons/sass.svg",
		color: "#cf649a"
	},
	{
		title: "TypeScript",
		image: "/icons/typescript.svg",
		color: "#2f74c0"
	},
	{
		title: "React",
		image: "/icons/react.svg",
		color: "#63dafb"
	},
	{
		title: "Next.js",
		image: "/icons/nextjs.svg",
		color: "#ffffff"
	},
	{
		title: "Vue.js",
		image: "/icons/vuejs.svg",
		color: "#3fb27f"
	},
	{
		title: "Node.js",
		image: "/icons/nodejs.svg",
		color: "#65b648"
	},
	{
		title: "MongoDB",
		image: "/icons/mongodb.svg",
		color: "#58aa50"
	},
	{
		title: "Express",
		image: "/icons/express.svg",
		color: "#ffffff"
	}
]

export const projects: IProject[] = [
	{
		title: "DL Guard",
		img: "/carousel/DL_Guard.png",
		description:
			"Сайт для системы электронных пропусков. Сама система имеет открытый исходный код и создавалась в качестве школьного проекта за 10ый класс. На сайте можно найти как готовые компоненты системы (приложение для ПК, код сервера, чертежи считывающих устройств), так и ссылку на репозиторий с исходниками.",
		repo: "dl-guard",
		techs: ["TypeScript", "Next.js", "Redux", "Framer Motion", "Three.js"]
	},
	{
		title: `Project "Eraser"`,
		img: "/carousel/Project_Eraser.png",
		description:
			"Игра-кликер в Telegram. Есть сюжет, топ игроков, механика циклов с обнулением ресурсов и возможность прокачки.",
		repo: "tg-clicker",
		techs: ["TypeScript", "React", "Redux", "Framer Motion"]
	},
	{
		title: "Kick Culture",
		img: "/carousel/Kick_Culture.png",
		description:
			"Сайт интернет магазина кроссовок (только Front-end). Есть возможность как добавлять товары в корзину, так и удалять их из корзины; Автоматический пересчёт скидок и цен со скидками; Автоматические подборки рекомендаций на странице товара.",
		repo: "kick-culture-web",
		techs: ["JavaScript", "React", "Redux", "Framer Motion"]
	}
]
