import Head from 'next/head';
import { SkillDetail } from '../../comps/skills/skills';
import { Inquiry } from '../../comps/ui/ui';
import { getData } from '../../lib/fetchUtil';
// import styles from '../../styles/Skills.module.css';

export const getStaticProps = async (context) => {
	const sid = context.params.sid;
	const skills = getData('data', 'skills.json');
	const selected = skills.find((skill) => skill.id === sid);

	return {
		props: { skill: selected },
	};
};
export const getStaticPaths = async () => {
	const skills = getData('data', 'skills.json');
	const paths = skills.map((skill) => ({ params: { sid: skill.id } }));

	return {
		paths: paths,
		fallback: false,
	};
};
const SkillDetails = ({ skill }) => {
	return (
		<>
			<Head>
				<title>{`Skills | ${skill.title}`}</title>
				<meta name="description" content={skill.detail} />
			</Head>
			<main className="centered">
				<h2 className="ht3 title brand">Skills | {skill.title}</h2>
				<SkillDetail skill={skill} />
				<Inquiry skill={true} interest={skill.title} />
			</main>
		</>
	);
};
export default SkillDetails;
