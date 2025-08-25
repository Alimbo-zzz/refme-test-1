'use client'
import React, { useEffect, useState } from 'react';
import cls from './style.module.scss';
import { useUI } from '@/UI';
import { InpValidationRule } from '@/UI/InputText';

export const AuthBlock = (props: any) => {
	const { Title, InputText, Button, Icon } = useUI();
	const [formData, setFormData] = useState<any>({
		email: ['', false],
		password: ['', false],
	});
	const [formValid, SET_formValid] = useState(true);

	useEffect(() => {
		let result = true;
		Object.values(formData).forEach((value: any) => !value[1] ? (result = false) : null);
		SET_formValid(result)
	}, [formData])

	const validations = {
		email: [
			{ required: true, email: true, }
		] as InpValidationRule[],
		password: [
			{ required: true, minLength: 6 }
		] as InpValidationRule[]
	}



	const sendReq = (e: any) => {
		// e.preventDefault();
	}

	const changeInp = (inp: any) => {
		let name = inp.event.target.name;
		// console.log(name, inp.isValid)
		setFormData((prev: any) => ({ ...prev, [name]: [inp.value, inp.isValid] }))
	}

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
				<form onSubmit={sendReq} className={cls.form}>
					<div className={cls.form__legend}>or log in with email</div>
					<InputText w='100%' value={formData.email[0]} onChange={changeInp} name='email' validationRules={validations.email} label='Email' />
					<InputText w='100%' value={formData.password[0]} name='password' onChange={changeInp} validationRules={validations.password} type='password' label='Password' />
					<Button disabled={!formValid} type='submit' variant='secondary' w='100%'>Log in</Button>
				</form>
				<div className={cls.auth__hint}><p>Don't have an account?</p> <a href="/">Sign up</a></div>
			</div>
		</div>
	</>)
}

export default AuthBlock;