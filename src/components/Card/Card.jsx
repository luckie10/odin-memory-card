export default function Card({ card, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(card)}>
      <img src={card.imgUrl} alt={card.name} />
      {card.name}
    </div>
  );
}
