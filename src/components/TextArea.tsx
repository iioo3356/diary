import clsx from "clsx";
import { useRef } from "react";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ className, ...rest }: TextAreaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = ref.current;
    if (!el) return;

    el.style.height = el.scrollHeight + "px";
  };

  return (
    <textarea
      ref={ref}
      onInput={handleInput}
      className={clsx(
        "text-stone-700 font-medium outline-none",
        "leading-[32px] h-auto resize-none overflow-hidden",
        className,
      )}
      {...rest}
    />
  );
};
