/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import styles from './Input.module.css';


type Size = 'XL' | 'big' | 'medium' | 'small' | 'XS';
type Theme = 'primary' | 'secondary' | 'success' | 'error';

interface InputProps {
	value?: string;
	type?: string;
	placeholder?: string;
	fullWidth?: boolean;
	disabled?: boolean;
	size?: Size;
	theme?: Theme;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, type, placeholder, fullWidth, disabled = false, size = 'medium', theme = 'primary', onChange }: InputProps) => {
	let className = styles.input;

	if (size) className += ' ' + styles[size];
	if (theme) className += ' ' + styles[theme];
	if (fullWidth) className += ' ' + styles.fullWidth;
	if (disabled) className += ' ' + styles.disabled;

	return (
		<input value={value} type={type} placeholder={placeholder} className={className} onChange={onChange}/>
	);
};

export default Input;
