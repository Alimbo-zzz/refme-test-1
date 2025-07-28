'use client'
import React from 'react';
import cls from './style.module.scss';
import clsx from 'clsx';
import { motion, MotionProps } from 'framer-motion';

export type T_TextProps =
	React.ComponentProps<'p'> &
	React.ComponentProps<typeof motion.p> & {
		lines?: number;
		size?: 'small' | 'medium' | 'large';
	} & MotionProps;

export const Text = ({ children, lines, style, className, size = 'medium', ...props }: T_TextProps) => {

	return (<>
		<motion.p
			{...props}
			className={clsx(className, cls.text)}
			data-size={size}
			style={{ '--lines': lines, ...style } as React.CSSProperties}
		>
			{children}
		</motion.p>
	</>)
}

export default Text;