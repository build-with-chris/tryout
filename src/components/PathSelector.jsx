import { useState } from 'react'
import { Briefcase, Users, Shield } from 'lucide-react'
import './PathSelector.css'
import CareerPathJobs from './CareerPathJobs'
import { Feature297 } from '@/components/feature297'
import { Feature217b } from '@/components/feature217b'

// Image Alt-Texte für Markt, Logistik und Verwaltung
const imageAltTexts = {
  markt: "REWE Markt - Kundenberatung und Verkauf",
  logistik: "REWE Logistik - Warenbewegung und Kommissionierung",
  verwaltung: "REWE Verwaltung - Büro und Organisation",
}

// Inhalte für Markt, Logistik und Verwaltung - aus dem Arbeitsalltag
const pathContent = {
  markt: {
    headline: "Wo Teamgefühl den Tag trägt.",
    description: "Du bist da, wo es passiert. Kunden beraten, Ware auffüllen, im Team zusammenarbeiten. Jeder Tag ist anders, aber die Struktur gibt dir Sicherheit.",
    aspects: [
      {
        title: "Dein Arbeitsalltag",
        items: [
          "Kundengespräche an der Kasse und im Verkaufsbereich",
          "Ware auffüllen, Qualität prüfen, Regale ordnen",
          "Im Team Abläufe koordinieren und unterstützen"
        ]
      },
      {
        title: "Team & Zusammenarbeit",
        items: [
          "Kolleg:innen springen ein, wenn es voll wird",
          "Erfahrene Mitarbeitende zeigen dir die Abläufe",
          "Gemeinsam schaffen wir die Schichten"
        ]
      },
      {
        title: "Planbarkeit & Sicherheit",
        items: [
          "Feste Schichtpläne, die du frühzeitig kennst",
          "Klare Aufgaben und Zuständigkeiten",
          "Unbefristete Verträge, keine kurzfristigen Projekte"
        ]
      }
    ]
  },
  logistik: {
    headline: "Wenn du gern anpackst – aber nicht allein.",
    description: "Du sorgst dafür, dass die Ware ankommt. Kommissionieren, scannen, bewegen. Strukturierte Abläufe, klares Team, verlässliche Schichten.",
    aspects: [
      {
        title: "Dein Arbeitsalltag",
        items: [
          "Kommissionieren und Ware scannen",
          "Paletten bewegen und sicher lagern",
          "Prozesse sauber dokumentieren"
        ]
      },
      {
        title: "Team & Zusammenarbeit",
        items: [
          "Team unterstützt dich vom ersten Tag an",
          "Klare Übergaben zwischen Schichten",
          "Zusammenarbeit auf Augenhöhe"
        ]
      },
      {
        title: "Planbarkeit & Sicherheit",
        items: [
          "Transparente Schichtmodelle von Anfang an",
          "Sicherheitsbriefing und Einarbeitung",
          "Strukturierte Prozesse, die dir Orientierung geben"
        ]
      }
    ]
  },
  verwaltung: {
    headline: "Blick hinter die Kulissen.",
    description: "Du sorgst dafür, dass im Hintergrund alles funktioniert. Buchhaltung, Personal, Einkauf – strukturierte Abläufe, klares Team, verlässliche Arbeitszeiten.",
    aspects: [
      {
        title: "Dein Arbeitsalltag",
        items: [
          "Buchhaltung & Finanzen verwalten",
          "Personalwesen & Prozesse gestalten",
          "Einkauf & Beschaffung organisieren"
        ]
      },
      {
        title: "Team & Zusammenarbeit",
        items: [
          "Zusammenarbeit mit verschiedenen Abteilungen",
          "Mentoring durch erfahrene Kolleg:innen",
          "Strukturierte Prozesse und klare Kommunikation"
        ]
      },
      {
        title: "Planbarkeit & Sicherheit",
        items: [
          "Feste Arbeitszeiten, die du frühzeitig kennst",
          "Klare Aufgaben und Zuständigkeiten",
          "Unbefristete Verträge, langfristige Perspektive"
        ]
      }
    ]
  }
}

