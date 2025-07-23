
import './style.module.scss';
interface TypographyProps<C extends React.ElementType> {
  fontSkin?: 'body-standard' | 'body-small' | 'body-subtle-small' | 'title-display',
  as?: C,
  children: React.ReactNode,
}
export const Typography = <C extends React.ElementType>(props: TypographyProps<C>) => {
  const { fontSkin = "body-standard", as: Component = 'span', children, ...rest } = props;
  return (
    <Component className={`font-skin-${fontSkin}`} {...rest}>
      {children}
    </Component>
  )
}