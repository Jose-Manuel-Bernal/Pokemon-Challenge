import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {getPokemonList} from './state/controllers/pokemonController'
import { getAllPokemons } from './state/slices/pokemonSlice'
import { RootState } from './state/store'

function App() {

 const dispatch = useDispatch()

 useEffect(() => {
   getPokemonList().then((pokemons) => {
     dispatch(getAllPokemons(pokemons))
   })
 }, [])

 const pokimans = useSelector(
   (state: RootState) => state.pokemons
 )

 console.log(pokimans)

  return (
    <div className="App">
      
    </div>
  )
}

export default App
