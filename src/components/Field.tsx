import type { AnyFieldApi } from "@tanstack/react-form";
import type { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import { cloneElement } from "react";

interface FieldProps {
  label?: string;
  children: ReactElement<InputHTMLAttributes<HTMLInputElement>>;
  field: AnyFieldApi;
}

const Field = ({ label, field, children }: FieldProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-[12px]" htmlFor={field.name}>
          {label}
        </label>
      )}
      {cloneElement(children, {
        id: field.name,
        name: field.name,
        value: field.state.value,
        onBlur: field.handleBlur,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
          field.handleChange(e.target.value),
      })}
    </div>
  );
};

export default Field;
