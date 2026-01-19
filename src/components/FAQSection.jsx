import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import { cn } from '@/lib/utils'
import './FAQSection.css'

// Einfache Plus-zu-X Lottie Animation
const plusToXAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 30,
  "w": 24,
  "h": 24,
  "nm": "Plus to X",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Plus",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 1, "k": [
          {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [0]},
          {"t": 30, "s": [45]}
        ]},
        "p": {"a": 0, "k": [12, 12, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0]],
                  "v": [[-6, 0], [6, 0]],
                  "c": false
                }
              }
            },
            {
              "ty": "st",
              "c": {"a": 0, "k": [0.8, 0.04, 0.12, 1]},
              "o": {"a": 0, "k": 100},
              "w": {"a": 0, "k": 2},
              "lc": 2,
              "lj": 2
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [12, 12]},
              "a": {"a": 0, "k": [0, 0]},
              "s": {"a": 0, "k": [100, 100]},
              "r": {"a": 0, "k": 0},
              "o": {"a": 0, "k": 100}
            }
          ],
          "nm": "Horizontal",
          "bm": 0
        },
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0]],
                  "v": [[0, -6], [0, 6]],
                  "c": false
                }
              }
            },
            {
              "ty": "st",
              "c": {"a": 0, "k": [0.8, 0.04, 0.12, 1]},
              "o": {"a": 0, "k": 100},
              "w": {"a": 0, "k": 2},
              "lc": 2,
              "lj": 2
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [12, 12]},
              "a": {"a": 0, "k": [0, 0]},
              "s": {"a": 0, "k": [100, 100]},
              "r": {"a": 0, "k": 0},
              "o": {"a": 0, "k": 100}
            }
          ],
          "nm": "Vertical",
          "bm": 0
        }
      ],
      "ip": 0,
      "op": 30,
      "st": 0,
      "bm": 0
    }
  ],
  "markers": []
}

// FAQ-Daten
const faqData = [
  {
    id: 1,
    question: "Welche Benefits bietet REWE Süd?",
    answer: [
      "Urlaubs- & Weihnachtsgeld (tariflich/Betriebsvereinbarung, teils gestaffelt)",
      "VL (je Tarif)",
      "Mobilität (z. B. Fahrtkostenzuschuss/Deutschlandticket/JobRad)",
      "Altersvorsorge/Pensionskasse",
      "Mitarbeitendenrabatte (u. a. REWE/PENNY + Partner)",
      "Gesundheit (Betriebsarzt, Gesundheitstage, teils Massage)",
      "Jubiläumsgeld",
      "Sonderzahlungen (z. B. Geburt/Ruhestand)",
      "\"Mitarbeitende werben Mitarbeitende\" (500 €)"
    ]
  },
  {
    id: 2,
    question: "Logistikbelohnung gefällig?",
    answer: [
      "Je nach Standort/Regelung: freiwilliger Flexi-Tag",
      "Sprachkurse",
      "Hochwertige Arbeitskleidung",
      "Sonderzahlung auf die Mitarbeitendenkarte bei 6-Tage-Woche",
      "Firmeneigene Fußballmannschaft",
      "In Eitting kostenlose Nutzung der Fitnessräume inkl. Trainer"
    ]
  },
  {
    id: 3,
    question: "Wie unterstützt REWE Süd Entwicklung und Vereinbarkeit?",
    answer: [
      "Individuelle Aus- und Weiterbildungen",
      "Azubi-Projekte",
      "Übernahmegarantie bei guten Leistungen (nach Bedingungen)",
      "Ausbildung in Teilzeit",
      "Unterstützung bei Nachhilfebedarf",
      "Wo es der Job zulässt – flexible Arbeitszeitmodelle",
      "Optionen wie Sabbatical (bis zu 6 Monate Freistellung innerhalb von 12 Monaten nach Regelung)"
    ]
  }
]

const FAQSection = ({ className }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={cn("faq-section", className)} id="faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">Häufige Fragen</h2>
          <p className="faq-subtitle">
            Alles, was du über deine Karriere bei REWE Süd wissen musst.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <div key={faq.id} className="faq-item">
                <button
                  className={cn("faq-question", isOpen && "faq-question--open")}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <div className="faq-icon-wrapper">
                    {isOpen ? (
                      <motion.div
                        initial={{ rotate: 0, scale: 1 }}
                        animate={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <Lottie
                          animationData={plusToXAnimation}
                          loop={false}
                          autoplay={true}
                          style={{ width: 24, height: 24 }}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ rotate: 45 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="#CC071E" strokeWidth="2"/>
                          <path d="M12 8V16M8 12H16" stroke="#CC071E" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="faq-answer"
                    >
                      <div className="faq-answer-content">
                        <ul className="faq-answer-list">
                          {faq.answer.map((item, itemIndex) => (
                            <li key={itemIndex} className="faq-answer-item">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
