import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

interface HeaderProps {
  title?: string;
  prefix?: ReactNode | "back";
  suffix?: ReactNode;
}

export const Header = ({ title, prefix, suffix }: HeaderProps) => {
  return (
    <div
      className={clsx(
        "fixed top-0 w-full max-w-lg mx-auto z-50",
        "border-b px-[16px] py-[12px] border-b-stone-400 bg-stone-500 text-stone-100",
        "flex gap-[8px] items-center justify-between",
      )}
    >
      <div className="w-[24px]">
        {prefix === "back" ? (
          <Link to="..">
            <ChevronLeft />
          </Link>
        ) : (
          prefix
        )}
      </div>
      <div className="line-clamp-1">{title}</div>
      <div className="w-[24px]">{suffix}</div>
    </div>
  );
};
