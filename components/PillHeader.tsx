import { ReactNode } from "react";

interface PillHeaderProps {
  children: ReactNode;
  bg?: string;
  text?: string;
  size?: "sm" | "md" | "lg";
  center?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-2.5 text-base",
  lg: "px-9 py-3 text-lg",
};

export default function PillHeader({
  children,
  bg = "bg-blue-900",
  text = "text-white",
  size = "md",
  center = false,
  className = "",
}: PillHeaderProps) {
  return (
    <div className={`${center ? "flex justify-center" : "flex"} mb-6 ${className}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full font-bold uppercase tracking-wide ${sizeClasses[size]} ${bg} ${text}`}
      >
        {children}
      </span>
    </div>
  );
}
