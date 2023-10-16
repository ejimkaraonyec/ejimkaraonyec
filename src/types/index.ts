import { links } from '@/lib/data';

export type SectionName = (typeof links)[number]['name'];
export type ExperienceData = {
	title: string;
	location: string;
	description: string;
	icon: JSX.Element;
	date: string;
};
