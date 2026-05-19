"use client";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "font-sans-ui inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8921A] rounded-sm disabled:opacity-40 disabled:pointer-events-none",
        {
          "bg-[#C8921A] text-white hover:bg-[#B07D14] active:scale-[0.98]": variant === "primary",
          "bg-[#1C2B4A] text-white hover:bg-[#263d6b] active:scale-[0.98]": variant === "dark",
          "bg-white text-[#1C2B4A] border border-[rgba(28,43,74,0.15)] hover:border-[rgba(28,43,74,0.3)]": variant === "secondary",
          "border border-[#C8921A] text-[#C8921A] hover:bg-[#C8921A] hover:text-white": variant === "outline",
          "text-[#1C2B4A] hover:text-[#C8921A] underline-offset-4 hover:underline": variant === "ghost",
        },
        {
          "text-xs px-4 py-2 gap-1.5": size === "sm",
          "text-sm px-5 py-2.5 gap-2": size === "md",
          "text-base px-7 py-3.5 gap-2.5": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
export { Button };
