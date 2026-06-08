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
  primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg",
  secondary: "bg-blue-900 hover:bg-blue-800 text-white shadow-md hover:shadow-lg",
  outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50",
  white: "bg-white text-blue-900 hover:bg-orange-50 shadow-md",
  ghost: "border-2 border-white text-white hover:bg-white hover:text-blue-900",
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
  const classes = `inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

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
