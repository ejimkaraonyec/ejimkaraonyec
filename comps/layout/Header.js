import Link from 'next/link';
import { useStateContext } from '../../hooks/useStateContext';
import { DownloadIcon, LogoIcon } from '../ui/icons';

export default function Header() {
	const { home } = useStateContext();
	return (
		<header className="header">
			{/* <div className="content"> */}
			<Link href="/" className="flex">
				<LogoIcon />
			</Link>
			<nav className="nav">
				{home && (
					<>
						<a href="#skills">Skills</a>
						<a href="#projects">Projects</a>
					</>
				)}
				{!home && (
					<>
						<Link href="/skills">Skills</Link>
						<Link href="/projects">Projects</Link>
					</>
				)}
				<Link href="/thoughts">Thoughts</Link>
				<a
					href="/assets/doc/ejimkaraonye_c_curriculum_vitae.docx"
					download="Ejimkaraonye Chukwuemeka CV"
					className="download"
				>
					<DownloadIcon />
					<span>Curriculum Vitae</span>
				</a>
			</nav>
			{/* </div> */}
		</header>
	);
}
