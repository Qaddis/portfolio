import { create } from "zustand"

interface IModalsStore {
	burger: boolean
	project: string
	setBurger: (newState: boolean) => void
	setProject: (newState: string) => void
}

export const useModalsStore = create<IModalsStore>(set => ({
	burger: false,
	project: "none",
	setBurger: newState => set({ burger: newState }),
	setProject: newState => set({ project: newState })
}))
