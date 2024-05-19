import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./navSlice"

export const makeStore = () => {
	return configureStore({
		reducer: {
			nav: reducer
		}
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
