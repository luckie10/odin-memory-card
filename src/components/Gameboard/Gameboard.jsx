import { useEffect, useState } from "react";
import Card from "../Card";
import { Pokedex } from "pokeapi-js-wrapper";
import { shuffleArray } from "../../helpers/shuffle";

export default function Gameboard({ deckSize }) {
  const [deck, setDeck] = useState([]);
  const [dealtCards, setDealtCards] = useState([]);

  function dealCards(amount, deck) {
    const dealt = deck.slice(0, amount - 1);
    const remainder = deck.slice(amount - 1);
    const unclicked = remainder.find((card) => !card.clicked);

    if (unclicked) dealt.push(unclicked);
    else dealt.push(remainder[0]);

    return shuffleArray(dealt);
  }

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

  useEffect(() => {
    if (deck.length) setDealtCards(dealCards(10, shuffleArray(deck)));
  }, [deck]);

  return (
    <>
      {dealtCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
}
