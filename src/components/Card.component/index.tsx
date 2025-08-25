'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { useUI } from '@/UI';


interface I_Props {
	className?: string | null;
	num?: number | null;
	desc?: string | null;
	title?: string | null;
	variant?: 'primary' | 'accent';
}

export const Card = ({ className, num = 0, desc = null, title = null, variant = 'primary' }: I_Props) => {
	const { Title, Text } = useUI()
	const paddedNum = String(num).padStart(2, '0');

	return (<>
		<div data-var={variant} className={clsx(cls.wrap, className)}>
			<div className={cls.content}>
				<div className={cls.num}><span>{paddedNum}</span></div>
				{title && <Title level={3} lines={1} variant='normal' className={cls.title}>{title}</Title>}
				{desc && <Text variant='desc' className={cls.desc}>{desc}</Text>}
			</div>
		</div>
	</>)
}

export default Card;