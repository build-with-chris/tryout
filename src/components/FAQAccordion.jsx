import { useState } from 'react'
import './FAQAccordion.css'

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      question: 'Wie schnell kann ich bei REWE starten?',
      answer: 'Mit "Heute loslegen" kannst du bereits in 60 Sekunden deine Bewerbung absenden und innerhalb von 24 Stunden eine Rückmeldung erhalten. Der tatsächliche Starttermin hängt von der Position und deiner Verfügbarkeit ab. Bei vielen Positionen ist ein schneller Einstieg möglich.'
    },
    {
      question: 'Welche Qualifikationen brauche ich?',
      answer: 'Das hängt von der Position ab. Für viele Einstiegspositionen im Markt oder in der Logistik sind keine speziellen Vorkenntnisse erforderlich. Wir bieten umfassende Einarbeitung und Schulungen. Für Fachpositionen in IT, Einkauf oder Verwaltung sind entsprechende Qualifikationen von Vorteil, aber auch Quereinsteiger sind willkommen.'
    },
    {
      question: 'Gibt es Teilzeit-Möglichkeiten?',
      answer: 'Ja, wir bieten vielfältige Arbeitszeitmodelle – von Vollzeit über Teilzeit bis hin zu Minijobs. Sprich uns einfach an, wir finden gemeinsam eine Lösung, die zu dir passt. Auch flexible Arbeitszeiten und Schichtmodelle sind möglich.'
    },
    {
      question: 'Wie läuft das Bewerbungsverfahren ab?',
      answer: 'Du kannst zwischen zwei Wegen wählen: "Heute loslegen" für eine schnelle Bewerbung in 60 Sekunden oder "Weiterkommen mit Plan" für eine ausführliche Beratung und individuelle Betreuung. Beide Wege führen zu einem persönlichen Gespräch, bevor wir gemeinsam entscheiden. Wir begleiten dich durch den gesamten Prozess.'
    },
    {
      question: 'Welche Entwicklungsmöglichkeiten gibt es?',
      answer: 'REWE bietet vielfältige Karrierewege – von der Ausbildung über Weiterbildungen bis hin zu Führungspositionen. Wir unterstützen dich dabei, deine Ziele zu erreichen und dich kontinuierlich weiterzuentwickeln. Regelmäßige Feedbackgespräche und individuelle Entwicklungspläne gehören dazu.'
    },
    {
      question: 'Wie sieht die Bezahlung aus?',
      answer: 'REWE zahlt faire und marktgerechte Gehälter. Die genaue Höhe hängt von der Position, deiner Erfahrung und deinen Qualifikationen ab. Wir bieten unbefristete Verträge und regelmäßige Gehaltsentwicklungen. In einem persönlichen Gespräch können wir dir konkrete Zahlen nennen.'
    },
    {
      question: 'Gibt es Weiterbildungsmöglichkeiten?',
      answer: 'Ja, REWE investiert in die Weiterbildung seiner Mitarbeiter. Wir bieten interne Schulungen, externe Weiterbildungen und die Möglichkeit, neue Bereiche kennenzulernen. Von fachlichen Qualifikationen bis hin zu Führungskräftetrainings – wir unterstützen dich bei deiner Entwicklung.'
    },
    {
      question: 'Wie ist die Work-Life-Balance bei REWE?',
      answer: 'Work-Life-Balance ist uns wichtig. Wir bieten flexible Arbeitszeiten, Teilzeitmodelle und individuelle Lösungen. Viele unserer Mitarbeiter schätzen die gute Vereinbarkeit von Beruf und Privatleben. Sprich uns einfach an, wir finden gemeinsam die beste Lösung für dich.'
    }
  ]

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(index)
    }
  }

  return (
    <section className="faq-accordion-section section" id="faq">
      <div className="container">
        <h2 className="h2 text-center mb-xl">Häufige Fragen</h2>
        <p className="text-center mb-xl" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)', color: 'var(--color-neutral-600)' }}>
          Alles, was du über deinen Einstieg bei REWE wissen musst
        </p>

        <div className="faq-accordion-container">
          <div className="accordion">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="accordion-item">
                  <button
                    className="accordion-trigger"
                    onClick={() => toggle(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                    id={`faq-trigger-${index}`}
                  >
                    <span className="accordion-question">{item.question}</span>
                    <span className="accordion-trigger-icon icon">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-content-${index}`}
                    className="accordion-content"
                    aria-hidden={!isOpen}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                  >
                    <div className="accordion-content-inner">{item.answer}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQAccordion

