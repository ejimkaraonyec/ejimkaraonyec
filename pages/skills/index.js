import Head from 'next/head';
import { SkillCard } from '../../comps/skills/skills';
import { getData } from '../../lib/fetchUtil';
import styles from '../../styles/Skills.module.css';

export const getStaticProps = async () => {
	const skills = getData('data', 'skills.json');

	return {
		props: { skills },
	};
};

export default function Skills({ skills }) {
	return (
		<>
			<Head>
				<title>ejimkaraonyec | skills</title>
				<meta
					name="description"
					content="Featured skills of Ejimkaraonye, Chukwuemeka, an Academic Researcher, Software Engineer, UI / UX Designer and BI Analyst with years of experience researching, designing, and building data-driven social and software solutions."
				/>
			</Head>
			{/* <h2 className="ht2 title brand">Skills</h2> */}
			<div className={styles.skillCards}>
				{skills.map((skill) => (
					<SkillCard skill={skill} key={skill.id} />
				))}
			</div>
		</>
	);
}
