import { atom } from "jotai"

// Modals
export const burgerAtom = atom<boolean>(false)
export const projectAtom = atom<string>("none")

// System
export const isTransitionAtom = atom<boolean>(false)
