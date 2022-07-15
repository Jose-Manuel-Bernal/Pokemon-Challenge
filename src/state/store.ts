import { configureStore } from "@reduxjs/toolkit"
import { Pokemon } from "../types/pokemonType"
import pokemonReducer from './slices/pokemonSlice'
import nameLogReducer from './slices/nameLogSlice'
import {nameState} from './slices/nameLogSlice'

type storeType = {
    pokemons: Pokemon[]
    nameState: {}
}

const store = configureStore({
    reducer: {
        pokemons: pokemonReducer,
        userState: nameLogReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>