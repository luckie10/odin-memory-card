import "./Scorboard.style.css";

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="scoreboard">
      <span className="current-score">Current Score: {currentScore}</span>
      <span className="high-score">High Score: {highScore}</span>
    </div>
  );
}
