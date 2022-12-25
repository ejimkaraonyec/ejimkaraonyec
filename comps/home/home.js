import styles from '../../styles/Home.module.css';
import { Digiad } from '../ui/icons';
export function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.text}>
				<p className="ht4 brand">Hello, I&rsquo;m</p>
				<h1 className={styles.title}>Ejimkaraonye, Chukwuemeka</h1>
				<h3 className={styles.textP}>
					A Researcher, Software Engineer, UI / UX Designer and BI Analyst with
					years of experience researching, designing, & building data-driven
					solutions
				</h3>
				<a href="#social" className={`btn-inline ${styles.heroContact}`}>
					Get in Touch
				</a>
			</div>
			<div className={styles.style}>
				<Digiad />
			</div>
		</div>
	);
}