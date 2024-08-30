import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-full font-semibold cursor-pointer ',
        {
          'bg-primary text-white hover:border-2 hover:border-red-200':
            variant === 'primary',
          'bg-secondary text-white hover:border-2 hover:border-[#dedede]':
            variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
};

export default Button;