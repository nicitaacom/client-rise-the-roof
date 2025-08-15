"use client"

import { useState, useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { StarRating } from "./components/StarRating"
import { FeedbackModal } from "./components/FeedbackModal"

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/West+Leeds+Roofing/@53.8031607,-1.7073292,13z/data=!4m12!1m2!2m1!1sroof+repair!3m8!1s0x48795f14ba8a387f:0xfc82f1ad59ee758!8m2!3d53.797314!4d-1.6222247!9m1!1b1!15sCgtyb29mIHJlcGFpcloNIgtyb29mIHJlcGFpcpIBEnJvb2ZpbmdfY29udHJhY3RvcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOd2RXTnFaMmRuUlJBQqoBTwoIL20vMDZoeWQQASoPIgtyb29mIHJlcGFpcigAMh8QASIbpemi3AUZmmj62I2dBCNgrqw46nQUdyuCDK8xMg8QAiILcm9vZiByZXBhaXLgAQD6AQQIABBK!16s%2Fg%2F11l4cvllmf?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D"

export default function ReviewPage() {
  const [rating, setRating] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleRating = (value: number) => {
    setRating(value)

    if (value === 5) {
      // 1. Auto-redirect to Google Reviews for 5 stars
      window.open(GOOGLE_REVIEW_URL, "_blank")
      setShowThankYou(true)
    } else if (value <= 4) {
      // 2. Show feedback modal for lower ratings
      setShowModal(true)
    }
  }

  const handleModalClose = () => {
    setShowModal(false)
    setShowThankYou(true)
  }

  // 3. Reset thank you message after delay
  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowThankYou(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showThankYou])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div
        className={twMerge(
          "w-full max-w-lg mx-auto",
          "bg-foreground/40 backdrop-blur-sm rounded-xl border border-info/20",
          "p-8 text-center space-y-8",
          "shadow-lg shadow-background/20",
        )}>
        {/* Header - 60% visual weight */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-title">Rate Your Experience</h1>
          <p className="text-subTitle/80 text-sm">Your feedback helps us serve you better</p>
        </div>

        {/* Rating Stars - 30% visual weight */}
        <div className="py-4">
          <StarRating rating={rating} onRatingChange={handleRating} className="justify-center" />
        </div>

        {/* Status Messages - 10% visual weight */}
        {showThankYou && (
          <div
            className={twMerge(
              "p-4 rounded-lg",
              "bg-success/20 border border-success/30",
              "animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
            )}>
            <p className="text-success font-medium">
              {rating === 5 ? "Thank you! Google Reviews opened in new tab." : "Thank you for your feedback!"}
            </p>
          </div>
        )}

        {rating && !showThankYou && (
          <div className="text-subTitle text-sm animate-in fade-in-0 duration-200">
            {rating === 5
              ? "Excellent! Opening Google Reviews..."
              : rating >= 3
                ? "Good rating! Any specific feedback?"
                : "We'd love to know how we can improve."}
          </div>
        )}

        {/* Reset Button */}
        {rating && !showModal && (
          <button
            onClick={() => {
              setRating(null)
              setShowThankYou(false)
            }}
            className={twMerge(
              "text-sm text-subTitle/60 hover:text-subTitle transition-colors",
              "underline underline-offset-2",
              "focus:outline-none focus:ring-2 focus:ring-brand/50 rounded",
            )}>
            Change rating
          </button>
        )}
      </div>

      <FeedbackModal isOpen={showModal} onClose={handleModalClose} rating={rating} />
    </main>
  )
}
