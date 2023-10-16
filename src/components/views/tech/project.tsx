'use client';

import { buttonVariants } from '@/components/ui/button';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			className="max-w-5xl group mb-3 sm:mb-8 last:mb-0"
		>
			<section className="flex bg-card text-card-foreground border rounded-md shadow-sm overflow-hidden sm:h-[20rem] hover:bg-card-foreground/5 transition sm:group-even:flex-row-reverse">
				<div className="sm:flex-1 flex flex-col justify-center p-6 h-full gap-3">
					<h3 className="font-heading font-bold text-xl">{title}</h3>
					<p>{description}</p>
					<ul className="flex flex-wrap gap-2">
						{tags.map((tag, index) => (
							<li
								className={buttonVariants({
									variant: 'secondary',
									className: 'p-2 text-xs',
								})}
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<div className="hidden sm:block sm:flex-1 relative">
					<Image
						src={imageUrl}
						alt="Project I worked on"
						quality={95}
						className="absolute top-8 -right-[10%] w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-[10%]"
					/>
				</div>
			</section>
		</motion.div>
	);
}
