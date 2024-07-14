import { Header } from '@/app/_components/header';
import { cn } from '@/app/_lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});
const sequencia = localFont({
	src: './_assets/fonts/Sequencia.otf',
	style: 'swap',
	variable: '--font-sequencia',
});

export const metadata: Metadata = {
	title: 'Flavori clone',
	description: 'Flavori clone',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn(inter.variable, sequencia.variable)}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
