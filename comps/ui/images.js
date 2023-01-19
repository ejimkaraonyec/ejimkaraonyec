import Image from 'next/image';
import { useState } from 'react';
import { shimmer, toBase64 } from '../../lib/shimmer';
import { Modal } from '../layout/modal';
import { MenuIcon } from './icons';
import styles from './Images.module.css';

export const Images = ({ slides }) => {
	const [large, setLarge] = useState(false);
	const [allImages, setAllImages] = useState(false);
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
	const handleLarge = () => {
		setLarge(true);
	};
	const handleModal = (e) => {
		if (e.target.className.includes('close')) {
			setLarge(false);
		}
	};
	return (
		<>
			{slides.length === 1 && (
				<section className={styles.imagesOne}>
					<IterateImages
						images={slides.slice(0, 1)}
						handleLarge={handleLarge}
						toSlide={toSlide}
					/>
				</section>
			)}
			{slides.length === 2 && (
				<section className={styles.imagesTwo}>
					<IterateImages
						images={slides.slice(0, 2)}
						handleLarge={handleLarge}
						toSlide={toSlide}
					/>
				</section>
			)}
			{slides.length === 3 && (
				<section className={styles.imagesThree}>
					<IterateImages
						images={slides.slice(0, 3)}
						handleLarge={handleLarge}
						toSlide={toSlide}
					/>
				</section>
			)}
			{slides.length === 4 && (
				<section className={styles.imagesFour}>
					<IterateImages
						images={slides.slice(0, 4)}
						handleLarge={handleLarge}
						toSlide={toSlide}
					/>
				</section>
			)}
			{slides.length > 4 && (
				<section className={`${styles.imagesPlus} ${styles.imagesFour}`}>
					<IterateImages
						images={slides.slice(0, 4)}
						handleLarge={handleLarge}
						toSlide={toSlide}
					/>
					<button
						title="close"
						className={styles.cardSA}
						type="submit"
						onClick={() => setAllImages(true)}
					>
						<MenuIcon />
						Show all
					</button>
				</section>
			)}
			{large && (
				<>
					<Modal handleModal={handleModal}>
						<OneImage current={slides[current]} />
						<button
							onClick={Previous}
							type="button"
							className={`${styles.nav} ${styles.left}`}
						>
							&#10096;
						</button>
						<button
							onClick={Next}
							type="button"
							className={`${styles.nav} ${styles.right}`}
						>
							&#10097;
						</button>
					</Modal>
				</>
			)}
		</>
	);
};

export const AllImages = ({ images }) => {
	return (
		<>
			{images.length === 5 && (
				<section className={styles.imagesFive}>
					<IterateImages images={images} />
				</section>
			)}
			{images.length === 6 && (
				<section className={styles.imagesSix}>
					<IterateImages images={images} />
				</section>
			)}
			{images.length === 7 && (
				<section className={styles.imagesSeven}>
					<IterateImages images={images} />
				</section>
			)}
			{images.length === 8 && (
				<section className={styles.imagesEight}>
					<IterateImages images={images} />
				</section>
			)}
			{images.length === 9 && (
				<section className={styles.imagesNine}>
					<IterateImages images={images} />
				</section>
			)}
			{images.length === 10 && (
				<section className={styles.imagesTen}>
					<IterateImages images={images} />
				</section>
			)}
			{images.length > 10 && (
				<section className={styles.imagesTen}>
					<IterateImages images={images.slice(0, 10)} />
				</section>
			)}
		</>
	);
};
const IterateImages = ({ images, handleLarge, toSlide }) =>
	images.map((image, imageIndex) => {
		const { id, src, title } = image;
		return (
			<figure
				key={id}
				className={styles.imageMore}
				onClick={() => {
					handleLarge();
					toSlide(imageIndex);
				}}
			>
				<Image
					id={id}
					className={styles.fig}
					src={src}
					alt={title}
					fill
					sizes="50vw"
					placeholder="blur"
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(250, 100)
					)}`}
				/>
			</figure>
		);
	});
const OneImage = ({ current }) => {
	return (
		<figure
			style={{
				height: '100%',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Image
				style={{ objectFit: 'contain' }}
				src={current.src}
				alt={current.title}
				fill
				sizes="100vw"
			/>
		</figure>
	);
};
