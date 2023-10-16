import { cn } from '@/lib/utils';
import React from 'react';

// const Timeline = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
// 	<div
// 		ref={ref}
// 		className={cn('flex flex-col space-y-4', className)}
// 		{...props}
// 	/>
// ));

const Timeline = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & { lineColor?: string }
>(({ className, lineColor = '#FFF', ...props }, ref) => {
	if (typeof window === 'object') {
		document.documentElement.style.setProperty('--line-color', lineColor);
	}

	return (
		<div
			ref={ref}
			className={cn('flex flex-col space-y-4 vertical-timeline', className)}
			{...props}
		/>
	);
});

Timeline.displayName = 'Timeline';

// const TimelineElement = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement> & { date: string; title: string }
// >(({ className, date, title, ...props }, ref) => (
// 	<div ref={ref} className={cn('relative flex flex-col', className)} {...props}>
// 		<div className="absolute top-0 -left-2 w-2 h-full bg-gray-300" />
// 		<div className="w-6 h-6 absolute top-0 -left-4 rounded-full bg-gray-500" />
// 		<div className="ml-8 p-4 bg-white rounded-lg shadow">
// 			<h3 className="font-semibold text-lg mb-1">{title}</h3>
// 			<p className="text-gray-500 text-xs">{date}</p>
// 			<div className="mt-4 text-gray-600">{props.children}</div>
// 		</div>
// 	</div>
// ));

const TimelineElement = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		date: string;
		title: string;
		icon?: JSX.Element;
		position?: string;
		visible?: boolean;
	}
>(
	(
		{ className, date, title, icon, position = '', visible = false, ...props },
		ref
	) => (
		<div
			ref={ref}
			className={cn(
				'relative flex flex-col',
				{
					'vertical-timeline-element--left': position === 'left',
					'vertical-timeline-element--right': position === 'right',
					'vertical-timeline-element--no-children': !props.children,
				},
				className
			)}
			{...props}
		>
			<div className="absolute top-0 -left-2 w-2 h-full bg-gray-300" />
			{icon && (
				<div className="w-6 h-6 absolute top-0 -left-4 rounded-full bg-gray-500">
					{icon}
				</div>
			)}
			<div className="ml-8 p-4 bg-white rounded-lg shadow">
				<h3 className="font-semibold text-lg mb-1">{title}</h3>
				<p className="text-gray-500 text-xs">{date}</p>
				<div className="mt-4 text-gray-600">{props.children}</div>
			</div>
		</div>
	)
);

TimelineElement.displayName = 'TimelineElement';

export { Timeline, TimelineElement };
