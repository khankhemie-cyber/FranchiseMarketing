import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "teal" | "navy" | "orange" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  return (
    <span className={cn(
      "font-sans-ui inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase px-3 py-1.5 rounded-sm",
      {
        "bg-[#C8921A]/10 text-[#C8921A] border border-[#C8921A]/20": variant === "gold",
        "bg-[#1A6478]/10 text-[#1A6478] border border-[#1A6478]/20": variant === "teal",
        "bg-[#1C2B4A]/8 text-[#1C2B4A] border border-[rgba(28,43,74,0.15)]": variant === "navy",
        "bg-[#D84F18]/10 text-[#D84F18] border border-[#D84F18]/20": variant === "orange",
        "bg-white text-[#718096] border border-[rgba(28,43,74,0.1)]": variant === "neutral",
      },
      className
    )}>
      {children}
    </span>
  );
}
