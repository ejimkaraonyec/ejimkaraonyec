import {
	CodeSandboxLogoIcon,
	CommitIcon,
	StackIcon,
} from '@radix-ui/react-icons';
import React from 'react';

import docuMentor from '@/lib/assets/DocuMentor.png';
import fbcImg from '@/lib/assets/fbc.png';
import taskitlyImg from '@/lib/assets/taskitly.jpeg';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	// {
	// 	name: 'About',
	// 	hash: '#about',
	// },
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	// {
	// 	name: 'Experience',
	// 	hash: '#experience',
	// },
] as const;

export const experiencesData = [
	{
		title: 'Software Engineer',
		location: 'Enugu',
		description:
			'Worked as a full-stack developer and Software Engineer with Des & Dev Nig ltd. I handled projects in FinTech, corporate business and ecommerce; working with technologies such as React, Laravel and MySQL',
		icon: React.createElement(CommitIcon),
		date: '2023',
	},
	{
		title: 'Freelance Developer',
		location: 'Nigeria',
		description:
			'I worked as a front-end developer in different paid and not for profit projects. I motly focused on frontend and used services such as firebase and supabase for the backend. I also upskilled to the full stack.',
		icon: React.createElement(CodeSandboxLogoIcon),
		date: '2017 - 2022',
	},
	{
		title: 'Tech Scholar',
		location: 'Houston, TX',
		description:
			'Discovering the possibilities in software technology, and the exciting world of web development',
		icon: React.createElement(StackIcon),
		date: '2016 - 2017',
	},
];

export const projectsData = [
	{
		title: 'DocuMentor',
		description:
			'A SaaS for scholars and researchers to quickly learn and synthesize knowledge from documents. I worked as a full-stack developer on this',
		tags: ['Next.js', 'PlanetScale', 'TypeScript', 'Tailwind', 'Prisma'],
		imageUrl: docuMentor,
	},
	{
		title: 'FBC',
		description:
			'A Football Betting Community. It has features like betting, chatting and video calls.',
		tags: ['React', 'TypeScript', 'Tailwind', 'Redux', 'Laravel'],
		imageUrl: fbcImg,
	},
	{
		title: 'Taskitly',
		description:
			'A platform for people to pay bills and contract handymen for services. I worked on the web app, mostly on the bill payment solutions.',
		tags: ['React', 'MySQL', 'Tailwind', 'Framer', 'Laravel', 'Redux'],
		imageUrl: taskitlyImg,
	},
] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Solidjs',
	'Git',
	'Tailwind',
	'Prisma',
	'Drizzle',
	'MongoDB',
	'PlanetScale',
	'Redux',
	'Express',
	'PostgreSQL',
	'MySQL',
	'Python',
	'Framer Motion',
] as const;

export const cvAcademics = {
	title: 'academic curriculum vitae',
	downloadLink: '/doc/ejimkaraonye_c_academic_curriculum_vitae.pdf',
	downloadName: 'ejimkaraonye_c_acad_cv',
	updateDate: 'updated august 2023',
};
export const cvTech = {
	title: 'se curriculum vitae',
	downloadLink: '/doc/ejimkaraonye_c_software_engineering_curriculum_vitae.pdf',
	downloadName: 'ejimkaraonye_c_se_cv',
	updateDate: 'updated september 2023',
};
export const cvData = [{ ...cvAcademics }, { ...cvTech }];
