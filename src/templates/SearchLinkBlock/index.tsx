'use client'
import React, { useState } from 'react';
import cls from './style.module.scss';
import { LinkCard, TopCompanies } from '@/components';
import { useUI } from '@/UI';

export const SearchLinkBlock = (props: any) => {
	const { Button, Icon, InputText, Title } = useUI();

	return (<>
		<div className={`${cls.wrap} container`}>
			<div className={cls.search}>
				<Title className={cls.search__title} level={2}>All links</Title>
				<InputText w='100%' placeholder='Company, service, or keywords' icon-L={'search'} />
			</div>
			<div className={cls.top}>
				<div className={cls.top__pin}>
					<TopCompanies />
					<Button w='100%' variant='accent'>Post referral link <Icon name='plus' /></Button>
				</div>
			</div>
			<div className={cls.cards}>
				<LinkCard />
				<LinkCard />
				<LinkCard />
				<LinkCard />
				<LinkCard />
				<LinkCard />
			</div>
		</div>
	</>)
}

export default SearchLinkBlock;