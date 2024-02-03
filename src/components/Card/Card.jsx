import "./Card.style.css";

export default function Card({ card, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(card)}>
      <img src={card.imgUrl} alt={card.name} />
      <span className="card-name">{card.name}</span>
    </div>
  );
}
