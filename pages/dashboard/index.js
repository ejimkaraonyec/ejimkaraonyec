import Head from 'next/head';
import { ListEm, Nav } from '../../comps/dash/ui';
import styles from '../../styles/Dash.module.css';
const Dash = () => {
	return (
		<>
			<Head>
				<title>ejimkaraonyec | dashboard</title>
			</Head>

			<main className={`centered`}>
				<h2 className="ht2 title">Dashboard</h2>
				<div className={` flex-col ${styles.content}`}>
					<Nav />
					<ListEm />
				</div>
			</main>
		</>
	);
};
export default Dash;
