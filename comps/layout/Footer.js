import Image from 'next/image';
import Link from 'next/link';
import { montserrat } from '../../pages/_app';
import call from '../../public/assets/socials/call.svg';
import github from '../../public/assets/socials/github.svg';
import linkedin from '../../public/assets/socials/linkedin.svg';
import mail from '../../public/assets/socials/mail.svg';
import whatsapp from '../../public/assets/socials/whatsapp.svg';

const Footer = () => {
	return (
		<footer className={montserrat.className}>
			<div className="social flex-col" id="social">
				<div className="social-links">
					<a
						title="github"
						href="https://github.com/ejimkaraonyec/"
						target="_blank"
						rel="noreferrer"
					>
						<Image src={github} alt="github" />
					</a>
					<a
						title="linkedin social page"
						href="https://www.linkedin.com/in/ejimkaraonyec"
						target="_blank"
						rel="noreferrer"
					>
						<Image src={linkedin} alt="linkedin" />
					</a>
					<a
						title="whatsapp social handle"
						href="https://wa.me/+2348032595696"
						target="_blank"
						rel="noreferrer"
					>
						<Image src={whatsapp} alt="whatsapp" />
					</a>
					<a
						title="email"
						href="mailto:enquiry@ejimkaraonyec.com"
						target="_blank"
						rel="noreferrer"
					>
						<Image src={mail} alt="email" />
					</a>
					<a
						title="call on mobile"
						href="tel:+2348032595696"
						target="_blank"
						rel="noreferrer"
					>
						<Image src={call} alt="phone call" />
					</a>
				</div>
			</div>
			<div className="credit">
				<span>&copy; </span>
				<Link title="ejimkaraonyec" href="/" className="footer-link">
					ejimkaraonyec
				</Link>
				<span> | All rights reserved</span>
			</div>
		</footer>
	);
};
export default Footer;
