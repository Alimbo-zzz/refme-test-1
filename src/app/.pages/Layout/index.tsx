'use client'
import React from 'react';
import cls from './style.module.scss';
import { Footer, Header } from '@/templates';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

export function Layout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	if (pathname == '/auth') return (children)

	return (<>
		<Header />
		<main>
			{children}
		</main>
		<Footer />
	</>)
}

export default Layout;