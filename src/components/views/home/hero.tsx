import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

import { CvDownloadButton, SocialLink } from '@/components/shared/cv';
import { cvData } from '@/lib/data';
import { cn } from '@/lib/utils';
import Contact from './contact';

const Hero = () => {
	return (
		<div className="grid place-items-center gap-6 text-center py-8 md:py-14 lg:py-20">
			<h1 className={cn('text-3xl sm:text-4xl md:text-5xl font-heading')}>
				Ejimkaraoye, Chukwuemeka
			</h1>
			<p className="max-w-lg text-muted-foreground">
				A Researcher, Software Engineer, UI/UX Designer and BI Analyst with
				years of experience researching, designing, & building data-driven
				solutions
			</p>
			<div className="flex flex-col sm:flex-row gap-3">
				<Contact />
				<div className="flex gap-3">
					<CvDownloadButton cvCards={cvData} />
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
		</div>
	);
};

export default Hero;
