'use client'
import React from 'react';
import cls from './style.module.scss';
import { useUI } from '@/UI';
import { Card } from '@/components';

export const HeroBlock = (props: any) => {
	const { Title, Text, Button, Icon } = useUI();

	return (<>
		<div className={`${cls.wrap} container`}>
			<div className={cls.grid}>
				<Title lines={3} className={cls.grid__title} level={1} >Start earning and saving money on referral programs easy with our service – RefMe</Title>
				<Text variant='desc' lines={3} className={cls.grid__desc} >You don't need an account to view and use links, but you do need to sign up or log in to post your referral links</Text>
				<Button className={cls.grid__btn} >Post referral link now <Icon name='unlink' /></Button>
			</div>
			<div className={cls.cards}>
				<Card variant='primary' num={1} title={'Use referral links'} desc={'Register on the services or buy products using referral links and receive gifts, money, premium terms, discounts and more'} />
				<Card variant='accent' num={2} title={'Post referral links'} desc={'Post your link on our website and receive the rewards provided by your referral system for everyone who uses the link'} />
			</div>
		</div>
	</>)
}

export default HeroBlock;