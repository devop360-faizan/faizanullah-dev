import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="inline-flex items-center gap-2.5 text-primary">
        <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
        {index && (
          <span className="font-mono text-xs font-semibold tracking-widest opacity-80">
            {index}
          </span>
        )}
        <span className="text-xs font-bold uppercase tracking-[0.22em] dark:opacity-90">
          {eyebrow}
        </span>
      </div>

      <h2
        className={cn(
          "max-w-2xl text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-foreground sm:text-4xl md:text-[2.75rem]",
          align === "center" && "mx-auto",
          description && "mb-1"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}