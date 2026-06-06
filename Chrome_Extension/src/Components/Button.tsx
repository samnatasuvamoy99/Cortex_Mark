import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  styleType: "primarystyle" | "secondarystyle";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullwidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const variantclasses = {
  primary: "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 transition-all duration-150 border border-transparent shadow-sm",
  secondary: "bg-purple-100 text-purple-600 hover:bg-purple-200 active:bg-purple-300 transition-all duration-150 border border-purple-200 shadow-sm",
};

const defaultStyle = {
  primarystyle: "px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center justify-center",
  secondarystyle: "px-2.5 py-1.5 rounded-md text-xs font-medium flex items-center justify-center",
};

export function Button({
  variant,
  styleType,
  text,
  startIcon,
  endIcon,
  onClick,
  fullwidth,
  loading = false,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      type="button"
      className={`${variantclasses[variant]} ${defaultStyle[styleType]} ${
        fullwidth ? "w-full" : ""
      } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
    >
      {startIcon && <div className="mr-1 flex items-center">{startIcon}</div>}
      {loading ? "Loading..." : text}
      {endIcon && <div className="ml-1 flex items-center">{endIcon}</div>}
    </button>
  );
}
