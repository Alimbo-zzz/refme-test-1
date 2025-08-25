'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { motion, MotionProps } from 'framer-motion';

export type T_TextProps =
	React.ComponentProps<'p'> &
	React.ComponentProps<typeof motion.p> & {
		lines?: number;
		variant?: 'body' | 'body-2' | 'desc' | 'desc-2' | 'label' | 'label-2';
		underline?: boolean;
	} & MotionProps;

export const Text = ({ children, lines, style, className, variant = 'desc', underline = false, ...props }: T_TextProps) => {

	return (<>
		<motion.p
			{...props}
			className={clsx(className, cls.text)}
			data-var={variant}
			style={{ '--lines': lines, textDecoration: underline ? 'underline' : 'none', ...style } as React.CSSProperties}
		>
			{children}
		</motion.p>
	</>)
}

export default Text;