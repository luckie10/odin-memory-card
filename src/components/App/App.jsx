import Scoreboard from "../Scoreboard";
import Gameboard from "../Gameboard";

import "./App.css";
import { useState } from "react";

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function setNewHighScore() {
    if (currentScore < highScore) return;

    setHighScore(currentScore);
  }

  return (
    <>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Gameboard
        deckSize={10}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        setNewHighScore={setNewHighScore}
      />
    </>
  );
}
