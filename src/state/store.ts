import { configureStore } from "@reduxjs/toolkit"
import { Pokemon } from "../types/pokemonType"
import pokemonReducer from './slices/pokemonSlice'

type storeType = {
    pokemons: Pokemon[]
}

const store = configureStore({
    reducer: {
        pokemons: pokemonReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>