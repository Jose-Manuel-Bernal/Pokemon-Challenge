import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../types/pokemonType";


interface pokemonState {
    pokemonList: Pokemon[]
}

const initialState: pokemonState = {pokemonList: []}

export const pokemonSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        getAllPokemons (state, action) {
            state.pokemonList = action.payload
        }
    }
})

export const { getAllPokemons } = pokemonSlice.actions
export default pokemonSlice.reducer