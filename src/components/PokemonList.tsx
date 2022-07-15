import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PokemonCard from './PokemonCard'
import { Form } from "react-bootstrap";

function PokemonList() {
  const pokemonList = useSelector(
    (state: RootState) => state.pokemons.pokemonList
  );

  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div>
        <Form className="mb-5">
            <input className="form-control" type="text" onChange={handleChangeSearchValue} value={searchValue} placeholder="Search"/>
        </Form>
        
      <Row xs={1} md={4} className="g-4">
        {pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase())).map((pokemon, idx) => (
          <Col>
            <PokemonCard pokemon={pokemon} key={idx}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PokemonList
