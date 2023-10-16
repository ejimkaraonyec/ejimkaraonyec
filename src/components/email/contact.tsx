import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';

type ContactProps = {
	email: string;
	message: string;
};

export function Contact({ email, message }: ContactProps) {
	return (
		<Html>
			<Head>
				<title>ejimkaraonyec contact message</title>
			</Head>
			<Preview>New message from personal website</Preview>
			<Tailwind>
				<Body className="bg-slate-50 text-slate-900">
					<Container className="mx-auto my-[40px] max-w-2xl rounded p-5">
						<Section className="bg-slate-100 text-card-foreground border shadow-sm rounded-md">
							<Heading className="text-center text-xl font-semibold leading-tight">
								Hello from contact form
							</Heading>
							<Hr className="my-4" />
							<Text className="px-5">{message}</Text>
							<Hr className="my-4" />
							<Text className="px-5">The sender&apos;s email is: {email}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