const PathSelector = () => {
  const [activePath, setActivePath] = useState(null) // null = keine Auswahl, 'markt', 'logistik' oder 'verwaltung'
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const paths = ['markt', 'logistik', 'verwaltung']

  const handlePathSelect = (path) => {
    if (activePath === path) return // Bereits aktiv
    
    setIsTransitioning(true)
    
    // Kurze Verzögerung für Fade-Out
    setTimeout(() => {
      setActivePath(path)
      setIsTransitioning(false)
    }, 150)
  }

  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handlePathSelect(path)
    }
  }

  const currentContent = activePath ? pathContent[activePath] : null

  return (
    <section className="path-selector section" id="path-selector" aria-labelledby="path-heading">
      <div className="container">
        <div className="path-selector-header">
          <h2 id="path-heading" className="path-selector-title">
            REWE – deinen Traum. Wo steigst du ein?
          </h2>
          <p className="path-selector-subtitle">
            Wähle deinen Bereich – und sieh sofort: Alltag, Teamgefühl, Planbarkeit, Entwicklung.
          </p>
        </div>

        {/* Feature297 Cards - Shadcn Style */}
        <div className="path-selector-cards">
          <Feature297
            items={[
              {
                id: 'markt',
                title: 'Ich will in den Markt',
                imageSrc: '/MarktLogistikVerwaltgung/Markt.jpg',
                imageAlt: imageAltTexts.markt,
              },
              {
                id: 'logistik',
                title: 'Ich will in die Logistik',
                imageSrc: '/MarktLogistikVerwaltgung/Logistik.jpg',
                imageAlt: imageAltTexts.logistik,
              },
              {
                id: 'verwaltung',
                title: 'Ich will in die Verwaltung',
                imageSrc: '/MarktLogistikVerwaltgung/Verwaltung.jpg',
                imageAlt: imageAltTexts.verwaltung,
              },
            ]}
            activeItem={activePath}
            onItemClick={handlePathSelect}
          />
        </div>

        {/* Content-Bereich - wechselt je nach Auswahl */}
        {activePath && currentContent && (
          <div 
            id="path-content"
            className={`path-content ${isTransitioning ? 'path-content--transitioning' : ''}`}
            role="region"
            aria-live="polite"
            aria-labelledby={`path-cta-${activePath}`}
            aria-label={`Inhalte für ${activePath === 'markt' ? 'Markt' : activePath === 'logistik' ? 'Logistik' : 'Verwaltung'}`}
          >
            {/* Feature217b für Content-Darstellung */}
            <Feature217b
              badge=""
              headline={currentContent?.headline}
              description={currentContent?.description}
              features={currentContent?.aspects.map((aspect, index) => ({
                ...aspect,
                icon: index === 0 ? Briefcase : index === 1 ? Users : Shield
              })) || []}
              backgroundImage={
                activePath === 'markt' 
                  ? '/QuerMarktLogistikVerwaltung/Markt.jpg'
                  : activePath === 'logistik'
                  ? '/QuerMarktLogistikVerwaltung/Logistik.jpg'
                  : '/QuerMarktLogistikVerwaltung/Verwaltung.jpg'
              }
            />

            {/* Wechsel-Button */}
            <div className="path-switch">
              <button
                className="path-switch-button"
                onClick={() => {
                  const currentIndex = paths.indexOf(activePath)
                  const nextIndex = (currentIndex + 1) % paths.length
                  handlePathSelect(paths[nextIndex])
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    const currentIndex = paths.indexOf(activePath)
                    const nextIndex = (currentIndex + 1) % paths.length
                    handlePathSelect(paths[nextIndex])
                  }
                }}
                aria-label={`Zu ${activePath === 'markt' ? 'Logistik' : activePath === 'logistik' ? 'Verwaltung' : 'Markt'} wechseln`}
              >
                {activePath === 'markt' ? 'Zur Logistik' : activePath === 'logistik' ? 'Zur Verwaltung' : 'Zum Markt'}
              </button>
            </div>

            {/* Karrierepfade-Jobs Ergänzung */}
            <CareerPathJobs activePath={activePath} />
          </div>
        )}
      </div>
    </section>
  )
}

export default PathSelector

