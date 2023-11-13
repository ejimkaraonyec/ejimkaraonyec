import { CodeIcon, StackIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const Paths = () => {
	return (
		<div className="grid place-items-center gap-5 pt-6 pb-8 md:pb-14 lg:pb-20">
			{/* <h2 className={cn('text-primary text-center font-heading')}> */}
			<h2 className={cn('text-center font-heading')}>Paths</h2>
			<div className="max-w-5xl flex flex-wrap gap-4 justify-center">
				<Link
					href={'/academics'}
					className="grainy flex-1 min-w-[250px] rounded-md border border-ring shadow-sm p-6 space-y-2"
				>
					<h3 className={cn('font-bold text-xl font-heading')}>
						<StackIcon className="w-14 h-14 text-primary" />
						Academics & Research
					</h3>
					<p className="text-sm leading-6 text-muted-foreground">
						Exploring societal intricacies: public health, ageing, peace
						dynamics, power alliances, and trade relations.
					</p>
				</Link>
				<Link
					href={'/tech'}
					className="grainy flex-1 min-w-[250px] bg-card text-card-foreground rounded-md border shadow-sm p-6 space-y-2"
				>
					<h3 className={cn('font-bold text-xl font-heading')}>
						<CodeIcon className="w-14 h-14 text-primary" />
						Tech Spectrum
					</h3>
					<p className="text-sm leading-6 text-muted-foreground">
						A tech odyssey: from HTML roots to embracing cutting-edge tools and
						languages in SE, DevOps, UI/UX, BI & AI.
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Paths;
