const enum delays {
	first = 0.12,
	second = 0.22,
	third = 0.32
}

type SkillsType = {
	title: string
	icon: string
	color: string
	delay: delays
}

export const skills: SkillsType[] = [
	{
		icon: "/icons/html.svg",
		title: "HTML",
		color: "#FF6C39",
		delay: delays.first
	},
	{
		icon: "/icons/css.svg",
		title: "CSS",
		color: "#347DC6",
		delay: delays.second
	},
	{
		icon: "/icons/sass.svg",
		title: "SCSS",
		color: "#CF649A",
		delay: delays.third
	},
	{
		icon: "/icons/bootstrap.svg",
		title: "Bootstrap",
		color: "#7910F2",
		delay: delays.first
	},
	{
		icon: "/icons/javascript.svg",
		title: "JavaScript",
		color: "#F0DB4F",
		delay: delays.second
	},
	{
		icon: "/icons/typescript.svg",
		title: "TypeScript",
		color: "#2F74C0",
		delay: delays.third
	},
	{
		icon: "/icons/react.svg",
		title: "React",
		color: "#63DAFB",
		delay: delays.first
	},
	{
		icon: "/icons/nextjs.svg",
		title: "Next.js",
		color: "#FFFFFF",
		delay: delays.second
	},
	{
		icon: "/icons/vuejs.svg",
		title: "Vue.js",
		color: "#3FB27F",
		delay: delays.third
	},
	{
		icon: "/icons/nodejs.svg",
		title: "Node.js",
		color: "#65B648",
		delay: delays.first
	},
	{
		icon: "/icons/express.svg",
		title: "Express",
		color: "#FFFFFF",
		delay: delays.second
	},
	{
		icon: "/icons/mongodb.svg",
		title: "MongoDB",
		color: "#58AA50",
		delay: delays.third
	}
]
