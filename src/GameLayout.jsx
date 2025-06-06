import Field from "./components/FieldContainer";
import Information from "./components/InformationContainer";

function GameLayout({
	field,
	isGameEnded,
	currentPlayer,
	setCurrentPlayer,
	setField,
	isDraw,
	setIsGameEnded,
}) {
	return (
		<>
			<Field
				field={field}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setField={setField}
				setIsGameEnded={setIsGameEnded}
			/>

			<Information
				field={field}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
		</>
	);
}

export default GameLayout;
