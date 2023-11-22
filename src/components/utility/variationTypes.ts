export type ButtonType = 'danger' | 'success' | 'neutral';
export type Size = 'sm' | 'md' | 'lg';

export const buttonStyles: Record<ButtonType, string> = {
  danger: 'bg-red-500 hover:bg-red-700',
  success: 'bg-slate-500 hover:bg-slate-700',
  neutral: 'bg-slate-500 hover:bg-slate-700',
};
export const sizes: Record<Size, string> = {
  sm: 'py-1 px-2',
  md: 'py-2 px-4',
  lg: 'py-4 px-8',
};
