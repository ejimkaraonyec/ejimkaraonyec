'use client';

import { buttonVariants } from '@/components/ui/button';
import { useSectionInView } from '@/hooks/use-section-inview';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const { ref } = useSectionInView('Skills');

	return (
		<section
			id="skills"
			ref={ref}
			className="grid place-items-center gap-5 pt-6 pb-8 md:pb-14 lg:pb-20 scroll-mt-20"
		>
			<SectionHeading>Skills</SectionHeading>
			<ul className="max-w-5xl flex flex-wrap justify-center gap-2 text-lg">
				{skillsData.map((skill, index) => (
					<motion.li
						className={buttonVariants({
							variant: 'secondary',
							className: 'p-2',
						})}
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
