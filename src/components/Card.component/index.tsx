'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';


interface I_Props {
	className?: string | null;
	num?: number | null;
	desc?: string | null;
	title?: string | null;
	variant?: 'primary' | 'accent';
}

export const Card = ({ className, num = 0, desc = null, title = null, variant = 'primary' }: I_Props) => {

	const paddedNum = String(num).padStart(2, '0');

	return (<>
		<div data-var={variant} className={clsx(cls.wrap, className)}>
			<div className={cls.num}>{paddedNum}</div>
			{title && <h3 className={cls.title}>{title}</h3>}
			{desc && <p className={cls.desc}>{desc}</p>}
		</div>
	</>)
}

export default Card;