import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

type Size = 'XL' | 'big' | 'medium' | 'small' | 'XS';
type Theme = 'primary' | 'secondary' | 'success' | 'error';
const sizeClasses = {
	XL: styles.XL,
	big: styles.big,
	medium: styles.medium,
	small: styles.small,
    XS: styles.XS,
}

const themeClasses = {
	primary: styles.primary,
	secondary: styles.secondary,
	success: styles.success,
	error: styles.error,
}

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
	const className = cn(
		styles.input,
		sizeClasses[size],
		themeClasses[theme],

		{
			[styles.fullWidth]: fullWidth,
			[styles.disabled]: disabled,
		},
	);

	return (
		<div>
			{label && id && <label htmlFor={id}>{label}</label>}


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
