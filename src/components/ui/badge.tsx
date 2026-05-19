import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "teal" | "cyan" | "orange" | "muted";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full text-xs font-medium px-3 py-1 tracking-wide",
        {
          "bg-[#C89520]/10 text-[#C89520] border border-[#C89520]/20": variant === "gold",
          "bg-[#1B6070]/20 text-[#2A9D8F] border border-[#2A9D8F]/20": variant === "teal",
          "bg-[#2A9D8F]/10 text-[#2A9D8F] border border-[#2A9D8F]/20": variant === "cyan",
          "bg-[#D4592A]/10 text-[#D4592A] border border-[#D4592A]/20": variant === "orange",
          "bg-white/5 text-[#9CA3AF] border border-white/10": variant === "muted",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
