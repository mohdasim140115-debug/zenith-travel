import { cn } from "@/lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  maxWidthClassName = "max-w-2xl",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  maxWidthClassName?: string;
}) {
  return (
    <div className={cn(maxWidthClassName, align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
          {align === "center" ? (
            <span className="mx-auto h-px w-8 bg-gold-600" />
          ) : (
            <span className="h-px w-8 bg-gold-600" />
          )}
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 text-balance sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-navy-700/80">{description}</p>}
    </div>
  );
}
