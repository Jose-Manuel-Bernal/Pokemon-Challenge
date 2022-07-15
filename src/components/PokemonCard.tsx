import { Pokemon } from "../types/pokemonType";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";

type pokemonProps = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<pokemonProps> = ({ pokemon }) => {
  const types = pokemon.types.map((pokemonTypes) => pokemonTypes.type.name);

  return (
    <Link to={`/pokedex/details/${pokemon.id}`}>
      <Card className="text-center" id={`${pokemon.id}`} border="primary">
        <Card.Img variant="top" src={pokemon.img}></Card.Img>
        <Card.Body>
          <Card.Title className="text-capitalize"> {pokemon.name} </Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">
          {types.map(type => {
            return <Badge bg="primary">{type}</Badge> ;
          })}
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default PokemonCard;
