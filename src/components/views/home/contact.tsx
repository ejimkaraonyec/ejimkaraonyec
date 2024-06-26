'use client';

import { Link2Icon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';

import { cn } from '@/lib/utils';
import { ContactForm } from './contact-form';

const Contact = () => {
	const [open, setOpen] = useState(false);
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button>
					<PaperPlaneIcon className="mr-2" />
					Get in Touch
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="space-y-1">
					<DrawerTitle>Send an Email</DrawerTitle>
					<DrawerDescription className="leading-none">
						Fill out the form below or contact me with your favourite email
						client at{' '}
						<a
							href="mailto:ejimkaraonye@gmail.com"
							target="_blank"
							rel="noopener"
							className={cn(
								buttonVariants({ variant: 'link', className: 'pl-0' })
							)}
						>
							ejimkaraonyec@gmail.com
							<Link2Icon className="w-3 h-3" />
							<span className="sr-only">ejimkaraonyec@gmail.com</span>
						</a>
					</DrawerDescription>
				</DrawerHeader>
				<ContactForm setOpen={setOpen} />
				<DrawerFooter></DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default Contact;
