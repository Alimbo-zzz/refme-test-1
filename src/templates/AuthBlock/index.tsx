'use client'
import React from 'react';
import cls from './style.module.scss';
import { useUI } from '@/UI';

export const AuthBlock = (props: any) => {
	const { Title, InputText, Button, Icon } = useUI();

	return (<>
		<div className={cls.wrap}>
			<div className={cls.preview}>
				<div className={cls.preview__desc}>
					<span>2025 ©</span>
					<p>All rights reserved</p>
				</div>

				<Icon name='full-logo' />

				<img src="/images/refme-preview.png" alt="preview" />

			</div>
			<div className={cls.auth}>
				<Title className={cls.auth__title} level={2}>Welcome to RefMe</Title>
				<div className={cls.auth__btns}>
					<Button variant='primary'>Log in with Google <Icon name='google' /></Button>
					<Button variant='primary'>Log in with Apple <Icon name='apple' /></Button>
				</div>
				<form className={cls.form}>
					<div className={cls.form__legend}>or log in with email</div>
					<InputText errorMessage='error email' required w='100%' type='email' title='Email' />
					<InputText errorMessage='error password' required w='100%' type='password' title='Password' />
					<Button type='submit' variant='secondary' w='100%'>Log in</Button>
				</form>
				<div className={cls.auth__hint}><p>Don't have an account?</p> <a href="/">Sign up</a></div>
			</div>
		</div>
	</>)
}

export default AuthBlock;