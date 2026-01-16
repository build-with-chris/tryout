import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import './QuickAnswerClosing.css'

// Accordion-Items Konfiguration
const quickAnswers = [
  {
    id: 'next-step',
    title: 'Wie läuft der nächste Schritt?',
    answer: 'Du bekommst hier Orientierung. Den finalen Bewerbungsweg erklären wir dir transparent auf der nächsten Seite.'
  },
  {
    id: 'quereinsteiger',
    title: 'Kann ich als Quereinsteiger starten?',
    answer: 'Ja. Viele starten ohne Vorerfahrung und wachsen bei uns Schritt für Schritt rein.'
  },
  {
    id: 'arbeitsmodelle',
    title: 'Welche Arbeitsmodelle gibt\'s?',
    answer: 'Von Minijob bis Vollzeit – je nach Rolle. Wir zeigen dir passende Optionen pro Bereich.'
  }
]

// CTA-Links Konfiguration
const ctaLinks = {
  primary: {
    text: 'Kontaktperson finden',
    href: '/karriere/kontakt'
  },
  secondary: [
    {
      text: 'Alle FAQs',
      href: '/karriere/faq'
    },
    {
      text: 'So geht\'s weiter',
      href: '/karriere/so-gehts-weiter'
    }
  ]
}

const QuickAnswerClosing = ({ className }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleAccordion(index)
    }
  }

  return (
    <section className={cn('quick-answer-closing', className)}>
      {/* Hintergrundbild-Bereich */}
      <div className="quick-answer-closing-background">
        {/* Optional: Hintergrundbild kann hier eingefügt werden */}
        <div className="quick-answer-closing-overlay" aria-hidden="true" />
      </div>

      {/* Card-Container */}
      <div className="quick-answer-closing-container">
        <div className="quick-answer-closing-card">
          {/* Headline */}
          <h2 className="quick-answer-closing-headline">
            Noch kurz unsicher? Klären wir.
          </h2>

          {/* Subline */}
          <p className="quick-answer-closing-subline">
            Drei Fragen, die fast immer kommen – hier die kurzen Antworten.
          </p>

          {/* Accordions */}
          <div className="quick-answer-closing-accordions">
            {quickAnswers.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={item.id} className="quick-answer-closing-accordion-item">
                  <button
                    className="quick-answer-closing-accordion-trigger"
                    onClick={() => toggleAccordion(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-expanded={isOpen}
                    aria-controls={`quick-answer-content-${item.id}`}
                    id={`quick-answer-trigger-${item.id}`}
                  >
                    <span className="quick-answer-closing-accordion-title">
                      {item.title}
                    </span>
                    <span 
                      className={cn(
                        'quick-answer-closing-accordion-icon',
                        isOpen && 'quick-answer-closing-accordion-icon--open'
                      )}
                      aria-hidden="true"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`quick-answer-content-${item.id}`}
                    className={cn(
                      'quick-answer-closing-accordion-content',
                      isOpen && 'quick-answer-closing-accordion-content--open'
                    )}
                    aria-hidden={!isOpen}
                    role="region"
                    aria-labelledby={`quick-answer-trigger-${item.id}`}
                  >
                    <div className="quick-answer-closing-accordion-content-inner">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTAs */}
          <div className="quick-answer-closing-ctas">
            <Button
              asChild
              size="lg"
              className="quick-answer-closing-cta-primary"
            >
              <Link to={ctaLinks.primary.href}>
                {ctaLinks.primary.text}
              </Link>
            </Button>
            <div className="quick-answer-closing-cta-secondary">
              {ctaLinks.secondary.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="quick-answer-closing-cta-link"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Hinweistext */}
          <p className="quick-answer-closing-hint">
            Info-Seite – keine Bewerbung auf dieser Website.
          </p>
        </div>
      </div>
    </section>
  )
}

export default QuickAnswerClosing
