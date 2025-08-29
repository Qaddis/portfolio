interface ISkill {
	title: string
	category: SkillsCategoryType
}

export const skillsCategories = [
	"Вёрстка & стилизация",
	"Языки программирования",
	"Фреймворки",
	"Стейт-менеджеры",
	"СУБД & ORM",
	"Прочее"
] as const

type SkillsCategoryType = (typeof skillsCategories)[number]

export interface IProject {
	title: string
	description: string
	isFavorite: boolean
	preview: string
	images: number
	repo: string
	techs: string[]
}

type ContactType = {
	title: string
	link: string
	svg: `#${string}-logo`
}

export const contacts: ContactType[] = [
	{
		title: "Написать мне на электронную почту",
		link: "mailto:svyatoslavb1107@gmail.com",
		svg: "#email-logo"
	},
	{
		title: "Перейти в мой профиль в ВКонтакте",
		link: "https://vk.com/qaddis",
		svg: "#vk-logo"
	},
	{
		title: "Перейти в мой профиль в Telegram",
		link: "https://t.me/qaddis",
		svg: "#telegram-logo"
	},
	{
		title: "Перейти в мой профиль на Github",
		link: "https://github.com/Qaddis",
		svg: "#github-logo"
	}
]

export const skills: ISkill[] = [
	{
		title: "HTML",
		category: "Вёрстка & стилизация"
	},
	{
		title: "CSS",
		category: "Вёрстка & стилизация"
	},
	{
		title: "SCSS",
		category: "Вёрстка & стилизация"
	},
	{
		title: "Bootstrap",
		category: "Вёрстка & стилизация"
	},
	{
		title: "JavaScript",
		category: "Языки программирования"
	},
	{
		title: "TypeScript",
		category: "Языки программирования"
	},
	{
		title: "Python",
		category: "Языки программирования"
	},
	{
		title: "React",
		category: "Фреймворки"
	},
	{
		title: "Next.js",
		category: "Фреймворки"
	},
	{
		title: "Vue.js",
		category: "Фреймворки"
	},
	{
		title: "Nest.js",
		category: "Фреймворки"
	},
	{
		title: "Redux",
		category: "Стейт-менеджеры"
	},
	{
		title: "Zustand",
		category: "Стейт-менеджеры"
	},
	{
		title: "Pinia",
		category: "Стейт-менеджеры"
	},
	{
		title: "React Query",
		category: "Стейт-менеджеры"
	},
	{
		title: "PostgreSQL",
		category: "СУБД & ORM"
	},
	{
		title: "MongoDB",
		category: "СУБД & ORM"
	},
	{
		title: "Prisma",
		category: "СУБД & ORM"
	},
	{
		title: "Mongoose",
		category: "СУБД & ORM"
	},
	{
		title: "Node.js",
		category: "Прочее"
	},
	{
		title: "Bun",
		category: "Прочее"
	},
	{
		title: "Express",
		category: "Прочее"
	},
	{
		title: "Axios",
		category: "Прочее"
	}
]

export const projects: IProject[] = [
	{
		title: "DL Guard",
		description:
			"Сайт для системы электронных пропусков. Сама система имеет открытый исходный код и создавалась в качестве школьного проекта за 10ый класс. На сайте можно найти как готовые компоненты системы (приложение для ПК, код сервера, чертежи считывающих устройств), так и ссылку на репозиторий с исходниками.",
		isFavorite: true,
		preview: "/projects/dl-guard-preview.png",
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
		isFavorite: true,
		preview: "/projects/kick-culture-preview.png",
		images: 4,
		repo: "kick-culture-web",
		techs: ["TypeScript", "Vue", "Vue Router", "Pinia", "SCSS"]
	},
	{
		title: "Simple ToDo",
		description:
			"Простенький ToDo (Full-stack). Front-end - Vue (Compositions API), Back-end - Node.js + Express + MongoDB. Присутствуют визуализация данных, авторизация, куки и взаимодействие с сервером (хранение данных в базе данных).",
		isFavorite: false,
		preview: "/projects/todo-preview.png",
		images: 2,
		repo: "simple-todo",
		techs: ["Vue", "Vue Router", "Plotly", "Express", "Axios", "Mongoose"]
	},
	{
		title: "#Simple_WebTemplates",
		description:
			"Один из моих самых первых проектов, создавался как школьный проект за 9ый класс. Представляет из себя сайт, на котором можно выбрать шаблон сайта, настроить под себя и скачать, чтобы в дальнейшем заполнить своим контентом и использовать.",
		isFavorite: false,
		preview: "/projects/swt-preview.png",
		images: 4,
		repo: "Simple_WebTemplates",
		techs: ["HTML", "CSS", "JavaScript"]
	}
]

export const blog: string[] = [
	"Всё началось в 2020 году - тогда я прошёл пару небольших заданий по <b>Python</b> на платформе <i>Учи.ру</i> и меня всерьёз заинтересовали как этот язык программирования, так и программирование в целом.",
	"В том же году я начал проходить курс по <b>Python</b> от онлайн-школы <i>itland.online</i>. Я изучил основы, ООП и пару простеньких библиотек, однако сам курс так до конца и не закончил. В какой то момент мне надоело программирование и я его полностью забросил.",
	"Вместо программирования я начал интересоваться <em>3д моделированием</em> - по началу я создавал простенькие локации и персонажей в <b>Magica Voxel</b>, а позже освоил <b>Blender</b>.",
	"И вот спустя ещё некоторое время мне надоело 3д моделирование. Я решил вернуться к программированию и начал изучать, какие языки программирования сейчас популярны и для чего они используются. Так я узнал сначала про <b>JavaScript</b>, а потом и про такое направление, как <span>web-разработка</span>. Я начал учиться писать простенькие сайты на <b>HTML</b> и <b>CSS</b> по мини-курсам на <i>YouTube</i>.",
	'Через пару недель после этого я совершенно случайно узнал о проекте <span>"Код будущего"</span> и решил углубиться в web-разработку. В октябре 2022 года я поступил на курс <span>"Fullstack-разработчик: от собственного сайта до полноценного веб-приложения"</span>',
	"За этот курс я более подробно изучил <b>HTML</b> и <b>CSS</b>, познакомился с <b>Bootstrap</b>, научился кодить на <b>JavaScript</b>. Потом познакомился с <b>Node.JS</b>, <b>Express</b> и <b>MongoDB</b>. Ещё чуть позже узнал про <em>SPA</em>. Сначала узнал про шаблонизаторы и научился работать с <b>Handlebars</b>, потом узнал про <b>Vue (Options API)</b>.",
	"В июне 2023 я закончил курс и получил <b>сертификат</b>. С тех пор я активно изучаю новые фреймворки и библиотеки, а так же создаю всё более сложные и интересные проекты.",
	"В марте 2025 я стал <b>призёром III степени</b> олимпиады по промышленной разработке <b>PROD</b> (по треку Front-end).",
	'С сентября 2025 года я студент в <b>ПетрГУ</b> по направлению <b>"Информатика и вычислительная техника"</b>, профиль <b>"Проектирование информационных систем в экономике"</b>.'
]
