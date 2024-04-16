'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PaperPlaneIcon, ReloadIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { getErrorMessage } from '@/lib/utils';
import {
	ContactValidator,
	type ContactPayload,
} from '@/lib/validation/contact';

type ContactProps = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ContactForm({ setOpen }: ContactProps) {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<ContactPayload>({
		resolver: zodResolver(ContactValidator),
		// mode: 'onTouched',
	});

	async function onSubmit(data: ContactPayload) {
		try {
			setIsLoading(true);
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			toast({
				title: 'Message Sent!',
				description:
					'Thank you for contacting me; your message has been delivered and you will receive a feedback shortly.',
			});
		} catch (error: unknown) {
			setIsLoading(true);
			const err = getErrorMessage(error);
			toast({
				title: 'Problem sending message!',
				description: err,
				variant: 'destructive',
			});
		}
		setOpen(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							{error ? (
								<FormMessage>{error.message}</FormMessage>
							) : (
								<FormLabel>Email</FormLabel>
							)}
							<FormControl>
								<Input type="email" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							{error ? (
								<FormMessage>{error.message}</FormMessage>
							) : (
								<FormLabel>Message</FormLabel>
							)}
							<FormControl>
								<Textarea className="resize-none h-52" {...field} />
							</FormControl>
							<FormDescription className="leading-tight">
								Please include your name or / and the name of your organization
								in the message.
							</FormDescription>
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={isLoading}>
					{isLoading ? (
						<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
					) : (
						<PaperPlaneIcon className="mr-2 h-4 w-4" />
					)}
					Send Message
				</Button>
			</form>
		</Form>
	);
}
