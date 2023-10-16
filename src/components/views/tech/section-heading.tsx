import { ReactNode } from 'react';

type SectionHeadingProps = {
	children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
	return <h2 className="text-center font-heading">{children}</h2>;
}
