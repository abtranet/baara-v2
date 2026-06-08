import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "amber" | "green" | "stone" | "blue";
}

const variantClasses = {
  amber: "bg-amber-100 text-amber-800",
  green: "bg-emerald-100 text-emerald-800",
  stone: "bg-stone-100 text-stone-700",
  blue: "bg-blue-100 text-blue-800",
};

export default function Badge({ children, variant = "amber" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
