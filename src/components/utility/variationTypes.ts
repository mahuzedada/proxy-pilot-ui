export type ButtonType = 'primary' | 'danger' | 'success' | 'neutral';
export type Size = 'sm' | 'md' | 'lg';

const buttonStyles: Record<ButtonType, string> = {
  primary: 'bg-indigo-500 hover:bg-indigo-700',
  danger: 'bg-red-500 hover:bg-red-700',
  success: 'bg-green-500 hover:bg-green-700',
  neutral: 'bg-slate-500 hover:bg-slate-700',
};

export function getButtonStyle(variant: string = 'neutral') {
  if (variant in buttonStyles) {
    return buttonStyles[variant];
  }
  return `bg-${variant}-500 hover:bg-${variant}-700`;
}

export const sizes: Record<Size, string> = {
  sm: 'py-1 px-2',
  md: 'py-2 px-4',
  lg: 'py-4 px-8',
};
