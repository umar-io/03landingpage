interface ContainerProps{
    children: React.ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}
const Container = ({children, className='', id}: ContainerProps) => {
  return (
    <section className={`${className}`} id={`${id}`}>{children}</section>
  )
}
export default Container