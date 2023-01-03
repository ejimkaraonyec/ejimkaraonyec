import styles from '../../styles/Home.module.css';
import { Digiad } from '../ui/icons';
export function Hero() {
	return (
		<div className={styles.hero}>
			<div className={`flex-col gap-d ${styles.text}`}>
				<p className={`brand ht2 ${styles.heroIntro}`}>Hello, I&rsquo;m</p>
				<div className="flex-col gap-e">
					<h1 className={`ht1 ${styles.title}`}>
						<span className={styles.big_s}>Ejimkaraonye, Chukwuemeka</span>
						<span className={styles.small_s}></span>
					</h1>
					<p className={styles.textP}>
						A Researcher, Software Engineer, UI/UX Designer and BI Analyst with
						years of experience researching, designing, & building data-driven
						solutions
					</p>
				</div>
				<a href="#social" className={`btn-inline ht4 ${styles.heroContact}`}>
					Get in Touch
				</a>
			</div>
			<div className={styles.style}>
				<Digiad />
			</div>
		</div>
	);
}
