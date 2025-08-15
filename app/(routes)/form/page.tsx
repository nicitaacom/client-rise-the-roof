"use client"

import { useState } from "react"
import { twMerge } from "tailwind-merge"

export default function FormPage() {
  // 📝 Form state
  const [form, setForm] = useState({
    location: "",
    workType: "",
    budget: "",
    timeline: "",
    removeOld: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // ✏️ Update field
  const updateField = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    // 1. Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  // 🔍 Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!form.location.trim()) newErrors.location = "Location is required"
    if (!form.workType) newErrors.workType = "Please select work type"
    if (!form.budget.trim()) newErrors.budget = "Budget is required"
    if (!form.timeline.trim()) newErrors.timeline = "Timeline is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 📤 Handle submit
  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    // 2. Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log("Form submitted", form)
    setIsSubmitting(false)

    // 3. Show success or redirect
    alert("Quote request submitted successfully!")
  }

  const inputClasses = (hasError: boolean) =>
    twMerge(
      "mt-1 w-full px-3 py-2 rounded-md transition-colors",
      "bg-background/60 border text-sm",
      "text-title placeholder-subTitle/60",
      "focus:outline-none focus:border-brand",
      hasError ? "border-danger/50" : "border-border-color/30",
    )

  const labelClasses = "text-title text-sm"

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div
        className={twMerge(
          "w-full max-w-md mx-auto",
          "bg-foreground/40 backdrop-blur-sm rounded-xl border border-info/20",
          "p-6 space-y-6",
          "shadow-2xl shadow-background/20",
        )}>
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-title">Roofing Quote</h1>
          <p className="text-subTitle/70 text-sm">Get your estimate in 24 hours</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Location */}
          <div>
            <label className="block">
              <span className={labelClasses}>Location *</span>
              <input
                type="text"
                value={form.location}
                onChange={e => updateField("location", e.target.value)}
                placeholder="Leeds, LS1 2AB"
                className={inputClasses(!!errors.location)}
              />
            </label>
            {errors.location && <p className="mt-1 text-danger text-xs">{errors.location}</p>}
          </div>

          {/* Work Type */}
          <div>
            <label className="block">
              <span className={labelClasses}>Work type *</span>
              <select
                value={form.workType}
                onChange={e => updateField("workType", e.target.value)}
                className={inputClasses(!!errors.workType)}>
                <option value="">Select type</option>
                <option value="install">New installation</option>
                <option value="repair">Repair</option>
                <option value="replacement">Replacement</option>
              </select>
            </label>
            {errors.workType && <p className="mt-1 text-danger text-xs">{errors.workType}</p>}
          </div>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block">
                <span className={labelClasses}>Budget *</span>
                <input
                  type="text"
                  value={form.budget}
                  onChange={e => updateField("budget", e.target.value)}
                  placeholder="£3,000-£5,000"
                  className={inputClasses(!!errors.budget)}
                />
              </label>
              {errors.budget && <p className="mt-1 text-danger text-xs">{errors.budget}</p>}
            </div>

            <div>
              <label className="block">
                <span className={labelClasses}>Timeline *</span>
                <input
                  type="text"
                  value={form.timeline}
                  onChange={e => updateField("timeline", e.target.value)}
                  placeholder="2 months"
                  className={inputClasses(!!errors.timeline)}
                />
              </label>
              {errors.timeline && <p className="mt-1 text-danger text-xs">{errors.timeline}</p>}
            </div>
          </div>

          {/* Remove Old & Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block">
                <span className={labelClasses}>Remove old?</span>
                <select
                  value={form.removeOld}
                  onChange={e => updateField("removeOld", e.target.value)}
                  className={inputClasses(false)}>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div>
              <label className="block">
                <span className={labelClasses}>Details</span>
                <input
                  type="text"
                  value={form.details}
                  onChange={e => updateField("details", e.target.value)}
                  placeholder="Additional notes"
                  className={inputClasses(false)}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={twMerge(
            "w-full py-3 px-4 rounded-md font-medium transition-all",
            "bg-brand text-title-foreground",
            "hover:opacity-90 active:scale-[0.98]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "focus:outline-none",
          )}>
          {isSubmitting ? "Processing..." : "Get Quote"}
        </button>
      </div>
    </main>
  )
}
