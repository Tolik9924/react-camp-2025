import React from 'react';
import './styles.css';

type Size = 'XL' | 'big' | 'medium' | 'small' | 'XS';
type Theme = 'primary' | 'secondary' | 'success' | 'error';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
  size?: Size;
  theme?: Theme;
  id?: string;
}

const sizeClasses: Record<Size, string> = {
  'XL': 'btn-XL',
  'big': 'btn-big',
  'medium': 'btn-medium',
  'small': 'btn-small',
  'XS': 'btn-XS'
};

const themeClasses: Record<Theme, string> = {
  'primary': 'btn-primary',
  'secondary': 'btn-secondary',
  'success': 'btn-success',
  'error': 'btn-error'
};

const Button = ({
  children,
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
  size = 'medium',
  theme = 'primary',
  id
}: ButtonProps) => {
  
  const className = [
    'btn-login',
    sizeClasses[size],
    themeClasses[theme],
    fullWidth ? 'btn-fullWidth' : '',
    disabled ? 'btn-disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      id={id}
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <h1>Button Component Demo</h1>
      
      <div className="demo-section">
        <h2>Sizes:</h2>
        <Button size="XL">XL Button</Button>
        <Button size="big">Big Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="small">Small Button</Button>
        <Button size="XS">XS Button</Button>
      </div>

      <div className="demo-section">
        <h2>Themes:</h2>
        <Button theme="primary">Primary</Button>
        <Button theme="secondary">Secondary</Button>
        <Button theme="success">Success</Button>
        <Button theme="error">Error</Button>
      </div>

      <div className="demo-section">
        <h2>Full Width:</h2>
        <Button fullWidth>Full Width Button</Button>
      </div>

      <div className="demo-section">
        <h2>Disabled:</h2>
        <Button disabled>Disabled Button</Button>
      </div>

      <div className="demo-section">
        <h2>Submit Button:</h2>
        <Button type="submit">Login</Button>
      </div>
    </div>
  );
};

export default App;
