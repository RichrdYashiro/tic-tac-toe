import "./Game.css";
import Field from "./components/FieldContainer";
import Information from "./components/InformationContainer";
import GameLayout from "./GameLayout";
import PropTypes from "prop-types";
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
			<Field
				field={field}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setField={setField}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
			/>

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
