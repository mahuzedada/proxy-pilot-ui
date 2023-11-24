import React from 'react';
import { getButtonStyle, ButtonType, Size, sizes } from './variationTypes';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: Size;
}

export default function Button({
  variant = 'neutral',
  size = 'sm',
  children,
  ...props
}: Props) {
  const baseStyle =
    'text-white font-bold rounded focus:outline-none focus:shadow-outline';
  const className = `${baseStyle} ${getButtonStyle(variant)} ${sizes[size]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
