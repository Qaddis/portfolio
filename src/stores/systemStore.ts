import { create } from "zustand"

interface ISystemStore {
	activeSection: string
	isTransition: boolean
	setActiveSect: (sect: string) => void
	setTransition: (newState: boolean) => void
}

export const useSystemStore = create<ISystemStore>(set => ({
	activeSection: "about",
	isTransition: false,
	setActiveSect: sect => set({ activeSection: sect }),
	setTransition: newState => set({ isTransition: newState })
}))
