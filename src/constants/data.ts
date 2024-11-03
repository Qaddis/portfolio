interface ISkill {
	title: string
	category: SkillsCategoryType
}

export const skillsCategories = [
	"База",
	"Стилизация",
	"Продвинутое",
	"Стейт-менеджеры",
	"Бэкенд"
] as const

type SkillsCategoryType = (typeof skillsCategories)[number]

export interface IProject {
	title: string
	img: string
	description: string
	techs: string[]
	repo: string
}

export const skills: ISkill[] = [
	{
		title: "HTML",
		category: "База"
	},
	{
		title: "CSS",
		category: "База"
	},
	{
		title: "JavaScript",
		category: "База"
	},
	{
		title: "Bootstrap",
		category: "Стилизация"
	},
	{
		title: "SASS",
		category: "Стилизация"
	},
	{
		title: "TypeScript",
		category: "Продвинутое"
	},
	{
		title: "React",
		category: "Продвинутое"
	},
	{
		title: "Next",
		category: "Продвинутое"
	},
	{
		title: "Vue",
		category: "Продвинутое"
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
		title: "Jotai",
		category: "Стейт-менеджеры"
	},
	{
		title: "Pinia",
		category: "Стейт-менеджеры"
	},
	{
		title: "Node.js",
		category: "Бэкенд"
	},
	{
		title: "Express",
		category: "Бэкенд"
	},
	{
		title: "MongoDB",
		category: "Бэкенд"
	}
]

export const projects: IProject[] = [
	{
		title: "DL Guard",
		img: "/carousel/DL_Guard.webp",
		description:
			"Сайт для системы электронных пропусков. Сама система имеет открытый исходный код и создавалась в качестве школьного проекта за 10ый класс. На сайте можно найти как готовые компоненты системы (приложение для ПК, код сервера, чертежи считывающих устройств), так и ссылку на репозиторий с исходниками.",
		repo: "dl-guard",
		techs: ["TypeScript", "Next.js", "Redux", "Framer Motion", "Three.js"]
	},
	{
		title: `Project "Eraser"`,
		img: "/carousel/Project_Eraser.webp",
		description:
			"Игра-кликер в Telegram. Есть сюжет, топ игроков, механика циклов с обнулением ресурсов и возможность прокачки.",
		repo: "tg-clicker",
		techs: ["TypeScript", "React", "Redux", "Framer Motion"]
	},
	{
		title: "Kick Culture",
		img: "/carousel/Kick_Culture.webp",
		description:
			"Сайт интернет магазина кроссовок (только Front-end). Есть возможность как добавлять товары в корзину, так и удалять их из корзины; Автоматический пересчёт скидок и цен со скидками; Автоматические подборки рекомендаций на странице товара.",
		repo: "kick-culture-web",
		techs: ["TypeScript", "Vue", "Pinia"]
	}
]

export const blog: string[] = [
	"Всё началось в 2020 году - тогда я прошёл пару небольших заданий по <b>Python</b> на платформе <i>Учи.ру</i> и меня всерьёз заинтересовали как этот язык программирования, так и программирование в целом.",
	"В том же году я начал проходить курс по <b>Python</b> от онлайн-школы <i>itland.online</i>. Я изучил основы, ООП и пару простеньких библиотек, однако сам курс так до конца и не закончил. В какой то момент мне надоело программирование и я его полностью забросил.",
	"Вместо программирования я начал интересоваться <em>3д моделированием</em> - по началу я создавал простенькие локации и персонажей в <b>Magica Voxel</b>, а позже освоил <b>Blender</b>.",
	"И вот спустя ещё некоторое время мне надоело 3д моделирование. Я решил вернуться к программированию и начал изучать, какие языки программирования сейчас популярны и для чего они используются. Так я узнал сначала про <b>JavaScript</b>, а потом и про такое направление, как <span>web-разработка</span>. Я начал учиться писать простенькие сайты на <b>HTML</b> и <b>CSS</b> по мини-курсам на <i>YouTube</i>.",
	'Через пару недель после этого я совершенно случайно узнал о проекте <span>"Код будущего"</span> и решил углубиться в web-разработку. В октябре 2022 года я поступил на курс <span>"Fullstack-разработчик: от собственного сайта до полноценного веб-приложения"</span>',
	"За этот курс я более подробно изучил <b>HTML</b> и <b>CSS</b>, познакомился с <b>Bootstrap</b>, научился кодить на <b>JavaScript</b>. Потом познакомился с <b>Node.JS</b>, <b>Express</b> и <b>MongoDB</b>. Ещё чуть позже узнал про <em>SPA</em>. Сначала узнал про шаблонизаторы и научился работать с <b>Handlebars</b>, потом узнал про <b>Vue (Options API)</b>.",
	"В июне 2023 я закончил курс и получил <b>сертификат</b>. С тех пор я активно изучаю новые фреймворки и библиотеки, а так же создаю всё более сложные и интересные проекты."
]
