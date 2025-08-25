'use client'
import React, { useEffect, useState } from 'react';
import cls from './style.module.scss';
import { LinkCard, TopCompanies } from '@/components';
import { useUI } from '@/UI';
import { InpValidationRule } from '@/UI/InputText';


const Search = () => {
	const { InputText, Title, Select } = useUI();
	const [searchText, SET_searchText] = useState('');



	const searchValidation: InpValidationRule[] = [
		{ minLength: 4 }
	];

	const arr = [{ label: 'item-1-asdasdas asd asd asdddgrew dasd asd', value: '1' }, { label: 'item-2', value: '2' }, { label: 'item-3', value: '3' }];

	return (<>
		<div className={cls.search}>
			<div className={cls.search__head}>
				<Title className={cls.search__title} level={2}>All links</Title>
				<InputText isRecent advice={["apple", "pineapple", "applesauce", "orange", "banana"]} popular={['BMV', 'Scorpion', 'Sub-Zero']} value={searchText} setter={SET_searchText} type='search' showValidation={false} className={cls.search__inp} w='100%' placeholder='Company, service, or keywords' />
				<Select title={'Categories'} className={cls.search__select} isMulti options={arr} />
			</div>
			<div className={cls.search__foot}>
				<Title level={3}>2,654 links</Title>
				<Select className={cls.search__select} options={arr} />
			</div>
		</div>
	</>)
}

export const SearchLinkBlock = (props: any) => {
	const { Button, Icon } = useUI();


	return (<>
		<div className={`${cls.wrap} container`}>
			<Search />
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
				<Button size='big' variant='secondary'>Show more</Button>
			</div>
		</div>
	</>)
}

export default SearchLinkBlock;