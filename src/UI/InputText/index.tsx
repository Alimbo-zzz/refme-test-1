'use client'
import React, { ComponentProps, CSSProperties, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import cls from './style.module.scss';
import { Icon, T_IconNames } from './Icons'
import clsx from 'clsx';
import { AnimatePresence, motion, MotionProps } from "framer-motion";

type T_IconSide = 'L' | 'R';

export type T_InputProps = ComponentProps<'input'> & {
	type?: 'text' | 'email' | 'search' | 'password';
	w?: string;
	"icon-R"?: T_IconNames | ReactElement | boolean;
	"icon-L"?: T_IconNames | ReactElement | boolean;
	onIconClick?: (side: T_IconSide, event: MouseEvent) => void;
	title?: string;
	label?: string | ReactElement;
	message?: string | ReactElement;
	errorMessage?: string;
	invalid?: boolean;
	onInvalid?: (event: React.InvalidEvent<HTMLInputElement>) => void;
}


export const InputText = (props: T_InputProps) => {
	const {
		className,
		children,
		style,
		type = 'text',
		w,
		"icon-L": iconL,
		"icon-R": iconR,
		onIconClick,
		title,
		label,
		message,
		errorMessage,
		invalid,
		onInvalid,
		placeholder = '',
		...rest
	} = props


	const inputRef = useRef<any>(null);
	const IconL = (typeof iconL == 'string' || iconL === true) ? <Icon name={iconL.toString() as T_IconNames} /> : iconL;
	const IconR = (typeof iconR == 'string' || iconR === true) ? <Icon name={iconR.toString() as T_IconNames} /> : iconR;
	const [passwordHide, SET_passwordHide] = useState(true);
	const inpType = (type == 'password') ? (passwordHide ? 'password' : 'text') : type;


	const handleIconClick = (side: T_IconSide) => (e: any) => {
		e.stopPropagation();
		onIconClick?.(side, e);
	};
	const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (onInvalid) onInvalid(e);
	};

	useEffect(() => {
		if (!inputRef.current) return
		inputRef.current.setCustomValidity(invalid ? (errorMessage || 'validate error') : '');
		if (props.value) inputRef.current.reportValidity();
	}, [invalid]);


	const ops = {
		inp: { ...rest, type: inpType, placeholder, },

		wrap: {
			style: {
				width: w,
				...style,
			} as CSSProperties
		},

		iconAnimation: {
			initial: { opacity: 0, scale: 0.8 },
			animate: { opacity: 1, scale: 1 },
			exit: { opacity: 0, scale: 0.5 },
		} as MotionProps,
	}


	return (<>
		<div {...ops.wrap} className={clsx(cls.wrap, className)}>
			<div className={cls.head}>
				{title && <div className={cls.title}>{title}</div>}
				{label && <div className={cls.label}>{label}</div>}
			</div>
			<div className={cls.inp}>
				<AnimatePresence mode="wait">
					{iconL && <motion.div
						key={String(iconL)}
						{...ops.iconAnimation}
						onClick={handleIconClick('L')}
						className={cls.inp__icon}
					> {IconL} </motion.div>}
				</AnimatePresence>

				<input {...ops.inp} ref={inputRef} onInvalid={handleInvalid} />

				<AnimatePresence mode="wait">
					{iconR && <motion.div
						key={String(iconR)}
						{...ops.iconAnimation}
						onClick={handleIconClick('R')}
						className={cls.inp__icon}
					> {IconR} </motion.div>}
					{
						(!iconR && type == 'password') && <motion.div
							key={String(passwordHide)}
							{...ops.iconAnimation}
							onClick={() => SET_passwordHide(prev => !prev)}
							className={cls.inp__icon}
						>
							<Icon name={passwordHide ? 'eye-open' : 'eye-close'} />
						</motion.div>
					}
				</AnimatePresence>
			</div>
			{
				(message || errorMessage) && <div className={cls.foot}>
					<div className={cls.message}>{message}</div>
					<div className={cls.err}>{errorMessage}</div>
				</div>
			}

		</div>
	</>)
}

export default InputText;