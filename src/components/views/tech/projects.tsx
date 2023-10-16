'use client';

import { useSectionInView } from '@/hooks/use-section-inview';
import { projectsData } from '@/lib/data';
import React from 'react';
import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
	const { ref } = useSectionInView('Projects', 0.5);

	return (
		<section
			ref={ref}
			id="projects"
			className="grid place-items-center gap-5 pt-6 pb-8 md:pb-14 lg:pb-20 scroll-mt-20"
		>
			<SectionHeading>Projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
