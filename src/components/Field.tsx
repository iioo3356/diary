import type { AnyFieldApi } from "@tanstack/react-form";
import type { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import { cloneElement } from "react";

interface FieldProps {
  label?: string;
  children: ReactElement<InputHTMLAttributes<HTMLInputElement>>;
  field: AnyFieldApi;
  requiredMark?: boolean;
}

export const Field = ({ label, field, children, requiredMark }: FieldProps) => {
  return (
    <div className="flex flex-col px-[16px]">
      {label && (
        <div className="text-[12px] leading-[32px] flex gap-[2px]">
          <label className="text-sky-900" htmlFor={field.name}>
            {label}
          </label>
          {requiredMark && <span className="text-red-600">*</span>}
        </div>
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
