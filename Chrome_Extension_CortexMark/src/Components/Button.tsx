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
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyle = {
  primarystyle: "px-2 py-2 rounded-lg font-light flex items-center justify-center",
  secondarystyle: "px-2 py-2 rounded-md font-medium flex items-center justify-center",
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
      {startIcon && <div className="pr-1">{startIcon}</div>}
      {loading ? "Loading..." : text}
      {endIcon && <div className="pl-2">{endIcon}</div>}
    </button>
  );
}
