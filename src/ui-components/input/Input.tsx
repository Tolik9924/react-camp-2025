/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import styles from './Input.module.css';

type Size = 'XL' | 'big' | 'medium' | 'small' | 'XS';
type Theme = 'primary' | 'secondary' | 'success' | 'error';

interface InputProps {
	value?: string;
	id?: string;
	label?: string;
	type?: string;
	placeholder?: string;
	fullWidth?: boolean;
	disabled?: boolean;
	size?: Size;
	theme?: Theme;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/* додати логыки для кнопки " очистити " та іконки (лейбла) */

const Input = ({
	value,
	id,
	label,
	type,
	placeholder,
	fullWidth,
	disabled = false,
	size = 'medium',
	theme = 'primary',
	onChange,
}: InputProps) => {
	let className = styles.input;

	if (size) className += ' ' + styles[size];
	if (theme) className += ' ' + styles[theme];
	if (fullWidth) className += ' ' + styles.fullWidth;
	if (disabled) className += ' ' + styles.disabled;

	return (
		<div>
			{label && <label htmlFor="id"> </label>}

			<input
				value={value}
				id={id}
				type={type}
				placeholder={placeholder}
				className={className}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
