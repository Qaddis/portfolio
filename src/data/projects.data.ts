import type { IProject } from "@/types/projects.types"

export const projects: IProject[] = [
	{
		title: "StatSklad",
		description:
			"Инструмент цифрового складского учёта для ресторанов. Представляет из себя веб-приложение, реализованное по принципам REST API. Backend - Python + FastAPI + SQLAlchemy + PostgreSQL, Frontend - TypeScript + Next.js + SCSS. Создавался группой студентов как курсовая работа за первый курс, над самой технической частью работало два человека. Я выступал в качестве Full-Stack разработчика + Project Manager-а. Вся Frontend часть была реализована мной единолично.",
		isFavorite: true,
		preview: "/projects/stat-sklad-preview.webp",
		images: 6,
		repo: "stat-sklad",
		techs: [
			"Python",
			"FastAPI",
			"SQLAlchemy",
			"TypeScript",
			"Next.js",
			"React Query",
			"Jotai",
			"SCSS"
		]
	},
	{
		title: "DL Guard",
		description:
			"Сайт для системы электронных пропусков. Сама система имеет открытый исходный код и создавалась в качестве школьного проекта за 10ый класс. На сайте можно найти как готовые компоненты системы (приложение для ПК, код сервера, чертежи считывающих устройств), так и ссылку на репозиторий с исходниками.",
		isFavorite: true,
		preview: "/projects/dl-guard-preview.webp",
		images: 4,
		repo: "dl-guard",
		techs: ["TypeScript", "Next", "Redux", "Three.js", "Framer Motion", "SCSS"]
	},
	{
		title: `Project "Eraser"`,
		description:
			"Игра-кликер в Telegram. Есть сюжет, топ игроков, механика циклов с обнулением ресурсов и возможность прокачки.",
		preview: "/projects/project-eraser-preview.webp",
		isFavorite: true,
		images: 0,
		repo: "tg-clicker",
		techs: ["TypeScript", "React", "Redux", "Framer Motion", "SCSS"]
	},
	{
		title: "Kick Culture",
		description:
			"Сайт интернет магазина кроссовок (только Front-end). Есть возможность как добавлять товары в корзину, так и удалять их из корзины; Автоматический пересчёт скидок и цен со скидками; Автоматические подборки рекомендаций на странице товара.",
		isFavorite: false,
		preview: "/projects/kick-culture-preview.webp",
		images: 4,
		repo: "kick-culture-web",
		techs: ["TypeScript", "Vue", "Vue Router", "Pinia", "SCSS"]
	},
	{
		title: "Simple ToDo",
		description:
			"Простенький ToDo (Full-stack). Front-end - Vue (Compositions API), Back-end - Node.js + Express + MongoDB. Присутствуют визуализация данных, авторизация, куки и взаимодействие с сервером (хранение данных в базе данных).",
		isFavorite: false,
		preview: "/projects/todo-preview.webp",
		images: 2,
		repo: "simple-todo",
		techs: ["Vue", "Vue Router", "Plotly", "Express", "Axios", "Mongoose"]
	},
	{
		title: "#Simple_WebTemplates",
		description:
			"Один из моих самых первых проектов, создавался как школьный проект за 9ый класс. Представляет из себя сайт, на котором можно выбрать шаблон сайта, настроить под себя и скачать, чтобы в дальнейшем заполнить своим контентом и использовать.",
		isFavorite: false,
		preview: "/projects/swt-preview.webp",
		images: 4,
		repo: "Simple_WebTemplates",
		techs: ["HTML", "CSS", "JavaScript"]
	}
]
