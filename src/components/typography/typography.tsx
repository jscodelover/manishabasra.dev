import { JSX } from 'react';
import typographyStyles from './style.module.scss';
interface TypographyProps {
  fontSkin?: 'body-standard' | 'body-small' | 'body-subtle-small' | 'title-display';
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}
export const Typography = (props: TypographyProps) => {
  const { fontSkin = 'body-standard', as: Component = 'span', children, ...rest } = props;
  return (
    <Component className={typographyStyles[`font-skin-${fontSkin}`]} {...rest}>
      {children}
    </Component>
  );
};
