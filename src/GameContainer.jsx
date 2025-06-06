import "./Game.css";
import GameLayout from "./GameLayout";

import { useState } from "react";

function Game() {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	function resetGame() {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(["", "", "", "", "", "", "", "", ""]);
	}

	return (
		<>
			<GameLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				field={field}
				setCurrentPlayer={setCurrentPlayer}
				setField={setField}
				setIsGameEnded={setIsGameEnded}
			/>
			{(isGameEnded || isDraw) && (
				<button onClick={resetGame}>Начать заново</button>
			)}
		</>
	);
}

export default Game;
