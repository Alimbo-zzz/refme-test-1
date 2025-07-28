'use client'
import React from 'react';
import cls from './style.module.scss';
import { useUI } from '@/UI';
import { Navigation } from '@/components';

export const Footer = (props: any) => {
	const { Button, Icon } = useUI();

	return (<>
		<footer className={cls.footer}>
			<div className={`container ${cls.grid}`}>
				<div className={cls.info}>
					<Icon name='full-logo' />
					<Navigation />
					<div className={cls.socials}>
						<Icon name='instagram' />
						<Icon name='facebook' />
					</div>
				</div>
				<div className={cls.btns}>
					<Button>Get it on Google Play <Icon name='google' /></Button>
					<Button>Get it on App Store <Icon name='apple' /></Button>
				</div>
			</div>
		</footer>
	</>)
}

export default Footer;