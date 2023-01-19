import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { montserrat } from '../../pages/_app';
import styles from '../../styles/Ui.module.css';
import { CloseIcon } from '../ui/icons';
export const Portal = ({ children, handleModal }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted
		? createPortal(
				<div
					id="MBDrop"
					className={`${montserrat.className} ${styles.portalBackdrop}`}
					onClick={handleModal}
				>
					<div className={styles.portal} id="ModaL">
						<button type="button" className={`flex ${styles.btn}`}>
							<CloseIcon />
						</button>
						{children}
					</div>
				</div>,
				document.querySelector('#portal')
		  )
		: null;
};
export const Modal = ({ children, handleModal }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted
		? createPortal(
				<div
					id="MBDrop"
					className={`close ${montserrat.className} ${styles.modalBackdrop}`}
					onClick={handleModal}
				>
					<div className={styles.modal} id="ModaL">
						<button type="button" className={`flex close ${styles.btn}`}>
							&#10096; back
						</button>
						{children}
					</div>
				</div>,
				document.querySelector('#portal')
		  )
		: null;
};
