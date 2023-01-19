import Link from 'next/link';
import { useStateContext } from '../../hooks/useStateContext';
import { montserrat } from '../../pages/_app';
import { DownloadIcon, LogoIcon } from '../ui/icons';
import { NavLink } from './navlink';

export default function Header() {
	const { home } = useStateContext();
	return (
		<header className={`header ${montserrat.className}`}>
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
						<NavLink href="/skills">Skills</NavLink>
						<NavLink href="/projects">Projects</NavLink>
						{/* <Link href="/skills">Skills</Link> */}
						{/* <Link href="/projects">Projects</Link> */}
					</>
				)}
				<NavLink href="/thoughts">Thoughts</NavLink>
				{/* <Link href="/thoughts">Thoughts</Link> */}
				<a
					href="/assets/doc/ejimkaraonye_c_curriculum_vitae.pdf"
					download="Ejimkaraonye Chukwuemeka CV"
					className="download"
				>
					<DownloadIcon />
					<span>Curriculum Vitae</span>
				</a>
			</nav>
		</header>
	);
}
