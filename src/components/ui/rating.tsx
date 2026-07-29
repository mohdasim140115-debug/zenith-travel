import { Star } from "lucide-react";

export default function Rating({ value, reviewCount }: { value: number; reviewCount?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.round(value) ? "fill-gold-500 text-gold-500" : "fill-mist-200 text-mist-200"}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-navy-900">{value.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-xs text-navy-700/60">({reviewCount.toLocaleString("en-IN")})</span>
      )}
    </div>
  );
}
