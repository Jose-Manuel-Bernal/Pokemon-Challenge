import { Badge, Card } from "react-bootstrap";
import { Pokemon } from "../types/pokemonType";

type pokemonProps = {
  pokemon: Pokemon;
};

const PokemonDetail: React.FC<pokemonProps> = ({ pokemon }) => {
  const types = pokemon.types.map((pokemonTypes) => pokemonTypes.type.name);

  return (
    <div>
      <Card className="text-center" id={`${pokemon.id}`} border="primary" >
        <Card.Img variant="top" src={pokemon.img}></Card.Img>
        <Card.Body>
          <Card.Title className="text-capitalize"> {pokemon.name} </Card.Title>
          <Card.Text>Pokemon ID: {pokemon.id}</Card.Text>
          <Card.Text>height: {pokemon.height}</Card.Text>
          <Card.Text>weight: {pokemon.weight}</Card.Text>
          {/* <Card.Text>stats: {pokemon.stats}</Card.Text> */}
        </Card.Body>
        <Card.Footer className="text-muted">
          {types.map((type) => {
            return <Badge bg="primary">{type}</Badge>;
          })}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PokemonDetail
