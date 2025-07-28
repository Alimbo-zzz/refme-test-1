'use client'
import { configureStore } from '@reduxjs/toolkit';

// slices
import * as base from './base.slice';


const reducers = {
	base: base.default,
};

const actions = {
	...base,
	default: ''
};

const store = configureStore({
	reducer: { ...reducers }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export {
	reducers,
	actions
};