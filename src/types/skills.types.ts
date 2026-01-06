import {
	backendSkillsCategories,
	frontendSkillsCategories
} from "@/constants/skills.constants"

interface ISkill {
	title: string
}

export interface IFrontendSkill extends ISkill {
	category: FrontendSkillsCategoryType
}

export interface IBackendSkill extends ISkill {
	category: BackendSkillsCategoryType
}

type FrontendSkillsCategoryType = (typeof frontendSkillsCategories)[number]
type BackendSkillsCategoryType = (typeof backendSkillsCategories)[number]
