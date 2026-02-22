import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      className={clsx(
        "py-[4px]",
        "text-stone-700 font-medium outline-none",
        className,
      )}
      {...rest}
    />
  );
};
