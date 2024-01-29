import { useEffect, useState } from "react";
import Card from "../Card";
import { Pokedex } from "pokeapi-js-wrapper";

export default function Gameboard({ deckSize }) {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    (async () => {
      const P = new Pokedex({ cacheImages: true });

      const deckTemplate = Array(deckSize)
        .fill({ clicked: false })
        .map((card, index) => ({ ...card, id: index + 1 }));

      setDeck(
        await Promise.all(
          deckTemplate.map(async (card) => {
            const pokemon = await P.getPokemonByName(card.id);

            return {
              ...card,
              name: pokemon.name,
              imgUrl: pokemon.sprites.other.dream_world.front_default,
            };
          }),
        ),
      );
    })();
  }, [deckSize]);

  return (
    <>
      {deck.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
}
