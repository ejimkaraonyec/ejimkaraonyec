import Link from 'next/link';
import { useEffect } from 'react';
import { Hero } from '../comps/home/home';
import { ProjectCard } from '../comps/projects/projects';
import { SkillCard } from '../comps/skills/skills';
import { useStateContext } from '../hooks/useStateContext';
import { getData } from '../lib/fetchUtil';

import styles from '../styles/Home.module.css';
import projectStyles from '../styles/Projects.module.css';
import skillStyles from '../styles/Skills.module.css';

export const getStaticProps = async () => {
	const projects = getData('data', 'projects.json');
	const skills = getData('data', 'skills.json');
	return {
		props: { projects, skills },
	};
};
export default function Home({ projects, skills }) {
	const { dispatch } = useStateContext();

	useEffect(() => {
		dispatch({ type: 'IS_HOME' });

		return () => dispatch({ type: 'NOT_HOME' });
	}, [dispatch]);

	return (
		<>
			<Hero />
			<section className={`content ${styles.skills}`} id="skills">
				<h2 className={`ht2 brand title just-center ${styles.heading}`}>
					Skills
				</h2>
				<div className={skillStyles.skillCards}>
					{skills.map((skill) => (
						<SkillCard skill={skill} key={skill.id} />
					))}
				</div>
			</section>
			<section className={`content ${styles.projects}`} id="projects">
				<h2 className={`ht2 brand title just-center ${styles.heading}`}>
					Featured Projects
				</h2>
				<div className={projectStyles.projectCards}>
					{projects.length > 4 &&
						projects
							.slice(0, 4)
							.map((project) => (
								<ProjectCard project={project} key={project.id} />
							))}
					{projects.length <= 4 &&
						projects.map((project) => (
							<ProjectCard project={project} key={project.id} />
						))}
				</div>
				{projects.length > 4 && (
					<Link href="/projects" className={`ht5 btn-inline ${styles.morePs}`}>
						see all featured
					</Link>
				)}
			</section>
		</>
	);
}
