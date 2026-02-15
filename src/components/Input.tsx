import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      className={clsx(
        "py-[4px]",
        "text-stone-700 font-medium outline-none",
        "focus:border-stone-300 focus:shadow-xs",
        className,
      )}
      {...rest}
    />
  );
};

export default Input;
