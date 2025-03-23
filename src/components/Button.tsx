import React, { ButtonHTMLAttributes } from 'react';
import Loading from './Loading';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-purple-500 hover:bg-purple-600 text-white';
      case 'outline':
        return 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20';
      case 'ghost':
        return 'bg-transparent text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'success':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'primary':
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'py-1 px-3 text-sm';
      case 'large':
        return 'py-3 px-6 text-lg';
      case 'medium':
      default:
        return 'py-2 px-4';
    }
  };

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 disabled:opacity-60 disabled:cursor-not-allowed';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${widthClass} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <Loading size="small" color={variant === 'outline' || variant === 'ghost' ? 'primary' : 'white'} />
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button; 