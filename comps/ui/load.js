import styles from '../../styles/Ui.module.css';

export const LoaderCircles = () => {
	return (
		<div className={styles.lcContainer}>
			<div className={styles.loaderCircles}>
				<div className={styles.lcCircle}></div>
				<div className={styles.lcCircle}></div>
			</div>
		</div>
	);
};

export const LoaderLinear = () => {
	return (
		<div className={styles.loaderLinear}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};
