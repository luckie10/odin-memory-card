import "./Card.style.css";

export default function Card({ card, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(card)}>
      <div className="img-container">
        <img src={card.imgUrl} alt={card.name} />
      </div>
      <span className="card-name">{card.name}</span>
    </div>
  );
}
