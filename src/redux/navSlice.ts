import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface IState {
	position: string | null
}

const initialState: IState = {
	position: null
}

const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setPosition: (state, action: PayloadAction<string>) => {
			state.position = action.payload
		}
	}
})

export const { actions, reducer } = navSlice
