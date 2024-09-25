interface CardProps{
  className?: string;
  children: React.ReactNode;
}
const Card = ({className, children,}:CardProps) => {
  return (
    <div className={`py-3 px-2 ${className}`} >{children}</div>
  )
}
export default Card