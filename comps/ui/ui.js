import Image from 'next/image';
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
	} = useFetch('/api/enquiry', 'POST');

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
			interest: interest,
		};
		postData(inquiry);
		if (success.status) {
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
										<span style={{ color: 'var(--brand)' }}>
											{emptyFields[0]}
										</span>{' '}
										field
									</>
								)}
								{emptyFields.length === 2 && (
									<>
										<span style={{ color: 'var(--brand)' }}>
											{emptyFields[0]}
										</span>
										, and{' '}
										<span style={{ color: 'var(--brand)' }}>
											{emptyFields[1]}
										</span>{' '}
										fields
									</>
								)}
								{emptyFields.length === 3 && (
									<>
										<span style={{ color: 'var(--brand)' }}>
											{emptyFields[0]}
										</span>
										,{' '}
										<span style={{ color: 'var(--brand)' }}>
											{emptyFields[1]}
										</span>
										, and{' '}
										<span style={{ color: 'var(--brand)' }}>
											{emptyFields[2]}
										</span>{' '}
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
export const Slider = ({ slides }) => {
	const arrows = {
		position: 'absolute',
		top: '50%',
		height: 'var(--gap-bravo)',
		width: 'var(--gap-bravo)',
		borderRadius: '50%',
		transform: 'translateY(0-50%)',
		fontSize: '20px',
		fontWeight: '900',
		color: 'var(--background)',
		backgroundColor: 'hsl(var(--foredrop) / 0.3)',
		zIndex: 1,
		cursor: 'pointer',
	};
	const rightArrowStyles = {
		...arrows,
		right: '4rem',
	};
	const leftArrowStyles = {
		...arrows,
		left: '4rem',
	};
	const sliderStyles = {
		position: 'relative',
		height: '100%',
	};
	const dotsContainerStyles = {
		display: 'flex',
		justifyContent: 'center',
		gap: 'var(--gap-echo)',
	};
	const dotStyle = {
		marginTop: '3px',
		fontSize: '20px',
		cursor: 'pointer',
		padding: 'var(--gap-echo)',
		borderRadius: '50%',
		backgroundColor: 'var(--foreground-accent)',
	};
	const figStyles = {
		height: '100%',
		position: 'relative',
		overflow: 'hidden',
	};
	const fig = {
		objectFit: 'contain',
	};
	const [current, setCurrent] = useState(0);
	const Previous = () => {
		const isFirst = current === 0;
		const newCurr = isFirst ? slides.length - 1 : current - 1;
		setCurrent(newCurr);
	};
	const Next = () => {
		const isLast = current === slides.length - 1;
		const newCurr = isLast ? 0 : current + 1;
		setCurrent(newCurr);
	};
	const toSlide = (index) => {
		setCurrent(index);
	};

	return (
		<section style={sliderStyles}>
			<figure style={figStyles}>
				<Image
					style={fig}
					src={slides[current].src}
					alt={slides[current].title}
					fill
					sizes="100vw"
				/>
			</figure>
			<div style={dotsContainerStyles}>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						style={dotStyle}
						onClick={() => toSlide(slideIndex)}
					></div>
				))}
			</div>
			<button
				onClick={Previous}
				type="button"
				style={leftArrowStyles}
				className="aria-left"
				aria-label="prev"
			>
				&#10096;
			</button>
			<button
				onClick={Next}
				type="button"
				style={rightArrowStyles}
				className="aria-right"
				aria-label="next"
			>
				&#10097;
			</button>
		</section>
	);
};
