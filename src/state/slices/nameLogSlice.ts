import { createSlice } from "@reduxjs/toolkit"

export interface nameState {
    name: string
    logged: boolean
}

const initialState: nameState = {name: "", logged: false}

export const nameLogSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        setLogIn (state, action) {
            state.name = action.payload.name
            state.logged = action.payload.logged
        },
        
    }
})

export const { setLogIn } = nameLogSlice.actions
export default nameLogSlice.reducer