import typographyStyles from './style.module.scss';

// Infer props of any given tag or component
type AsProp<T extends React.ElementType> = {
  as?: T;
};

// Merge own props with intrinsic element/component props
type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProps<T extends React.ElementType, Props = object> = React.PropsWithChildren<
  Props & AsProp<T>
> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

type TypographyProps<T extends React.ElementType = 'span'> = PolymorphicComponentProps<T> & {
  fontSkin?: 'body-standard' | 'body-small' | 'body-subtle-small' | 'title-display';
};

export const Typography = <T extends React.ElementType = 'span'>(props: TypographyProps<T>) => {
  const { fontSkin = 'body-standard', as: Component = 'span', children, ...rest } = props;
  return (
    <Component className={typographyStyles[`font-skin-${fontSkin}`]} {...rest}>
      {children}
    </Component>
  );
};
