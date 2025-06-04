import FieldLayout from "./FieldLayout";
function Field({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
}) {
	function OX(index) {
		if (!isGameEnded && field[index] === "") {
			const fieldNew = [...field];
			fieldNew[index] = currentPlayer;
			setField(fieldNew);
			setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
		}
	}
	return <FieldLayout field={field} OX={OX} />;
}

export default Field;
