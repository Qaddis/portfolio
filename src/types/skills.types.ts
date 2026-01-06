import { skillsCategories } from "@/constants/skills.constants"

export interface ISkill {
	title: string
	category: SkillsCategoryType
}

type SkillsCategoryType = (typeof skillsCategories)[number]
