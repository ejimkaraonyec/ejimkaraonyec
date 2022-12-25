import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../styles/Ui.module.css';
import { CloseIcon } from '../ui/icons';
export const Portal = ({ children, handleModal }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted
		? createPortal(
				<div id="MBDrop" className={styles.modalBackdrop} onClick={handleModal}>
					<div className={styles.modal} id="ModaL">
						<button className={`flex ${styles.btn}`}>
							<CloseIcon />
						</button>
						{children}
					</div>
				</div>,
				document.querySelector('#portal')
		  )
		: null;
};
