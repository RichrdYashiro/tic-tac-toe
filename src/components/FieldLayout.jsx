import styles from "./styles/field.module.css";
function FieldLayout({ field, OX }) {
	return (
		<>
			<div className={styles.fieldGame}>Игровое поле</div>
			<div className={styles.fieldGameGrid}>
				{field.map((cell, index) => (
					<div
						key={index}
						className={styles.fieldGameitem}
						disabled={cell !== ""}
						onClick={() => OX(index)}
					>
						{cell}
					</div>
				))}
			</div>
		</>
	);
}

export default FieldLayout;
