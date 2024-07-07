interface ISkill {
	title: string
	image: string
	color: `#${string}`
}

interface ICarousel {
	title: string
	img: string
	description: string
	techs: string[]
	repo: string
}

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

export const carousel: ICarousel[] = [
	{
		title: "DL Guard",
		img: "/carousel/DL_Guard.png",
		description: "",
		repo: "dl-guard",
		techs: ["TypeScript", "Next.js", "Redux", "Framer Motion", "Three.js"]
	},
	{
		title: `Project "Eraser"`,
		img: "/carousel/Project_Eraser.png",
		description: "",
		repo: "tg-clicker",
		techs: ["TypeScript", "React", "Redux", "Framer Motion"]
	},
	{
		title: "Kick Culture",
		img: "/carousel/Kick_Culture.png",
		description: "",
		repo: "kick-culture-web",
		techs: ["JavaScript", "React", "Redux", "Framer Motion"]
	}
]
