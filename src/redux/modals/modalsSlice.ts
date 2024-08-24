import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface IModalsSlice {
	burger: boolean
	project: string
}

const initialState: IModalsSlice = {
	burger: false,
	project: "none"
}

const modalsSlice = createSlice({
	name: "modals",
	initialState,
	reducers: {
		setBurger: (state, { payload }: PayloadAction<boolean>) => {
			state.burger = payload
		},
		setProjectTarget: (state, { payload }: PayloadAction<string>) => {
			state.project = payload
		}
	}
})

export const { actions, reducer } = modalsSlice
