interface CardProps{
  className?: string;
  children: React.ReactNode;
  direction?: string;
}
const Card = ({className, children, direction}:CardProps) => {
  return (
    <div className={`py-3 px-2 ${className}`} data-aos={`${direction}`}>{children}</div>
  )
}
export default Card