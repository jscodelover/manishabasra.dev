import headingStyles from './heading.module.scss';

type HeadingProps = React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>;

export const H1 = ({ children, ...rest }: HeadingProps) => {
  return (
    <h1 className={headingStyles.h1} {...rest}>
      {children}
    </h1>
  );
};
export const H2 = ({ children, ...rest }: HeadingProps) => {
  return (
    <h2 className={headingStyles.h2} {...rest}>
      {children}
    </h2>
  );
};
export const H3 = ({ children, ...rest }: HeadingProps) => {
  return (
    <h3 className={headingStyles.h3} {...rest}>
      {children}
    </h3>
  );
};
export const H4 = ({ children, ...rest }: HeadingProps) => {
  return (
    <h4 className={headingStyles.h4} {...rest}>
      {children}
    </h4>
  );
};
