function GameLayout(
	field,
	isGameEnded,
	currentPlayer,
	setCurrentPlayer,
	setField,
	isDraw
) {
	return (
		<>
			<Field
				field={field}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setField={setField}
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
