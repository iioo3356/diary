import clsx from "clsx";
import type { ReactNode } from "react";

export const Form = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <form
      className={clsx(
        "flex flex-col gap-[32px] bg-local break-keep",
        className,
      )}
      style={{
        backgroundImage: `
linear-gradient(to right, var(--color-stone-200) 10px, transparent 10px),
linear-gradient(to left, var(--color-stone-200) 10px, transparent 10px),
repeating-linear-gradient(var(--color-stone-200), var(--color-stone-200) 31px, var(--color-stone-400) 31px, var(--color-stone-400) 32px)`,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {children}
    </form>
  );
};
