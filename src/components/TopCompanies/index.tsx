'use client'
import React from 'react';
import cls from './style.module.scss';
import { v4 as setId } from 'uuid';
import { useUI } from '@/UI';

export const TopCompanies = (props: any) => {
	const { Title, Icon } = useUI();

	const items = [
		{ id: setId(), logo: '/images/company logo/r.png', name: 'Revolut Bank', desc: '£60 for new users through the referral program' },
		{ id: setId(), logo: '/images/company logo/y.png', name: 'Yandex', desc: null },
		{ id: setId(), logo: '/images/company logo/w.png', name: 'Wolt', desc: null },
		{ id: setId(), logo: '/images/company logo/t.png', name: 'T-Bank', desc: 'Money for new clients, free communication services or promotions of companies and more' },
		{ id: setId(), logo: '/images/company logo/hsbc.png', name: 'HSBC', desc: null },
		{ id: setId(), logo: '/images/company logo/ae.png', name: 'American Express', desc: null },
		{ id: setId(), logo: '/images/company logo/a.png', name: 'Airbnb', desc: null },
		{ id: setId(), logo: '/images/company logo/pp.png', name: 'PayPal', desc: null },
	] as const;


	return (<>
		<div className={cls.wrap}>
			<div className={cls.head}>
				<Title level={2}>Top companies</Title>
				<a href="/companies">View all <Icon name='arrow' /></a>
			</div>
			<div className={cls.grid}>
				{items.map(el => <div className={cls.item} key={el.id} data-desc={el.desc ? true : false}>
					<img src={el.logo} />
					<h4>{el.name}</h4>
					{el.desc && <p>{el.desc}</p>}
				</div>)}

			</div>
		</div>
	</>)
}

export default TopCompanies;