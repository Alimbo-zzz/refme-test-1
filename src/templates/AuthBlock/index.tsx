'use client'
import React, { useEffect, useState } from 'react';
import cls from './style.module.scss';
import { useUI } from '@/UI';
import { InpValidationRule } from '@/UI/InputText';
import { useRouter } from 'next/navigation';

export const AuthBlock = (props: any) => {
	const router = useRouter();
	const { Title, Text, InputText, InputCode, Button, Icon } = useUI();
	const [formData, setFormData] = useState<any>({
		email: ['', false],
		password: ['', false],
	});
	const [formValid, SET_formValid] = useState(true);
	const [type, SET_type] = useState<'sign-in' | 'sign-up' | 'code' | 'username'>('sign-in');

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
		e.preventDefault();

		if (type == 'sign-in') return router.push('/');
		if (type == 'username') return router.push('/');
		if (type == 'sign-up') return SET_type('code');
	}

	const changeInp = (inp: any) => {
		let name = inp.event.target.name;
		// console.log(name, inp.isValid)
		setFormData((prev: any) => ({ ...prev, [name]: [inp.value, inp.isValid] }))
	}

	const checkValid = async (code: any) => {

		if (code == '1111') setTimeout(() => {
			SET_type('username')
		}, 500);;
		return code == '1111'
	};

	const titleObj = {
		"sign-in": "Welcome to RefMe",
		"sign-up": "Create your RefMe account",
		"code": "Enter verification code",
		"username": "Enter your Username",
	} as any;

	const textObj = {
		"sign-in": "or log in with email",
		"sign-up": "or create account with email",
		"code": <>We`ve sent a code to <b>{formData?.email}</b></>,
		"username": "Your username will be displayed when you post links",
	} as any;

	const hintObj = {
		"sign-in": <><p>Don't have an account?</p> <b onClick={() => SET_type('sign-up')}>Sign up</b></>,
		"sign-up": <><p>Already have an account?</p> <b onClick={() => SET_type('sign-in')}>Log in</b></>,
		"code": <><p>Didn't get a code even after resending?</p> <b>Contact support</b></>,
		// "username": <><p>Don't have an account?</p> <b>Sign up</b></>,
	} as any;

	const submitObj = {
		"sign-in": "Log in",
		"sign-up": "Create new account",
		"code": "Resend a code",
		"username": "Save",
	} as any;


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
				{type == 'code' && <div className={cls.auth__back}>
					<Button onClick={() => SET_type('sign-up')} size='small' variant='secondary' className={cls.btn}><Icon name='back' /> Change email</Button>
				</div>}
				<div className={cls.auth__head}>
					<Title className={cls.auth__title} level={2}>{titleObj[type]}</Title>
					{(['code', 'username'].includes(type)) && <Text className={cls.text}>{textObj[type]}</Text>}
				</div>
				{(['sign-up', 'sign-in'].includes(type)) && <div className={cls.auth__btns}>
					<Button className={cls.btn} variant='primary'>Log in with Google <Icon name='google-fill' /></Button>
					<Button className={cls.btn} variant='primary'>Log in with Apple <Icon name='apple' /></Button>
				</div>}
				<form onSubmit={sendReq} className={cls.form}>
					{(['sign-up', 'sign-in'].includes(type)) && <div className={cls.form__legend}>{textObj[type]}</div>}
					{type == 'code' && <InputCode className={cls.code} checkValid={checkValid} />}
					{type == 'username' && <div className={cls.username}>
						<InputText w='100%' label='Username' />
						<p className={cls.username__desc}>You can use a–z, 0-9 and _ <br />The minimum length is 5 simbols</p>
					</div>}
					{(['sign-up', 'sign-in'].includes(type)) && <>
						<InputText w='100%' value={formData.email[0]} onChange={changeInp} name='email' validationRules={validations.email} label='Email' />
						<InputText w='100%' value={formData.password[0]} forgot={type == 'sign-in' ? 'link' : ''} name='password' onChange={changeInp} validationRules={validations.password} type='password' label='Password' />
					</>}
					{type == 'sign-up' && <InputText w='100%' name='password' onChange={changeInp} type='password' label='Confirm password' />}
					<Button disabled={['sign-up', 'sign-in'].includes(type) && !formValid} type='submit' variant={['sign-up', 'sign-in'].includes(type) ? 'secondary' : 'primary'} w='100%'>{submitObj[type]}</Button>
				</form>
				<div className={cls.auth__hint}>{hintObj[type]}</div>
				<div className={cls.auth__foot}>
					{(['sign-up', 'sign-in'].includes(type)) && <div className={cls.form__legend}>{textObj[type]}</div>}
					{(['sign-up', 'sign-in'].includes(type)) && <div className={cls.auth__btns}>
						<Button className={cls.btn} variant='primary'>Google <Icon name='google-fill' /></Button>
						<Button className={cls.btn} variant='primary'>Apple <Icon name='apple' /></Button>
					</div>}
					<div className={cls.previewInfo}>
						<div className={cls.previewInfo__desc}>
							<span>2025 ©</span>
							<p>All rights reserved</p>
						</div>

						<Icon name='full-logo' />
					</div>
				</div>
			</div>
		</div>
	</>)
}

export default AuthBlock;