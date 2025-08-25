'use client'
import React from 'react';
import cls from './style.module.scss';
import { AnimatePresence, motion, MotionProps } from "framer-motion";

export const InpFoot = ({ message, validation, shouldShowValidation, isTouched }: any) => {
	const animOpacity = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 }
	} as MotionProps;

	return (<>
		<div className={cls.foot}>
			<AnimatePresence initial={false} mode='wait'>
				{(!isTouched || !shouldShowValidation || message && validation.isValid) && <motion.div key={'message'} {...animOpacity} className={cls.message}>{message}</motion.div>}
				{(isTouched && !validation.isValid && shouldShowValidation) && <motion.div key={'error'} {...animOpacity} className={cls.err}>{validation.errors[0]}</motion.div>}
			</AnimatePresence>
		</div>
	</>)
}

export default InpFoot;