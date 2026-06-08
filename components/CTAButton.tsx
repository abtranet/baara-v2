import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

const variantClasses = {
  primary: "bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-lg",
  secondary: "bg-stone-900 hover:bg-stone-800 text-white shadow-md hover:shadow-lg",
  outline: "border-2 border-amber-600 text-amber-700 hover:bg-amber-50",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
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
  const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

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
