'use client'
import React from 'react';
import cls from './style.module.scss';
import dynamic from 'next/dynamic';
import { FAQMainBlock } from '@/templates';
import Accordion from '@/components/Accordion.component';
import { useIsDesktop } from '@/hooks';

export const FAQ = (props: any) => {
	const isDesktop = useIsDesktop();

	return (<><div className={cls.wrap}>
		<FAQMainBlock />
		<div data-desktop={isDesktop} className={`${cls.content} container`}>
			<div className={cls.content__block}>
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
			</div>
			<div className={cls.content__block}>
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
				<Accordion title="Some question about our service" text={`To effectively promote your referral links, consider leveraging social media platforms, engaging with relevant online communities, and creating valuable content that highlights the benefits of your offerings. Utilize eye-catching visuals and clear calls to action to encourage clicks.\n\nAdditionally, track your performance using analytics tools to refine your strategy and maximize conversions.`} />
			</div>
		</div>
	</div></>)
}

export default FAQ;