import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-border bg-card text-foreground shadow-[var(--shadow-xs)] hover:border-primary/40 hover:bg-muted hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "border border-border bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted",
};

const sizes = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-7 text-base gap-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold select-none",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}