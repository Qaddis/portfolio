import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { reducer as modalsReducer } from "./modals/modalsSlice"
import { reducer as systemReducer } from "./system/systemSlice"

const reducer = combineReducers({
	system: systemReducer,
	modals: modalsReducer
})

export const makeStore = () => {
	return configureStore({
		reducer: reducer
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
