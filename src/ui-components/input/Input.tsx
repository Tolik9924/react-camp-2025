import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';





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

const Input = ({ value, id, label, type, placeholder, fullWidth, disabled = false, size = 'medium', theme = 'primary', onChange }: InputProps) => {

   const className = cn(

    styles.input,
	styles[size],
	styles[theme],
  
   {

    [styles.fullWidth] : fullWidth,
    [styles.disabled] : disabled

    }
    );

	return (
	
	<div>
        {
			label &&(
				<label htmlFor='id'> </label>			
			)
		}

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
