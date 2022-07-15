import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {getPokemonList} from './state/controllers/pokemonController'
import { getAllPokemons } from './state/slices/pokemonSlice'
import { RootState } from './state/store'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import Pokedex from './pages/Pokedex'
import Details from './pages/Details'

function App() {

 const dispatch = useDispatch()

 useEffect(() => {
   getPokemonList().then((pokemons) => {
     dispatch(getAllPokemons(pokemons))
   })
 }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/pokedex' element={<Pokedex/>} />
          <Route path='/pokedex/details/:pokemon_id' element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
