import { useState, useEffect } from "react"
import { twMerge } from "tailwind-merge"

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  rating: number | null
}

export function FeedbackModal({ isOpen, onClose, rating }: FeedbackModalProps) {
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 1. Reset feedback when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFeedback("")
      setIsSubmitting(false)
    }
  }, [isOpen])

  // 2. Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  const handleSubmit = async () => {
    if (!feedback.trim()) return

    setIsSubmitting(true)

    // 3. Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log("Feedback submitted:", { rating, feedback })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className={twMerge(
          "w-full max-w-md",
          "bg-foreground/40 backdrop-blur-sm rounded-xl border border-info/20",
          "p-6 relative",
          "animate-in fade-in-0 zoom-in-95 duration-200",
        )}>
        <button
          onClick={onClose}
          className={twMerge(
            "absolute top-4 right-4",
            "text-subTitle hover:text-title transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-brand/50 rounded",
            "w-8 h-8 flex items-center justify-center",
          )}
          aria-label="Close modal">
          ✕
        </button>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-title">How can we improve?</h2>

          <div className="text-sm text-subTitle">
            You rated us {rating} star{rating !== 1 ? "s" : ""}. Tell us what went wrong.
          </div>

          <textarea
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            placeholder="Your feedback helps us improve our service..."
            className={twMerge(
              "w-full min-h-[120px] p-3 rounded-lg",
              "bg-background/60 border border-border-color/30",
              "text-title placeholder-subTitle/70",
              "focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20",
              "resize-none transition-colors",
            )}
            disabled={isSubmitting}
          />

          <button
            onClick={handleSubmit}
            disabled={!feedback.trim() || isSubmitting}
            className={twMerge(
              "w-full py-3 px-4 rounded-lg font-medium transition-all",
              "bg-brand text-title-foreground",
              "hover:opacity-90 active:scale-[0.98]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "focus:outline-none focus:ring-2 focus:ring-brand/50",
            )}>
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
      </div>
    </div>
  )
}
