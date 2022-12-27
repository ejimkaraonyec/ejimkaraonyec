import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<div className="social flex-col" id="social">
				<div className="social-links">
					<a
						title="github"
						href="https://github.com/ejimkaraonyec/"
						target="_blank"
						rel="noreferrer"
						// aria-label="github"
						// className="aria-right"
					>
						<Image
							width={28}
							height={28}
							src="/assets/socials/github.svg"
							alt="github"
						/>
					</a>
					{/* <a
							title="facebook"
							href="https://web.facebook.com/ejimkaraonyec/"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								width={28}
								height={28}
								src="/assets/socials/facebook.svg"
								alt="facebook"
							/>
						</a> */}
					<a
						title="linkedin social page"
						href="https://www.linkedin.com/in/ejimkaraonyec"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							width={28}
							height={28}
							src="/assets/socials/linkedin.svg"
							alt="linkedin"
						/>
					</a>
					{/* <a
							title="telegram app"
							href="https://t.me/ejimkaraonyec"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								width={28}
								height={28}
								src="/assets/socials/telegram.svg"
								alt="telegram"
							/>
						</a> */}
					<a
						title="whatsapp social handle"
						href="https://wa.me/+2348032595696"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							width={28}
							height={28}
							src="/assets/socials/whatsapp.svg"
							alt="whatsapp"
						/>
					</a>
					<a
						title="email"
						href="mailto:ejimkaraonyec@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							width={28}
							height={28}
							src="/assets/socials/mail.svg"
							alt="email"
						/>
					</a>
					<a
						title="call on mobile"
						href="tel:+2348032595696"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							width={28}
							height={28}
							src="/assets/socials/call.svg"
							alt="phone call"
						/>
					</a>
				</div>
			</div>
			<div className="credit">
				<span>&copy; </span>
				<Link title="ejimkaraonyec" href="/" className="footer-link">
					ejimkaraonyec
				</Link>
				<span>. All rights reserved.</span>
				{/* <p className="builtby">
						<a
							title="ntelitix.io"
							href="https://ejimkaraonyec.com"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
						>
							ntelitix.io
						</a>
					</p> */}
			</div>
		</footer>
	);
};
export default Footer;
