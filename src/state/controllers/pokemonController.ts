import axios from "axios"
import { Pokemon } from "../../types/pokemonType";


const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=50"

interface Result {
    name: string,
    url: string
}

const createPokemon =async (info: Result) => {
    let response = await fetch(info.url)
    let data = await response.json()
    const newPokemon: Pokemon = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types,
        stats: data.stats,
        img: data.sprites.front_default
    }
    return newPokemon
}

export const getPokemonList =async () => {
   const response = await fetch(apiURL)
   const data = await response.json()
   const resultList: Result[] = data.results
   const pokemonList: Pokemon[] = []
   for (const rawInfo of resultList) {
       const pokemon = await createPokemon(rawInfo)
       pokemonList.push(pokemon)
   }
   return pokemonList
}
