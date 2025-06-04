import InformationLayout from "./InformationLayout";

function Information({ isDraw, isGameEnded, currentPlayer }) {
	const getStatusMessage = () => {
		if (isDraw) return "Ничья!";
		if (isGameEnded) return `Победил: ${currentPlayer}!`;
		return `Сейчас ходит: ${currentPlayer}`;
	};

	return <InformationLayout statusMessage={getStatusMessage()} />;
}

export default Information;
