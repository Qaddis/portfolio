import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface ISystemSlice {
	activeSection: string
	isTransition: boolean
}

const initialState: ISystemSlice = {
	activeSection: "about",
	isTransition: false
}

const systemSlice = createSlice({
	name: "system",
	initialState,
	reducers: {
		setActiveSect: (state, { payload }: PayloadAction<string>) => {
			state.activeSection = payload
		},
		setTransState: (state, { payload }: PayloadAction<boolean>) => {
			state.isTransition = payload
		}
	}
})

export const { actions, reducer } = systemSlice
