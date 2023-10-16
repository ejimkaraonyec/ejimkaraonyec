'use client';

import { CvDownloadButton, SocialLink } from '@/components/shared/cv';
import { useSectionInView } from '@/hooks/use-section-inview';
import { cvTech } from '@/lib/data';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Contact from '../home/contact';

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5);

	return (
		<section
			ref={ref}
			id="home"
			className="grid place-items-center gap-6 text-center py-14 lg:py-20"
		>
			<h1 className="max-w-5xl pt-5 text-4xl sm:text-5xl md:text-6xl font-bold">
				Navigate the Tech Spectrum: From Code Foundations to AI Frontiers
			</h1>
			<p className="max-w-5xl text-muted-foreground">
				Welcome to my digital workshop, a chronicle of my voyage through the
				pulsating heart of tech innovation. Here, you&apos;ll discover a vibrant
				portfolio of web creations, each a testament of possibilities enabled by
				contemporary technologies like React, Next.js, and Laravel. Delve deeper
				and you&apos;ll find new appreciation for DevOps, UI/UX design, and
				Artificial Intelligence. Together, let&apos;s traverse the labyrinth of
				these technologies, confront their challenges, and unlock the magic they
				can conjure.
			</p>
			<div className="flex flex-col sm:flex-row gap-3">
				<Contact />
				<div className="flex gap-3">
					<CvDownloadButton cvCards={[cvTech]} />
					<SocialLink
						href="https://github.com/ejimkaraonyec"
						srtext="GitHub page"
					>
						<GitHubLogoIcon className="w-5 h-5" />
					</SocialLink>
					<SocialLink
						href="https://www.linkedin.com/in/ejimkaraonyec"
						srtext="linkedIn page"
					>
						<LinkedInLogoIcon className="w-5 h-5" />
					</SocialLink>
				</div>
			</div>
		</section>
	);
}
