import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-stone-500 hover:bg-stone-600 active:bg-stone-600",
        "p-[16px]",
        "text-center text-stone-100 text-[18px]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
