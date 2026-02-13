import { useState } from 'react'
import {
  Shield,
  ArrowUp,
  Users,
  CheckSquare,
  Leaf,
  Star,
  X,
} from "lucide-react"
import './ValuesSection.css'

// Alltagsnahe Werte-Daten mit konkreten Beispielen aus Markt/Logistik
const valuesData = [
  {
    id: 1,
    shortLabel: "Sicherheit",
    headline: "Sicherer Job. Sicheres Gefühl.",
    description: "Wir schaffen Rahmenbedingungen, auf die du dich verlassen kannst.",
    examples: [
      "Sonderleistungen wie Urlaubs- und Weihnachtsgeld, plus vermögenswirksame Leistungen & betriebliche Altersvorsorge.",
      "Zuschüsse (z.B. Kantine) und vergünstigtes Deutschlandticket / Fahrrad-Leasing."
    ],
    icon: Shield,
    reelSrc: "/Reels%20copy/Sicherheit.mp4",
    thumbnailSrc: "/Logisitik/rewe_logstik_sued_foto-craft_8958.jpg",
  },
  {
    id: 2,
    shortLabel: "Karriere",
    headline: "Wir begleiten dich auf der Karriereleiter.",
    description: "Weiterkommen ist bei uns kein Zufall. Wir fördern dich individuell — vom ersten Tag an.",
    examples: [
      "Seminarangebot & Weiterbildungsprogramme (plus z.B. E-Learnings, Konferenzen, Hackathons je nach Bereich).",
      "Kickstart-Formate wie REWE Akademie, myCampus und Women's Drive."
    ],
    icon: ArrowUp,
    reelSrc: "/Reels copy/Karriere.mp4",
    thumbnailSrc: "/Logisitik/rewe_logstik_sued_foto-craft_8805.jpg",
  },
  {
    id: 3,
    shortLabel: "Zusammenhalt",
    headline: "Umgang auf Augenhöhe",
    description: "REWE steht für null Toleranz gegenüber Diskriminierung, und gleiche Chancen sind unser Anspruch",
    examples: [
      "Wir sprechen offen, ehrlich, respektvoll und wertschätzend - ausdrücklich als Kommunikationsprinzip.",
      "Ein Verhaltenskodex, der diese Art der Kommunikation auf allen Ebenen tragen soll."
    ],
    icon: Users,
    reelSrc: "/Reels copy/Respekt.mp4",
  },
  {
    id: 4,
    shortLabel: "Klarheit",
    headline: "Halt und Orientierung durch klare Strukturen",
    description: "Regelmäßige Personalgespräche geben Orientierung durch klare Erwartungen und offene Kommunikation",
    examples: [
      "Kommunikation ist unser Schlüsselfaktor und eine klare Leitline im Unternehmen",
      "Informationen, wie Arbeitsmodelle oder deine Benefits werden strukturiert an dich kommuniziert."
    ],
    icon: CheckSquare,
    reelSrc: "/Reels copy/Klarheit.mp4",
  },
  {
    id: 5,
    shortLabel: "Verantwortung",
    headline: "Mitwirken, Verantwortung übernehmen, etwas bewegen.",
    description: "Wir fördern eigenverantwortliches Handeln - und geben Raum, Dinge voranzubringen.",
    examples: [
      "Agiles Arbeitsumfeld: Arbeit in agilen oder cross-funktionalen Teams, eigenverantwortlich und ergebnisorientiert.",
      "Wir schaffen Rahmenbedingungen, die unternehmerisches Denken und eigenverantwortliches Handeln fördern und fordern."
    ],
    icon: Leaf,
    reelSrc: "/Reels copy/Verantwortung.mp4",
  },
  {
    id: 6,
    shortLabel: "Wertschätzung",
    headline: ["REWE glaubt an dich.", "Glaub auch du an dich."],
    description: "Bei REWE steht der Mensch im Mittelpunkt.",
    examples: [
      "Work-Life-Balance-Angebote (z.B. flexible Arbeitszeiten ohne Kernarbeitszeit, Homeoffice-Ausstattung, Sabbatical, ...)",
      "Gesundheitsmanagement (Sport-/Gesundheitsangebote, EGYM Wellpass, betriebsärztliche Leistungen, Erste-Hilfe-Weiterbildungen)."
    ],
    icon: Star,
    reelSrc: "/Reels copy/Wertschätzung.mp4",
  },
]

// SVG-Icons für jeden Wert
const getValueIcon = (valueId) => {
  const icons = {
    1: (
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" 
      />
    ),
    2: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
    3: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    ),
    4: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
    ),
    5: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
    ),
    6: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
    ),
  }
  return icons[valueId] || null
}

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
            Bei REWE Süd arbeitet's sich gut. Punkt.
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

          {/* Aktiver Wert-Content - Einheitliche Struktur für alle Werte */}
          <div 
            className="values-content values-content--expanded"
            role="tabpanel"
            id={`value-content-${currentValue.id}`}
            aria-labelledby={`value-tab-${currentValue.id}`}
          >
            {/* Struktur für alle Werte: Icon oben, Content zentriert */}
            <div className="values-content-expanded values-content-expanded--centered">
              {/* SVG Icon oben mittig */}
              <div className="values-icon-hero">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="values-svg-hero"
                  aria-hidden="true"
                >
                  {getValueIcon(currentValue.id)}
                </svg>
              </div>

              {/* Zentrierter Content */}
              <div className="values-content-centered">
                <div className="values-content-header values-content-header--centered">
                  <h3 className="values-content-headline values-content-headline--centered">
                    {Array.isArray(currentValue.headline) ? (
                      <>
                        {currentValue.headline[0]}
                        <br />
                        {currentValue.headline[1]}
                      </>
                    ) : (
                      currentValue.headline
                    )}
                  </h3>
                  <p className="values-content-description values-content-description--centered">
                    {currentValue.description}
                  </p>
                </div>

                <div className="values-examples values-examples--centered">
                  <h4 className="values-examples-title values-examples-title--centered">Konkret bedeutet das:</h4>
                  <ul className="values-examples-list values-examples-list--centered" role="list">
                    {currentValue.examples.map((example, index) => (
                      <li key={index} className="values-examples-item values-examples-item--centered">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection

