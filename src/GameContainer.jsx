import "./Game.css";
import Field from "./components/FieldContainer";
import Information from "./components/InformationContainer";
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
	function Draw(field) {
		return !field.includes("");
	}
	const checkWinner = (field) => {
		const winPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let pattern of winPatterns) {
			const [a, b, c] = pattern;
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return true;
			}
		}
		return false;
	};
	function OX(index) {
		if (!isGameEnded && field[index] === "") {
			const fieldNew = [...field];
			fieldNew[index] = currentPlayer;
			setField(fieldNew);

			if (checkWinner(fieldNew)) {
				setIsGameEnded(true);
			} else if (Draw(fieldNew)) {
				setIsDraw(true);
				setIsGameEnded(true);
			} else {
				setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
			}
		}
	}
	return (
		<>
			<Field field={field} isGameEnded={isGameEnded} OX={OX} />

			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			{(isGameEnded || isDraw) && (
				<button onClick={resetGame}>Начать заново</button>
			)}
		</>
	);
}

export default Game;
