'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { useUI } from '@/UI';
import { Navigation } from '@/components';
import { useRouter } from 'next/navigation';

export const Header = ({ className = null }: any) => {
	const { Icon, Button } = useUI();
	const router = useRouter();


	return (<>
		<header className={clsx(cls.header, 'container', className)}>
			<Icon name='full-logo' />
			<Navigation />
			<Button variant='secondary' size='small' onClick={() => router.push('/auth')}> Log in/Sign up </Button>
		</header>
	</>)
}

export default Header;