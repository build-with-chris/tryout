import { useState } from 'react'
import {
  Shield,
  ArrowUp,
  Users,
  CheckSquare,
  Leaf,
  Star,
} from "lucide-react"
import './ValuesSection.css'

// Alltagsnahe Werte-Daten mit konkreten Beispielen aus Markt/Logistik
const valuesData = [
  {
    id: 1,
    shortLabel: "Sicherheit",
    headline: "Darauf kannst du dich verlassen",
    description: "Du weißt morgens, was heute ansteht. Die Schichten sind klar, die Aufgaben auch. Wenn mal was Unerwartetes kommt, gibt es jemanden, der dir zeigt, wie's geht.",
    examples: [
      "Feste Schichtpläne, die du frühzeitig kennst",
      "Einarbeitung mit erfahrenen Kolleg:innen an deiner Seite",
      "Unbefristete Verträge statt kurzfristiger Projekte"
    ],
    icon: Shield,
  },
  {
    id: 2,
    shortLabel: "Karriere",
    headline: "So wächst man bei uns",
    description: "Vom Einsteiger zur Fachkraft, vom Regal zur Kasse, von der Logistik zur Teamleitung. Du lernst Schritt für Schritt, und wir zeigen dir den Weg.",
    examples: [
      "Schulungen direkt im Markt, nicht nur in der Theorie",
      "Regelmäßige Gespräche über deine nächsten Schritte",
      "Klare Wege: Fachlaufbahn oder Führung – beides möglich"
    ],
    icon: ArrowUp,
  },
  {
    id: 3,
    shortLabel: "Respekt",
    headline: "So läuft Zusammenarbeit bei uns",
    description: "Wenn die Kasse voll ist, springt jemand ein. Wenn die Palette schwer ist, hilft jemand mit. Im Team funktioniert's, weil alle auf Augenhöhe sind.",
    examples: [
      "Unterstützung in stressigen Phasen, nicht allein gelassen",
      "Offene Kommunikation, auch wenn's mal nicht passt",
      "Fairer Umgang – unabhängig von Alter oder Erfahrung"
    ],
    icon: Users,
  },
  {
    id: 4,
    shortLabel: "Klarheit",
    headline: "Weniger Rätselraten, mehr Flow",
    description: "Du weißt, wer dein Ansprechpartner ist. Du weißt, was erwartet wird. Du weißt, wie die Abläufe funktionieren. Das gibt Sicherheit im Alltag.",
    examples: [
      "Transparente Ziele und Erwartungen von Anfang an",
      "Feste Ansprechpartner für Fragen und Probleme",
      "Strukturierte Prozesse, die dir Orientierung geben"
    ],
    icon: CheckSquare,
  },
  {
    id: 5,
    shortLabel: "Verantwortung",
    headline: "So nehmen wir Verantwortung ernst",
    description: "Vielfalt ist bei uns Normalität. Nachhaltigkeit passiert im Alltag – beim Einkauf, im Lager, im Team. Jeder kann sich einbringen, jeder wird gehört.",
    examples: [
      "Offenheit für alle – unabhängig von Herkunft oder Hintergrund",
      "Praktische Nachhaltigkeit im täglichen Arbeiten",
      "Respekt als Standard, nicht als Ausnahme"
    ],
    icon: Leaf,
  },
  {
    id: 6,
    shortLabel: "Wertschätzung",
    headline: "Gute Leistung bleibt nicht unsichtbar",
    description: "Wenn du etwas gut machst, wird es gesehen. Wenn du dich einbringst, wird es wertgeschätzt. Faire Bezahlung, ehrliches Feedback, gemeinsame Erfolge.",
    examples: [
      "Konstruktives Feedback, nicht nur wenn etwas schiefläuft",
      "Faire Bezahlung und Benefits, die wirklich ankommen",
      "Gemeinsam Erfolge feiern, nicht nur Einzelkämpfer:innen"
    ],
    icon: Star,
  },
]

const ValuesSection = () => {
  const [activeValue, setActiveValue] = useState(valuesData[0].id)

  const handleValueClick = (valueId) => {
    setActiveValue(valueId)
  }

  const handleKeyDown = (e, valueId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleValueClick(valueId)
      return
    }

    // Pfeiltasten-Navigation für horizontale Navigation
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
      const currentIndex = valuesData.findIndex(v => v.id === valueId)
      let newIndex

      if (e.key === 'ArrowLeft') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : valuesData.length - 1
      } else {
        newIndex = currentIndex < valuesData.length - 1 ? currentIndex + 1 : 0
      }

      const newValue = valuesData[newIndex]
      setActiveValue(newValue.id)
      
      // Focus auf das neue Element setzen
      const newButton = document.getElementById(`value-tab-${newValue.id}`)
      if (newButton) {
        newButton.focus()
      }
    }
  }

  const currentValue = valuesData.find(v => v.id === activeValue) || valuesData[0]

  return (
    <section className="values-section section" id="werte" aria-labelledby="values-heading">
      <div className="container">
        <div className="values-header">
          <h2 id="values-heading" className="values-title">
            So läuft es bei uns
          </h2>
          <p className="values-subtitle">
            Werte, die du im Alltag erlebst – nicht nur in der Broschüre.
          </p>
        </div>

        <div className="values-container">
          {/* Werte-Navigation */}
          <nav className="values-nav" role="tablist" aria-label="Werte auswählen">
            <div className="values-nav-scroll">
              {valuesData.map((value) => {
                const IconComponent = value.icon
                const isActive = value.id === activeValue
                
                return (
                  <button
                    key={value.id}
                    className={`values-nav-item ${isActive ? 'values-nav-item--active' : ''}`}
                    onClick={() => handleValueClick(value.id)}
                    onKeyDown={(e) => handleKeyDown(e, value.id)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`value-content-${value.id}`}
                    id={`value-tab-${value.id}`}
                    tabIndex={isActive ? 0 : -1}
                  >
                    <IconComponent 
                      className="values-nav-icon" 
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="values-nav-label">{value.shortLabel}</span>
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Aktiver Wert-Content */}
          <div 
            className="values-content"
            role="tabpanel"
            id={`value-content-${currentValue.id}`}
            aria-labelledby={`value-tab-${currentValue.id}`}
          >
            <div className="values-content-inner">
              <div className="values-content-header">
                <h3 className="values-content-headline">
                  {currentValue.headline}
                </h3>
                <p className="values-content-description">
                  {currentValue.description}
                </p>
              </div>

              <div className="values-examples">
                <h4 className="values-examples-title">Konkret bedeutet das:</h4>
                <ul className="values-examples-list" role="list">
                  {currentValue.examples.map((example, index) => (
                    <li key={index} className="values-examples-item">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection

