import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

const variantClasses = {
  primary: "bg-blue-700 hover:bg-blue-800 text-white shadow-sm hover:shadow-md",
  secondary: "bg-white hover:bg-slate-50 text-blue-700 shadow-sm hover:shadow-md",
  outline: "border-2 border-blue-700 text-blue-700 hover:bg-blue-50",
  white: "bg-white text-blue-700 hover:bg-slate-100 shadow-sm",
  ghost: "border-2 border-white text-white hover:bg-blue-600",
};

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
