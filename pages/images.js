import { AllImages } from '../comps/ui/images';
import { Slider } from '../comps/ui/ui';

const images = [
	{
		id: 1,
		src: '/assets/featured/liblearn/liblearn.png',
		title: 'liblearn',
		text: 'Lorem ipsum and some more',
	},
	{
		id: 2,
		src: '/assets/featured/biri/biri_app.png',
		title: 'liblearn second title',
		text: 'Lorem ipsum and some more',
	},
	{
		id: 3,
		src: '/assets/featured/e-keeps/e-keeps.png',
		title: 'liblearn third title',
		text: 'Lorem ipsum and some more',
	},
	{
		id: 4,
		src: '/assets/featured/mpu/mpu.jpg',
		title: 'liblearn fourth title',
		text: 'Lorem ipsum and some more',
	},
	{
		id: 5,
		src: '/assets/featured/e-keeps/e-keeps.png',
		title: 'liblearn fifth title',
		text: 'Lorem ipsum and some more',
	},
	{
		id: 6,
		src: '/assets/featured/biri/biri_app.png',
		title: 'liblearn second title',
		text: 'Lorem ipsum and some more',
	},
	{
		id: 7,
		src: '/assets/featured/mpu/mpu.jpg',
		title: 'liblearn fourth title',
		text: 'Lorem ipsum and some more',
	},
	{
		id: 8,
		src: '/assets/featured/liblearn/liblearn.png',
		title: 'liblearn',
		text: 'Lorem ipsum and some more',
	},
	{
		id: 9,
		src: '/assets/featured/mpu/mpu.jpg',
		title: 'liblearn fourth title',
		text: 'Lorem ipsum and some more',
	},
	{
		id: 10,
		src: '/assets/featured/liblearn/liblearn.png',
		title: 'liblearn',
		text: 'Lorem ipsum and some more',
	},
];
export default function Images() {
	return (
		<>
			<AllImages images={images} />
			<section style={{ height: '40rem' }}>
				<Slider slides={images} />
			</section>
		</>
	);
}
