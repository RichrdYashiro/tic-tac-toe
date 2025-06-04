import styles from "./styles/Information.module.css";

function InformationLayout({ statusMessage }) {
	return <div className={styles.message}>{statusMessage}</div>;
}

export default InformationLayout;
