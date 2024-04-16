'use client';

import { Link2Icon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

import { cn } from '@/lib/utils';
import { ContactForm } from './contact-form';

const Contact = () => {
	const [open, setOpen] = useState(false);
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button>
					<PaperPlaneIcon className="mr-2" />
					Get in Touch
				</Button>
			</SheetTrigger>
			<SheetContent side={'bottom'}>
				<SheetHeader className="space-y-1">
					<SheetTitle>Send an Email</SheetTitle>
					<SheetDescription className="leading-tight">
						or contact me with your favourite email client at{' '}
						<a
							href="mailto:ejimkaraonye@gmail.com"
							target="_blank"
							rel="noopener"
							className={cn(
								buttonVariants({ variant: 'link', className: 'pl-0' })
							)}
						>
							ejimkaraonyec
							<Link2Icon className="w-3 h-3" />
							<span className="sr-only">ejimkaraonyec@gmail.com</span>
						</a>
					</SheetDescription>
				</SheetHeader>
				<ContactForm setOpen={setOpen} />
				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default Contact;
