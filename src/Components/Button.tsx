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
          'bg-primary text-white border-2 border-transparent hover:border-2 hover:border-red-400 transition-all duration-300 shadow-[inset_0px_-6px_4px_rgba(165,120,10,0.22),0_4px_10px_rgba(0,0,0,0.12)]':
            variant === 'primary',
          'bg-secondary text-white border border-transparent hover:border-[1px] hover:border-[#404040]':
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