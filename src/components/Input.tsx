import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...rest }: InputProps) => {
  return <input className={clsx("", className)} {...rest} />;
};

export default Input;
