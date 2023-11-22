import React from 'react';

type ButtonType = 'danger' | 'success' | 'neutral';
type ButtonSize = 'sm' | 'md' | 'lg';

const buttonStyles: Record<ButtonType, string> = {
  danger: 'bg-red-500 hover:bg-red-700',
  success: 'bg-slate-500 hover:bg-slate-700',
  neutral: 'bg-slate-500 hover:bg-slate-700',
};
const buttonSizes: Record<ButtonSize, string> = {
  sm: 'py-1 px-2',
  md: 'py-2 px-4',
  lg: 'py-4 px-8',
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
}

export default function Button({
  variant = 'neutral',
  size = 'sm',
  children,
  ...props
}: Props) {
  const baseStyle =
    'text-white font-bold rounded focus:outline-none focus:shadow-outline';
  const className = `${baseStyle} ${buttonStyles[variant]} ${buttonSizes[size]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
