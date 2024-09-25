import { Link } from "react-router-dom";

interface Button{
    className?: string;
    to: string;
    text: string;
    icon?: React.ReactNode;
}

const Button = ({className, to, text, icon = ''}: Button) => <Link className={`btn px-4 py-1 ${className}`} to={to}>{text} {icon && <span className="inline-block ml-2">{icon}</span>}</Link>

export default Button;