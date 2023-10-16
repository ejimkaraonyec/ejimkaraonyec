import { Button, buttonVariants } from '@/components/ui/button';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
import { CalendarIcon, DownloadIcon } from '@radix-ui/react-icons';

type CvCardProps = {
	title: string;
	downloadLink: string;
	downloadName: string;
	updateDate: string;
};

type CvDownloadButtonProps = {
	cvCards: CvCardProps[];
};

type SocialLinkProps = {
	href: string;
	srtext: string;
	children: React.ReactNode;
};

const CvCard = ({
	title,
	downloadLink,
	downloadName,
	updateDate,
}: CvCardProps) => (
	<div className="space-y-1">
		<h4 className="text-xs font-semibold">{title}</h4>
		<a href={downloadLink} download={downloadName} className="text-sm">
			{downloadName}
		</a>
		<div className="flex items-center">
			<CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
			<span className="text-xs">{updateDate}</span>
		</div>
	</div>
);

const CvDownloadButton = ({ cvCards }: CvDownloadButtonProps) => (
	<HoverCard>
		<HoverCardTrigger asChild>
			<Button variant="outline">
				<DownloadIcon className="mr-2" />
				cv
			</Button>
		</HoverCardTrigger>
		<HoverCardContent className="max-w-80 grid gap-4 text-muted-foreground text-left">
			{cvCards.map((cvCardProps, index) => (
				<CvCard key={index} {...cvCardProps} />
			))}
		</HoverCardContent>
	</HoverCard>
);

const SocialLink = ({ href, srtext, children }: SocialLinkProps) => (
	<a
		href={href}
		target="_blank"
		rel="noopener"
		className={buttonVariants({ variant: 'outline', size: 'icon' })}
	>
		{children}
		<span className="sr-only">{srtext}</span>
	</a>
);

export { CvDownloadButton, SocialLink };
