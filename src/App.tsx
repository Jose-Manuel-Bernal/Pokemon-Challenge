import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getPokemonList } from "./state/controllers/pokemonController";
import { getAllPokemons } from "./state/slices/pokemonSlice";
import { RootState } from "./state/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Pokedex from "./pages/Pokedex";
import Details from "./pages/Details";
import NavigationBar from "./components/NavigationBar";
import Protected from "./components/Protected";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemonList().then((pokemons) => {
      dispatch(getAllPokemons(pokemons));
    });
  }, []);

  const user = useSelector((state: RootState) => state.userState);

  console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        <Protected isLoggedIn={user.logged}>
          <NavigationBar user={user} />
        </Protected>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/pokedex"
            element={
              <Protected isLoggedIn={user.logged}>
                <Pokedex />
              </Protected>
            }
          />
          <Route
            path="/pokedex/details/:pokemon_id"
            element={
              <Protected isLoggedIn={user.logged}>
                <Details />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
