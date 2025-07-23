import { clsx } from 'clsx';
import React from 'react';
import buttonStyles from './button.module.scss';

interface ButtonProps extends React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  skin?: 'primary' | 'secondary' | 'tertiary' | 'unstyled';
}

export const Button = (props: ButtonProps) => {
  const { children, skin = 'secondary', ...rest } = props;
  return (
    <button {...rest} className={clsx(buttonStyles.button, buttonStyles[`button-skin-${skin}`])}>
      {children}
    </button>
  );
};
