import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import './globals.css';

import Navbar from './(root)/components/navbar';
import SideMenu from '@/app/(root)/components/sidemenu';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider appearance={{ baseTheme: dark }}>
			<html lang="en" suppressHydrationWarning>
				<body className={`${inter.className}`}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						storageKey="fakeflix-theme"
					>
						<header>
							<Navbar />
						</header>
						<div className="w-full flex flex-col sm:flex-row bg-colors-dark-400 relative ">
							<aside className=" bg-colors-dark-500 w-full h-[60px] text-xs sm:text-base overflow-hidden sm:h-screen sm:w-1/4 md:max-w-[200px] md:drop-shadow shadow-inner shadow-colors-dark-300  hover:shadow-colors-dark-200  transition-all duration-700 ease-in-out">
								<SideMenu />
							</aside>
							<main className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-colors-dark-200 via-colors-dark-400 to-colors-dark-600 flex min-h-screen flex-col m-auto w-full ">
								{children}
							</main>
						</div>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
