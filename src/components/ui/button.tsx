"use client";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89520] rounded-lg disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-[#C89520] text-[#080C18] hover:bg-[#E0AB30] active:scale-[0.98]": variant === "primary",
            "bg-white/10 text-white hover:bg-white/15 border border-white/10": variant === "secondary",
            "text-[#9CA3AF] hover:text-white hover:bg-white/5": variant === "ghost",
            "border border-[#C89520]/40 text-[#C89520] hover:bg-[#C89520]/10 hover:border-[#C89520]/70": variant === "outline",
          },
          {
            "text-xs px-3 py-1.5 gap-1.5": size === "sm",
            "text-sm px-4 py-2 gap-2": size === "md",
            "text-base px-6 py-3 gap-2.5": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
