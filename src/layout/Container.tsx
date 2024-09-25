interface ContainerProps{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
const Container = ({children, className=''}: ContainerProps) => {
  return (
    <section className={`${className}`}>{children}</section>
  )
}
export default Container