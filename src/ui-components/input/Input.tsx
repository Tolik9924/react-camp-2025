import React from 'react';
import styles from './Input.module.css';

type Size = 'XL' | 'big' | 'medium' | 'small' | 'XS';
type Theme = 'primary' | 'secondary' | 'success' | 'error';

interface InputProps {
	value?: string;
	placeholder?: string;
	fullWidth?: boolean;
	size?: Size;
	theme?: Theme;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, placeholder, fullWidth, size = 'medium', theme, onChange }: InputProps) => {
	let className = styles.input;

	if (size) className += ' ' + styles[size];
	if (theme) className += ' ' + styles[theme];
	if (fullWidth) className += ' ' + styles.fullWidth;

	return (
		<input value={value} placeholder={placeholder} className={className} onChange={onChange} />
	);
};

export default Input;
