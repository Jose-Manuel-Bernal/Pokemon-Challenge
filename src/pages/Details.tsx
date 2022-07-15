import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { RootState } from '../state/store';
import PokemonDetail from '../components/PokemonDetail'
import { Pokemon } from '../types/pokemonType';

const Details = () => {

  const {pokemon_id} = useParams()

  const pokemonList = useSelector(
    (state: RootState) => state.pokemons.pokemonList
  );

  const pokemon = pokemonList.find(pokemon => pokemon.id.toString()===pokemon_id)

  return (
    <div>
      <PokemonDetail pokemon={pokemon!} />
    </div>
  )
}

export default Details
