import clsx from "clsx";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ className, ...rest }: TextAreaProps) => {
  return <textarea className={clsx(className)} {...rest} />;
};

export default TextArea;
