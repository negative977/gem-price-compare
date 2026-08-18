import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-foreground">{item.question}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
