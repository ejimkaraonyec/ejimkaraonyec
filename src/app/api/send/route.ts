import { NextResponse } from 'next/server';
import { createElement } from 'react';

import { Contact } from '@/components/email/contact';
import { resend } from '@/lib/resend';
import { ContactValidator } from '@/lib/validation/contact';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { email, message } = ContactValidator.parse(body);

		// not necessarily
		if (!message || !email) {
			return new NextResponse('Please revise the details provided', {
				status: 400,
			});
		}

		await resend.emails.send({
			from: 'Contact Form <onboarding@resend.dev>',
			to: 'ejimkaraonyec@gmail.com',
			subject: 'Message from contact form',
			reply_to: email,
			react: createElement(Contact, { message: message, email: email }),
		});

		return new NextResponse(null, { status: 200 });
		// return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
