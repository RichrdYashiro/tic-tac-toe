import FieldLayout from "./FieldLayout";
import PropTypes from "prop-types";
function Field({
	field,
	isGameEnded,
	currentPlayer,
	setCurrentPlayer,
	setField,
	setIsGameEnded,
	setIsDraw,
}) {
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
	function Draw(field) {
		return !field.includes("");
	}
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
	return <FieldLayout field={field} OX={OX} />;
}
Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	handleMove: PropTypes.func.isRequired,
};
export default Field;
