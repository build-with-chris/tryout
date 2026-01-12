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
    headline: "Sicherer Job. Sicheres Gefühl.",
    description: "Du startest nicht ins Ungewisse. Du kennst deinen Plan – und wenn's hakt, ist jemand da, der dich rauszieht. (Nicht erst nach Feierabend.)",
    examples: [
      "Schichten mit Vorlauf – damit Privatleben auch Platz hat",
      "Kolleg:innen als fester Anker am Start",
      "Stabilität, auf die man bauen kann"
    ],
    icon: Shield,
  },
  {
    id: 2,
    shortLabel: "Karriere",
    headline: "Wir begleiten dich auf Karriereleiter oder Karrierestapler.",
    description: "Du musst nicht geschniegelt \"Karriere machen\". Wer anpackt und dranbleibt, kommt bei uns weiter – finanziell und im Können.",
    examples: [
      "Klare Entwicklungsschritte",
      "Entwicklung in mehrere Richtungen (Markt/Logistik/Team)",
      "Perspektiven, die sichtbar sind (auch intern)"
    ],
    icon: ArrowUp,
  },
  {
    id: 3,
    shortLabel: "Respekt",
    headline: "Entrecôte statt Ellenbogen.",
    description: "Wenn's stressig wird, zählt nicht das Ego – sondern das Team. Bei uns hilft man sich, weil's sonst keinen Spaß macht.",
    examples: [
      "Teamgefühl als Standard, nicht als Ausnahme",
      "Unterstützung statt Schuldzuweisung",
      "Respektvoll – auch wenn's mal knirscht"
    ],
    icon: Users,
  },
  {
    id: 4,
    shortLabel: "Klarheit",
    headline: "Du weißt, was zählt – heute und morgen.",
    description: "Klarheit heißt auch: Ziel und Sinn verstehen. Dann macht Arbeit mehr Spaß – und weniger Stress.",
    examples: [
      "Verständliche Ziele – mit dir abgestimmt",
      "Feste Ansprechpartner, die dich begleiten",
      "Standards, die dir Sicherheit geben"
    ],
    icon: CheckSquare,
  },
  {
    id: 5,
    shortLabel: "Verantwortung",
    headline: "Wir machen's lieber praktisch als perfekt.",
    description: "Verantwortung zeigt sich in kleinen Entscheidungen – jeden Tag. Und du kannst Teil davon sein, ohne Theater.",
    examples: [
      "Ideen einbringen – pragmatisch, nicht bürokratisch",
      "Mitdenken im Kleinen (da, wo's wirkt)",
      "Offenheit für alle – im Team und im Umgang"
    ],
    icon: Leaf,
  },
  {
    id: 6,
    shortLabel: "Wertschätzung",
    headline: "REWE glaubt an dich. Glaub auch du an dich.",
    description: "Du bekommst Rückhalt, ehrliches Feedback und das Gefühl: Ich bin hier richtig – gerade am Anfang.",
    examples: [
      "Faire Bezahlung/Benefits als Basis",
      "Feedback auch dann, wenn's gut läuft",
      "Respektvoller Umgang als Standard"
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
            Hier arbeitet's sich gut. Punkt.
          </h2>
          <p className="values-subtitle">
            Du sollst wissen, woran du bist: Menschen im Fokus, nicht nur Prozesse.
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

