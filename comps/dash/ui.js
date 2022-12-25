import styles from '../../styles/Dash.module.css';
import { AddIcon, EditDashIcon, TuneIcon } from '../ui/icons';

export const Nav = () => {
	return (
		<div className={`flex ${styles.nav}`}>
			<button className={`flex ht6 ${styles.navBtn}`}>
				<EditDashIcon />
				Create new skill card
			</button>
			<button className={`flex ht6 ${styles.navBtn}`}>
				<EditDashIcon />
				Create new project
			</button>
			<button className={`flex ht6 ${styles.navBtn}`}>
				<EditDashIcon />
				Share a thought
			</button>
		</div>
	);
};

export const ListEm = () => {
	return (
		<div className={`flex ${styles.listem}`}>
			<button className={`flex ht5 ${styles.listemBtn}`}>
				<TuneIcon />
				List Featured Projects
			</button>
			<button className={`flex ht5 ${styles.listemBtn}`}>
				<TuneIcon />
				List Shared Thoughts
			</button>
		</div>
	);
};

export const Skills = ({ skills }) => {
	return (
		<div>
			{skills &&
				skills.map((skill) => (
					<div key={skill.id} className={styles.skillCard}>
						<h3 className="ht4 title">{skill.title}</h3>
						<p className="ht5 just-right">{skill.quals}</p>
						<button className={`ht6 flex ${styles.edditBtn}`}>
							edit
							<EditDashIcon />
						</button>
					</div>
				))}
		</div>
	);
};
