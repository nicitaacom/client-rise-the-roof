import { twMerge } from "tailwind-merge"

interface StarRatingProps {
  rating: number | null
  onRatingChange: (rating: number) => void
  className?: string
}

export function StarRating({ rating, onRatingChange, className }: StarRatingProps) {
  return (
    <div className={twMerge("flex justify-center gap-3", className)}>
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          onClick={() => onRatingChange(star)}
          className={twMerge(
            "text-4xl transition-all duration-200 hover:scale-125 active:scale-95",
            "focus:outline-none focus:ring-2 focus:ring-brand/50 rounded",
            rating && star <= rating ? "text-brand drop-shadow-lg" : "text-subTitle hover:text-brand/70",
          )}
          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}>
          ★
        </button>
      ))}
    </div>
  )
}
