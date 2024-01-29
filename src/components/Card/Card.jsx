export default function Card({ card }) {
  return (
    <>
      <img src={card.imgUrl} alt={card.name} />
      {card.name}
    </>
  );
}
