import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Slider = ({ slides }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = slides.length - 1;

		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index]);

	useEffect(() => {
		let sliderInterval = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(sliderInterval);
		};
	}, [index]);

	return (
		<section className="slider">
			{slides.map((sItem, indexSlide) => {
				const { id, src, title, text } = sItem;

				let slide = 'nextSlide';

				if (indexSlide === index) {
					slide = 'activeSlide';
				}

				if (
					indexSlide === index - 1 ||
					(index === 0 && indexSlide === slides.length - 1)
				) {
					slide = 'lastSlide';
				}
				return (
					<div
						className={`slide ${slide}`}
						key={id}
						// style={{
						// 	backgroundImage: `url(${src})`,
						// 	backgroundRepeat: 'no-repeat',
						// 	backgroundSize: 'cover',
						// }}
					>
						<Image
							src={src}
							width={1040}
							height={585}
							alt={title}
							style={{ width: '100%' }}
							className="slideImg"
							// layout="responsive"
						/>
						<div className="s_content">
							<h3 className="ht4">{title}</h3>
							<p>{text}</p>
						</div>
					</div>
				);
			})}
			<div className="buttons">
				<button
					onClick={() => setIndex(index - 1)}
					type="button"
					className="btn-a aria-left"
					id="prev-a"
					aria-label="prev"
				>
					&#10096;
				</button>
				<button
					onClick={() => setIndex(index + 1)}
					type="button"
					className="btn-a aria-right"
					id="next-a"
					aria-label="next"
				>
					&#10097;
				</button>
			</div>
		</section>
	);
};
