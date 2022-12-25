import { useState } from 'react';
import { useFetch } from '../../lib/fetch';
import styles from '../../styles/Ui.module.css';
import { Portal } from '../layout/modal';
import { SendIcon } from './icons';

export function Button({ children }) {
	return <Button className="btn-inline">{children}</Button>;
}
export const Inquiry = ({ skill = false, interest }) => {
	const [name, setName] = useState('');
	const [contact, setContact] = useState('');
	const [message, setMessage] = useState('');
	const {
		postData,
		error,
		success,
		isPending,
		emptyFields,
		showModal,
		setShowModal,
	} = useFetch('/api/inquiry', 'POST');

	const taplaceholher = (skill, interest) => {
		if (!skill) {
			return `message (enquiry about ${interest} or consultation for a similar project)`;
		}
		let placeholder;
		if (interest === 'Academics / Research') {
			placeholder = 'propose collaboration';
		} else {
			placeholder = 'message (enquire, consult or collaborate)';
		}
		return placeholder;
	};
	const handleModal = (e) => {
		if (
			e.target.id === 'MBDrop' ||
			e.target.tagName === 'svg' ||
			e.target.tagName === 'path'
		) {
			setShowModal(false);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const inquiry = {
			name: name.trim(),
			contact: contact.trim(),
			message: message.trim(),
			interest,
		};
		postData(inquiry);
		if (!error.status) {
			setName('');
			setContact('');
			setMessage('');
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit} className={styles.inquiryForm}>
				<div className={`flex ${styles.inline}`}>
					<input
						className={`${styles.input} ${
							emptyFields.includes('name') ? styles.error : ''
						}`}
						// required
						id="name"
						placeholder="name (alias or organization)"
						ariia-lang="name"
						type="text"
						disabled={isPending}
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<input
						className={`${styles.input} ${
							emptyFields.includes('contact') ? styles.error : ''
						}`}
						// required
						id="contact"
						placeholder="contact (email, phone or WhatsApp)"
						ariia-lang="contact"
						type="text"
						disabled={isPending}
						onChange={(e) => setContact(e.target.value)}
						value={contact}
					/>
				</div>
				<textarea
					className={`${styles.textarea} ${
						emptyFields.includes('message') ? styles.error : ''
					}`}
					name="message"
					placeholder={taplaceholher(skill, interest)}
					disabled={isPending}
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				></textarea>
				{!isPending && (
					<button className={`btn flex btn-inline ht2 ${styles.btn}`}>
						Send <SendIcon />
					</button>
				)}
				{isPending && (
					<button
						className={`btn btn-accent btn-disabled ht4 ${styles.btn}`}
						disabled
					>
						sending...
					</button>
				)}
			</form>
			{showModal && (
				<Portal handleModal={handleModal}>
					{error.status && (
						<>
							<h2 className="ht3 brand">Oops!</h2>
							<p>
								Please fill in the {''}
								{emptyFields.length === 1 && (
									<>
										<span style={{ color: '#FF00C3' }}>{emptyFields[0]}</span>{' '}
										field
									</>
								)}
								{emptyFields.length === 2 && (
									<>
										<span style={{ color: '#FF00C3' }}>{emptyFields[0]}</span>,
										and{' '}
										<span style={{ color: '#FF00C3' }}>{emptyFields[1]}</span>{' '}
										fields
									</>
								)}
								{emptyFields.length === 3 && (
									<>
										<span style={{ color: '#FF00C3' }}>{emptyFields[0]}</span>,{' '}
										<span style={{ color: '#FF00C3' }}>{emptyFields[1]}</span>,
										and{' '}
										<span style={{ color: '#FF00C3' }}>{emptyFields[2]}</span>{' '}
										fields
									</>
								)}
							</p>
						</>
					)}
					{success.status && (
						<>
							<h2 className="ht3" style={{ color: 'green' }}>
								{success.message}
							</h2>
							<p>You shall get a response shortly...</p>
						</>
					)}
				</Portal>
			)}
		</>
	);
};
